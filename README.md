# Batch script for PokeRandoZX

This repository provides a script for creating batches of randomized Pokemon seeds. This is particularly useful for things like generating seeds for IronMON runs.

## Usage

To use this script you will need to have a copy of [Ajarmar Universal Pokemon Randomizer ZX](https://github.com/Ajarmar/universal-pokemon-randomizer-zx).

Copy the script and its configuration file to a location of your choosing.

Modify the configuration file to your needs.

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
