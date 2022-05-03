import { IConfig } from "./interfaces/IConfig.ts";

export const isConfig = (config: unknown): config is IConfig => {
  if (!isRecord(config)) {
    return false;
  }

  if (
    Object.keys(config).filter((key) =>
      [
        "firstSeedNumber",
        "seedCount",
        "romPath",
        "outputPath",
        "randomizerSettingsPath",
        "randomizerJarPath",
      ].includes(key)
    ).length === 0
  ) {
    return false;
  }

  if (typeof config.firstSeedNumber !== "number") {
    return false;
  }
  if (typeof config.seedCount !== "number") {
    return false;
  }
  if (typeof config.romPath !== "string") {
    return false;
  }
  if (typeof config.outputPath !== "string") {
    return false;
  }
  if (typeof config.randomizerSettingsPath !== "string") {
    return false;
  }
  if (typeof config.randomizerJarPath !== "string") {
    return false;
  }

  return true;
};

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};
