$ConfigPath = "./batch-randomize.conf"

# Check for config
if (-Not (Test-Path -Path $ConfigPath)) {
    Write-Output "Could not read config from $ConfigPath!"
    exit 1
}

# Read and parse config
foreach ($Item in $(Get-Content $ConfigPath)){
    Set-Variable -Name $Item.split("=")[0] -Value $Item.split("=",2)[1]
}

# Verify required files exist
if (-Not (Test-Path -Path $RomPath)) {
    Write-Output "Could not find ROM at $RomPath!"
    exit 1
}
if (-Not (Test-Path -Path $RandomizerJarPath)) {
    Write-Output "Could not find randomizer at $RandomizerJarPath!"
    exit 1
}
if (-Not (Test-Path -Path $RandomizerSettingsPath)) {
    Write-Output "Could not find randomizer settings at $RandomizerSettingsPath!"
    exit 1
}

# Check that output path exists
if (-Not (Test-Path -Path $OutputPath)) {
    $Create = Read-Host "Output path '$OutputPath' not found! Create? (Y/n)"

    if (($Create -eq '') -or ($Create.ToLower() -eq 'y')) {
        Write-Output "Creating directory at '$OutputPath'."
        New-Item -Path $OutputPath -ItemType "directory" | Out-Null
    } else {
        Write-Output "Cannot write to output path. Path does not exist."
        exit 1
    }
}

Write-Output "Generating $SeedCount seeds starting at $FirstSeedNumber..."

# Generate configured seeds
$RomFile = Get-Item $RomPath
$RomFileName = $RomFile.Basename
$RomExtension = $RomFile.Extension
for ([int] $Index = 0; $Index -lt $SeedCount; $Index++) {
    [int] $FileNumber = $FirstSeedNumber + $Index
    [string] $PaddedFileNumber = '{0:d5}' -f $FileNumber
    [string] $OutputFileName = "$RomFileName Randomized $PaddedFileNumber$RomExtension"

    Write-Output "Creating '$OutputPath/$OutputFileName'."
    java -Xmx4608M -jar $RandomizerJarPath cli -i "$RomPath" -o "$OutputPath/$OutputFileName" -s $RandomizerSettingsPath
}
