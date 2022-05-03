# Batch script for PokeRandoZX

This repository provides a script for creating batches of randomized Pokemon seeds. This is particularly useful for things like generating seeds for IronMON runs.

## Usage

To use this script you will need to have a copy of [Ajarmar Universal Pokemon Randomizer ZX](https://github.com/Ajarmar/universal-pokemon-randomizer-zx).

Copy the script and its configuration file to a location of your choosing.

Modify the configuration file to your needs.

| Name                     | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| `FirstSeedNumber`        | Number at which to begin labeling seeds.                         |
| `SeedCount`              | Number of seeds to create.                                       |
| `RomPath`                | Path to the ROM file you want to randomize.                      |
| `OutputPath`             | Folder path in which to save the seeds.                          |
| `RandomizerSettingsPath` | Path to the randomizer's settings file to use for randomization. |
| `RandomizerJarPath`      | Path to the randomizer.                                          |

The default config expects the script to be run from a subdirectory of the PokeRandoZX's directory.
