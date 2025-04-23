// Function to load configuration from a JSON file
function loadConfig(configPath, callback) {
    fetch(configPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load config file: ${configPath}`);
            }
            return response.json();
        })
        .then(config => callback(config))
        .catch(error => {
            console.error(error.message);
            document.body.innerHTML += '<p>Error loading configuration. Default settings will be used.</p>';
        });
}

// Function to initialize the notebook
function initializeNotebook(config) {
    // Apply stylesheets
    config.stylesheets.forEach(stylesheet => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = stylesheet;
        document.head.appendChild(link);
    });

    // Initialize Markdown files and navigation
    const markdownFiles = config.markdownFiles;
    let currentFileIndex = 0;

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

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('totalFiles').textContent = markdownFiles.length;
        loadMarkdownFile(currentFileIndex);

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentFileIndex > 0) {
                currentFileIndex--;
                loadMarkdownFile(currentFileIndex);
            }
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentFileIndex < markdownFiles.length - 1) {
                currentFileIndex++;
                loadMarkdownFile(currentFileIndex);
            }
        });
    });
}

// Load configuration and initialize the notebook
const configPath = './config.json'; // Path to the folder-specific config file
loadConfig(configPath, initializeNotebook);
