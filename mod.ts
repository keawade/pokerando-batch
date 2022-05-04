import { isConfig } from "./isConfig.ts";
import { ensureDir, parsePath, joinPath } from "./deps.ts";

const CONFIG_PATH = "./batch-randomize-config.json";

let config: unknown;
try {
  config = JSON.parse(await Deno.readTextFile(CONFIG_PATH));
} catch {
  throw new Deno.errors.NotFound(
    `Unable to read configuration from '${CONFIG_PATH}'.`
  );
}

if (!isConfig(config)) {
  throw new Deno.errors.InvalidData(
    `Invalid configuration. Please check configuration file located at '${CONFIG_PATH}'.`
  );
}

await ensureDir(config.outputPath);

try {
  await Deno.stat(config.romPath);
} catch {
  throw new Deno.errors.NotFound(
    `Unable to find ROM file at '${config.romPath}'.`
  );
}

try {
  await Deno.stat(config.randomizerJarPath);
} catch {
  throw new Deno.errors.NotFound(
    `Unable to find randomizer jar file at '${config.randomizerJarPath}'.`
  );
}

try {
  await Deno.stat(config.randomizerSettingsPath);
} catch {
  throw new Deno.errors.NotFound(
    `Unable to find randomizer settings file at '${config.randomizerSettingsPath}'.`
  );
}

const parsedRomPath = parsePath(config.romPath);

for (let i = 0; i < config.seedCount; i++) {
  const paddedFileNumber = `${i + config.firstSeedNumber}`.padStart(5, "0");
  const outputFileName = `${parsedRomPath.name} Randomized ${paddedFileNumber}${parsedRomPath.ext}`;

  console.log(`Generating ${outputFileName}`);

  const process = Deno.run({
    cmd: [
      "java",
      "-Xmx4608M",
      "-jar",
      config.randomizerJarPath,
      "cli",
      "-i",
      config.romPath,
      "-o",
      joinPath(config.outputPath, outputFileName),
      "-s",
      config.randomizerSettingsPath,
    ],
    stdout: "null",
  });

  await process.status();
}
