# Batch tool for PokeRandoZX

This repository provides a tool for creating batches of randomized Pokemon seeds. This is particularly useful for things like generating lots of seeds for IronMON runs.

## Usage

1. To use this tool you will need to have a copy of [Ajarmar Universal Pokemon Randomizer ZX](https://github.com/Ajarmar/universal-pokemon-randomizer-zx).

2. Download the `pokerando-batch-<platform>` executable for your platform and the `batch-randomize-config.json` configuration file from the [releases page](https://github.com/keawade/pokerando-batch/releases).

3. Modify the configuration file to your needs.

   ```jsonc
   {
     "firstSeedNumber": 0, // Number at which to begin labeling seeds.
     "seedCount": 50, // Number of seeds to create.
     "romPath": "./PokemonEmerald.gba", // Path to the ROM file you want to randomize.
     "outputPath": "./Seeds", // Folder path in which to save the seeds.
     "randomizerSettingsPath": "./PokemonEmeraldIronMON.rnqs", // Path to the randomizer's settings file to use for randomization.
     "randomizerJarPath": "../PokeRandoZX-v4_4_0/PokeRandoZX.jar" // Path to the randomizer.
   }
   ```

4. Run the the executable.
