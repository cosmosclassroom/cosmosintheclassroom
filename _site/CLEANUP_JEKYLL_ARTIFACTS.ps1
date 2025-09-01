# Remove Jekyll build artifacts from all course content folders

$courseRoots = @(
    "physics\honors",
    "physics\standard",
    "src\courses\hphys",
    "src\courses\sphys"
)

foreach ($root in $courseRoots) {
    # Remove all index.html files in any subfolder
    Get-ChildItem -Path $root -Recurse -Filter "index.html" | Remove-Item -Force

    # Remove all _site folders in any subfolder
    Get-ChildItem -Path $root -Recurse -Directory | Where-Object { $_.Name -eq "_site" } | Remove-Item -Recurse -Force

    # Remove any empty folders left behind
    Get-ChildItem -Path $root -Recurse -Directory | Where-Object { @(Get-ChildItem $_.FullName -Force).Count -eq 0 } | Remove-Item -Force
}
Write-Host "Cleanup complete."

# --- Migrate markdown files from experimental/q4-2025 to honors units ---
$expRoot = "experimental\q4-2025"
$honorsUnitsRoot = "physics\honors\units"

if (Test-Path $expRoot) {
    # Helper: Get unit folder name from filename (e.g., ps10.1_geometric_optics.md → 10_optics)
    function Get-UnitFolder($filename) {
        if ($filename -match "^ps(\d+)\.") {
            $unitNum = $matches[1]
        } elseif ($filename -match "^lesson(\d+)_") {
            $unitNum = $matches[1]
        } elseif ($filename -match "^(\d+)\.") {
            $unitNum = $matches[1]
        } else {
            return $null
        }
        switch ($unitNum) {
            "01" { return "01_principles" }
            "02" { return "02_kinematics" }
            "03" { return "03_forces" }
            "04" { return "04_dynamics" }
            "05" { return "05_energy" }
            "06" { return "06_circular_gravity" }
            "07" { return "07_momentum" }
            "08" { return "08_rotation" }
            "09" { return "09_oscillations" }
            "10" { return "10_electromagnetism" }
            default { return $null }
        }
    }

    # Move markdown files
    Get-ChildItem -Path $expRoot -Filter "*.md" | ForEach-Object {
        $file = $_
        $unitFolder = Get-UnitFolder $file.Name
        if ($null -eq $unitFolder) { return }

        # Determine destination subfolder
        if ($file.Name -match "^lesson") {
            $destFolder = "$honorsUnitsRoot\$unitFolder\lessons"
        } elseif ($file.Name -match "^ps") {
            $destFolder = "$honorsUnitsRoot\$unitFolder\problemsets"
        } else {
            $destFolder = "$honorsUnitsRoot\$unitFolder\lessons"
        }

        # Ensure destination exists
        if (-not (Test-Path $destFolder)) {
            New-Item -ItemType Directory -Path $destFolder | Out-Null
        }

        # Move file
        Move-Item $file.FullName "$destFolder\$($file.Name)" -Force
        Write-Host "Moved $($file.Name) to $destFolder"
    }
} else {
    Write-Host "Experimental folder $expRoot does not exist. Skipping markdown migration."
}
