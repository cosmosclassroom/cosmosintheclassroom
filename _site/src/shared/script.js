let markdownFiles = [];
let currentFileIndex = 0;

// Function to load the JSON configuration file
function loadMarkdownConfig(configPath) {
    return fetch(configPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load config file: ${configPath}`);
            }
            return response.json();
        })
        .then(config => {
            markdownFiles = config.markdownFiles;
            document.getElementById('totalFiles').textContent = markdownFiles.length;
            loadMarkdownFile(currentFileIndex);
        })
        .catch(error => {
            console.error(`Error loading markdown configuration: ${error.message}`);
        });
}

// Function to load and render a Markdown file
function loadMarkdownFile(index) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<p>Loading...</p>';

    fetch(markdownFiles[index])
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load file: ${markdownFiles[index]}`);
            }
            return response.text();
        })
        .then(markdownText => {
            contentDiv.innerHTML = marked.parse(markdownText);
            renderMathInElement(contentDiv, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false }
                ]
            });
        })
        .catch(error => {
            contentDiv.innerHTML = `<div class="load-error">${error.message}</div>`;
            console.error(error);
        });
}

// Navigation functions
function navigatePrevious() {
    if (currentFileIndex > 0) {
        currentFileIndex--;
        loadMarkdownFile(currentFileIndex);
    }
}

function navigateNext() {
    if (currentFileIndex < markdownFiles.length - 1) {
        currentFileIndex++;
        loadMarkdownFile(currentFileIndex);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    const configPath = './markdownFiles.json'; // Path to the JSON file
    loadMarkdownConfig(configPath);

    document.getElementById('prevBtn').addEventListener('click', navigatePrevious);
    document.getElementById('nextBtn').addEventListener('click', navigateNext);
});
