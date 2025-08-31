import os

# Define the desired directory structure as nested dictionaries
structure = {
    "teaching-portal": [
        "index.html",
        "style.css",
        "script.js",
        "courses.json",
        {
            "extras": [
                "readings",
                "datasets",
                "misc"
            ]
        },
        {
            "courses": [
                {
                    "honors-physics": [
                        "course.json",
                        {
                            "units": [
                                {
                                    "H1": ["flexbook", "slides", "notes", "briefs"]
                                },
                                {
                                    "H2": ["flexbook", "slides", "notes", "briefs"]
                                },
                                "H3", "H4"
                            ]
                        },
                        "assets"
                    ]
                },
                {
                    "standard-physics": [
                        "course.json",
                        {
                            "units": [
                                {
                                    "P1": ["flexbook", "slides", "notes", "briefs"]
                                },
                                {
                                    "P2": ["flexbook", "slides", "notes", "briefs"]
                                },
                                "P3", "P4"
                            ]
                        },
                        "assets"
                    ]
                },
                {
                    "natural-disasters": [
                        "course.json",
                        {
                            "units": [
                                {
                                    "ND1-earthquakes": [
                                        {
                                            "flexbook": [
                                                "ch1-scientist.html",
                                                "ch2-engineer.html",
                                                "ch3-policymaker.html",
                                                {
                                                    "artifacts": [
                                                        "forecasting-mock-dataset-handout.pdf",
                                                        "mitigation-design-challenge-handout.pdf",
                                                        "policy-brief-template.docx"
                                                    ]
                                                }
                                            ]
                                        },
                                        "slides", "notes", "briefs"
                                    ]
                                },
                                {
                                    "ND2-hurricanes-sealevel": [
                                        {
                                            "flexbook": [
                                                "ch4-scientist.html",
                                                "ch5-engineer.html",
                                                "ch6-policymaker.html",
                                                {
                                                    "artifacts": [
                                                        "branford-inundation-mapping-handout.pdf",
                                                        "coastal-resilience-design-sketch.pdf",
                                                        "policy-brief-template.docx"
                                                    ]
                                                }
                                            ]
                                        },
                                        "slides", "notes", "briefs"
                                    ]
                                },
                                {
                                    "ND3-wildfires": [
                                        {
                                            "flexbook": [
                                                "ch7-scientist.html",
                                                "ch8-engineer.html",
                                                "ch9-policymaker.html",
                                                {
                                                    "artifacts": [
                                                        "historical-wildfire-data-worksheet.pdf",
                                                        "fire-resilient-design-plan.docx",
                                                        "policy-brief-template.docx"
                                                    ]
                                                }
                                            ]
                                        },
                                        "slides", "notes", "briefs"
                                    ]
                                },
                                {
                                    "ND4-landslides-flooding": [
                                        {
                                            "flexbook": [
                                                "ch10-scientist.html",
                                                "ch11-engineer.html",
                                                "ch12-policymaker.html",
                                                {
                                                    "artifacts": [
                                                        "topo-map-analysis-handout.pdf",
                                                        "erosion-control-design-sketch.pdf",
                                                        "policy-brief-template.docx"
                                                    ]
                                                }
                                            ]
                                        },
                                        "slides", "notes", "briefs"
                                    ]
                                },
                                {
                                    "glossary-learning-objectives": [
                                        "key-terms.html",
                                        "learning-objectives.html"
                                    ]
                                }
                            ]
                        },
                        "assets"
                    ]
                }
            ]
        }
    ],
    "shared": [
        "css",
        "js",
        "images",
        "libs"
    ]
}

def create_structure(base, items):
    for item in items:
        if isinstance(item, str):
            # If it's a file or folder name, create folder if no extension, else create file
            path = os.path.join(base, item)
            if '.' in item:
                # It's a file
                os.makedirs(base, exist_ok=True)
                open(path, 'a').close()
            else:
                os.makedirs(path, exist_ok=True)
        elif isinstance(item, dict):
            for folder, contents in item.items():
                folder_path = os.path.join(base, folder)
                os.makedirs(folder_path, exist_ok=True)
                create_structure(folder_path, contents)

if __name__ == "__main__":
    # Create teaching-portal structure
    create_structure(".", [structure])