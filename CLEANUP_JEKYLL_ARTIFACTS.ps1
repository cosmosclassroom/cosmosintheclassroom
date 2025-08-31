# Remove Jekyll build artifacts from course content folders

$courseRoots = @(
    "physics\honors\units",
    "physics\standard\units",
    "src\courses\hphys",
    "src\courses\sphys"
)

foreach ($root in $courseRoots) {
    # Remove index.html files from all subfolders
    Get-ChildItem -Path $root -Recurse -Filter "index.html" | Remove-Item -Force

    # Remove _site folders from all subfolders
    Get-ChildItem -Path $root -Recurse -Directory -Filter "_site" | Remove-Item -Recurse -Force
}
Write-Host "Cleanup complete."
