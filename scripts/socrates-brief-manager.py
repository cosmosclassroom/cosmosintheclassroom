#!/usr/bin/env python3
"""
Socrates Research Brief Generator and Manager
Tool for creating, validating, and managing research briefs for the portal system
"""

import json
import os
import datetime
import re
from pathlib import Path
from typing import Dict, List, Optional
import argparse

class SocratesResearchBriefManager:
    def __init__(self, base_path: Optional[str] = None):
        self.base_path = Path(base_path) if base_path else Path(__file__).parent.parent
        self.briefs_dir = self.base_path / "library" / "research-briefs"
        self.index_file = self.base_path / "data" / "research-briefs-index.json"
        self.config_file = self.base_path / "data" / "research-briefs-config.json"
        
        # Ensure directories exist
        self.briefs_dir.mkdir(parents=True, exist_ok=True)
        (self.briefs_dir / "phenomena").mkdir(exist_ok=True)
        (self.briefs_dir / "historical").mkdir(exist_ok=True)
        (self.briefs_dir / "connections").mkdir(exist_ok=True)
        (self.briefs_dir / "applications").mkdir(exist_ok=True)
        (self.briefs_dir / "mathematical-frameworks").mkdir(exist_ok=True)
        
        self.config = self.load_config()
        self.index = self.load_index()

    def load_config(self) -> Dict:
        """Load configuration file"""
        try:
            with open(self.config_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            return self.create_default_config()

    def create_default_config(self) -> Dict:
        """Create default configuration"""
        config = {
            "version": "1.0.0",
            "research_briefs": {
                "storage_path": "/library/research-briefs",
                "index_file": "/data/research-briefs-index.json",
                "categories": ["phenomena", "historical", "connections", "applications", "mathematical-frameworks"],
                "difficulty_levels": ["exploratory", "standard", "honors", "advanced"]
            }
        }
        self.save_config(config)
        return config

    def save_config(self, config: Dict):
        """Save configuration file"""
        with open(self.config_file, 'w', encoding='utf-8') as f:
            json.dump(config, f, indent=2, ensure_ascii=False)

    def load_index(self) -> Dict:
        """Load research briefs index"""
        try:
            with open(self.index_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            return self.create_empty_index()

    def create_empty_index(self) -> Dict:
        """Create empty index"""
        return {
            "version": "1.0.0",
            "last_updated": datetime.datetime.now().isoformat(),
            "total_briefs": 0,
            "categories": {cat: 0 for cat in self.config["research_briefs"]["categories"]},
            "difficulty_distribution": {level: 0 for level in self.config["research_briefs"]["difficulty_levels"]},
            "briefs": [],
            "concept_map": {},
            "unit_connections": {},
            "search_terms": {}
        }

    def save_index(self):
        """Save research briefs index"""
        self.index["last_updated"] = datetime.datetime.now().isoformat()
        with open(self.index_file, 'w', encoding='utf-8') as f:
            json.dump(self.index, f, indent=2, ensure_ascii=False)

    def generate_brief_id(self, brief_type: str) -> str:
        """Generate unique brief ID"""
        existing_ids = [brief["id"] for brief in self.index["briefs"]]
        counter = 1
        while f"{brief_type}_{counter:03d}" in existing_ids:
            counter += 1
        return f"{brief_type}_{counter:03d}"

    def validate_brief(self, brief: Dict) -> tuple[bool, List[str]]:
        """Validate research brief structure and content"""
        errors = []
        
        # Required fields
        required_fields = ["id", "title", "type", "depth_level", "content"]
        for field in required_fields:
            if field not in brief:
                errors.append(f"Missing required field: {field}")
        
        # Validate type
        if "type" in brief and brief["type"] not in self.config["research_briefs"]["categories"]:
            errors.append(f"Invalid type: {brief['type']}")
        
        # Validate depth level
        if "depth_level" in brief and brief["depth_level"] not in self.config["research_briefs"]["difficulty_levels"]:
            errors.append(f"Invalid depth level: {brief['depth_level']}")
        
        # Validate content structure
        if "content" in brief:
            content_fields = ["summary", "key_questions", "historical_context", "mathematical_framework"]
            for field in content_fields:
                if field not in brief["content"]:
                    errors.append(f"Missing content field: {field}")
        
        return len(errors) == 0, errors

    def create_brief(self, 
                    title: str,
                    brief_type: str,
                    depth_level: str,
                    summary: str,
                    key_questions: List[str],
                    historical_context: str,
                    mathematical_framework: str,
                    real_world_applications: Optional[List[str]] = None,
                    related_units: Optional[List[str]] = None,
                    related_concepts: Optional[List[str]] = None,
                    socratic_prompts: Optional[List[Dict]] = None,
                    **kwargs) -> Dict:
        """Create a new research brief"""
        
        brief_id = self.generate_brief_id(brief_type)
        current_time = datetime.datetime.now().isoformat()
        
        brief = {
            "id": brief_id,
            "title": title,
            "type": brief_type,
            "generated_date": current_time,
            "related_units": related_units or [],
            "related_concepts": related_concepts or [],
            "depth_level": depth_level,
            "content": {
                "summary": summary,
                "key_questions": key_questions,
                "historical_context": historical_context,
                "mathematical_framework": mathematical_framework,
                "real_world_applications": real_world_applications or [],
                "further_investigation": kwargs.get("further_investigation", "")
            },
            "socratic_prompts": socratic_prompts or [],
            "assessment_connections": kwargs.get("assessment_connections", []),
            "library_resources": kwargs.get("library_resources", []),
            "multimedia": kwargs.get("multimedia", {}),
            "metadata": {
                "author": kwargs.get("author", "Socrates AI Assistant"),
                "review_status": "pending",
                "last_updated": current_time,
                "view_count": 0,
                "rating": 0,
                "tags": kwargs.get("tags", []),
                "difficulty_indicators": kwargs.get("difficulty_indicators", {})
            }
        }
        
        return brief

    def save_brief(self, brief: Dict) -> bool:
        """Save research brief to file and update index"""
        
        # Validate brief
        is_valid, errors = self.validate_brief(brief)
        if not is_valid:
            print(f"Brief validation failed: {errors}")
            return False
        
        # Save brief file
        brief_type = brief["type"]
        brief_file = self.briefs_dir / brief_type / f"{brief['id']}.json"
        
        try:
            with open(brief_file, 'w', encoding='utf-8') as f:
                json.dump(brief, f, indent=2, ensure_ascii=False)
        except Exception as e:
            print(f"Failed to save brief file: {e}")
            return False
        
        # Update index
        self.update_index(brief)
        self.save_index()
        
        print(f"Successfully saved brief: {brief['id']}")
        return True

    def update_index(self, brief: Dict):
        """Update the research briefs index with new brief"""
        
        # Remove existing brief if updating
        self.index["briefs"] = [b for b in self.index["briefs"] if b["id"] != brief["id"]]
        
        # Create index entry
        index_entry = {
            "id": brief["id"],
            "title": brief["title"],
            "type": brief["type"],
            "depth_level": brief["depth_level"],
            "file_path": f"/library/research-briefs/{brief['type']}/{brief['id']}.json",
            "related_units": brief.get("related_units", []),
            "related_concepts": brief.get("related_concepts", []),
            "tags": brief.get("metadata", {}).get("tags", []),
            "generated_date": brief["generated_date"],
            "summary": brief["content"]["summary"],
            "featured": False,
            "new": True
        }
        
        # Add to index
        self.index["briefs"].append(index_entry)
        
        # Update statistics
        self.index["total_briefs"] = len(self.index["briefs"])
        self.index["categories"][brief["type"]] = self.index["categories"].get(brief["type"], 0) + 1
        self.index["difficulty_distribution"][brief["depth_level"]] = self.index["difficulty_distribution"].get(brief["depth_level"], 0) + 1
        
        # Update concept map
        for concept in brief.get("related_concepts", []):
            if concept not in self.index["concept_map"]:
                self.index["concept_map"][concept] = []
            if brief["id"] not in self.index["concept_map"][concept]:
                self.index["concept_map"][concept].append(brief["id"])
        
        # Update unit connections
        for unit in brief.get("related_units", []):
            if unit not in self.index["unit_connections"]:
                self.index["unit_connections"][unit] = []
            if brief["id"] not in self.index["unit_connections"][unit]:
                self.index["unit_connections"][unit].append(brief["id"])
        
        # Update search terms
        search_terms = self.extract_search_terms(brief)
        for term in search_terms:
            if term not in self.index["search_terms"]:
                self.index["search_terms"][term] = []
            if brief["id"] not in self.index["search_terms"][term]:
                self.index["search_terms"][term].append(brief["id"])

    def extract_search_terms(self, brief: Dict) -> List[str]:
        """Extract searchable terms from brief"""
        terms = []
        
        # Extract from title
        title_words = re.findall(r'\w+', brief["title"].lower())
        terms.extend(title_words)
        
        # Extract from tags
        terms.extend([tag.lower() for tag in brief.get("metadata", {}).get("tags", [])])
        
        # Extract from concepts
        for concept in brief.get("related_concepts", []):
            terms.extend(concept.lower().split('_'))
        
        # Extract from applications
        for app in brief.get("content", {}).get("real_world_applications", []):
            app_words = re.findall(r'\w+', app.lower())
            terms.extend(app_words)
        
        # Remove duplicates and short words
        terms = list(set([term for term in terms if len(term) > 2]))
        
        return terms

    def list_briefs(self, brief_type: Optional[str] = None, depth_level: Optional[str] = None) -> List[Dict]:
        """List existing research briefs with optional filtering"""
        briefs = self.index["briefs"]
        
        if brief_type:
            briefs = [b for b in briefs if b["type"] == brief_type]
        
        if depth_level:
            briefs = [b for b in briefs if b["depth_level"] == depth_level]
        
        return briefs

    def delete_brief(self, brief_id: str) -> bool:
        """Delete a research brief"""
        # Find brief in index
        brief_entry = next((b for b in self.index["briefs"] if b["id"] == brief_id), None)
        if not brief_entry:
            print(f"Brief not found: {brief_id}")
            return False
        
        # Delete file
        brief_file = self.base_path / brief_entry["file_path"].lstrip('/')
        try:
            brief_file.unlink()
        except FileNotFoundError:
            print(f"Brief file not found: {brief_file}")
        
        # Remove from index
        self.index["briefs"] = [b for b in self.index["briefs"] if b["id"] != brief_id]
        
        # Update statistics and maps
        self.rebuild_index_statistics()
        self.save_index()
        
        print(f"Successfully deleted brief: {brief_id}")
        return True

    def rebuild_index_statistics(self):
        """Rebuild index statistics and maps"""
        # Reset counts
        self.index["total_briefs"] = len(self.index["briefs"])
        self.index["categories"] = {cat: 0 for cat in self.config["research_briefs"]["categories"]}
        self.index["difficulty_distribution"] = {level: 0 for level in self.config["research_briefs"]["difficulty_levels"]}
        self.index["concept_map"] = {}
        self.index["unit_connections"] = {}
        self.index["search_terms"] = {}
        
        # Rebuild from existing briefs
        for brief_entry in self.index["briefs"]:
            self.index["categories"][brief_entry["type"]] += 1
            self.index["difficulty_distribution"][brief_entry["depth_level"]] += 1
            
            # Load full brief for concept mapping
            try:
                brief_file = self.base_path / brief_entry["file_path"].lstrip('/')
                with open(brief_file, 'r', encoding='utf-8') as f:
                    full_brief = json.load(f)
                
                # Update concept map
                for concept in full_brief.get("related_concepts", []):
                    if concept not in self.index["concept_map"]:
                        self.index["concept_map"][concept] = []
                    self.index["concept_map"][concept].append(brief_entry["id"])
                
                # Update unit connections
                for unit in full_brief.get("related_units", []):
                    if unit not in self.index["unit_connections"]:
                        self.index["unit_connections"][unit] = []
                    self.index["unit_connections"][unit].append(brief_entry["id"])
                
                # Update search terms
                search_terms = self.extract_search_terms(full_brief)
                for term in search_terms:
                    if term not in self.index["search_terms"]:
                        self.index["search_terms"][term] = []
                    self.index["search_terms"][term].append(brief_entry["id"])
                    
            except Exception as e:
                print(f"Error processing brief {brief_entry['id']}: {e}")


def main():
    parser = argparse.ArgumentParser(description="Socrates Research Brief Manager")
    parser.add_argument("--base-path", help="Base path for the project")
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")
    
    # Create brief command
    create_parser = subparsers.add_parser("create", help="Create a new research brief")
    create_parser.add_argument("--title", required=True, help="Brief title")
    create_parser.add_argument("--type", required=True, choices=["phenomena", "historical", "connections", "applications", "mathematical-frameworks"], help="Brief type")
    create_parser.add_argument("--level", required=True, choices=["exploratory", "standard", "honors", "advanced"], help="Difficulty level")
    create_parser.add_argument("--summary", required=True, help="Brief summary")
    create_parser.add_argument("--questions", nargs="+", required=True, help="Key questions")
    create_parser.add_argument("--historical", required=True, help="Historical context")
    create_parser.add_argument("--mathematical", required=True, help="Mathematical framework")
    create_parser.add_argument("--units", nargs="*", help="Related units")
    create_parser.add_argument("--concepts", nargs="*", help="Related concepts")
    create_parser.add_argument("--applications", nargs="*", help="Real world applications")
    create_parser.add_argument("--tags", nargs="*", help="Tags")
    
    # List briefs command
    list_parser = subparsers.add_parser("list", help="List existing research briefs")
    list_parser.add_argument("--type", choices=["phenomena", "historical", "connections", "applications", "mathematical-frameworks"], help="Filter by type")
    list_parser.add_argument("--level", choices=["exploratory", "standard", "honors", "advanced"], help="Filter by difficulty level")
    
    # Delete brief command
    delete_parser = subparsers.add_parser("delete", help="Delete a research brief")
    delete_parser.add_argument("brief_id", help="Brief ID to delete")
    
    # Rebuild index command
    subparsers.add_parser("rebuild", help="Rebuild the research briefs index")
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return
    
    manager = SocratesResearchBriefManager(args.base_path)
    
    if args.command == "create":
        brief = manager.create_brief(
            title=args.title,
            brief_type=args.type,
            depth_level=args.level,
            summary=args.summary,
            key_questions=args.questions,
            historical_context=args.historical,
            mathematical_framework=args.mathematical,
            related_units=args.units or [],
            related_concepts=args.concepts or [],
            real_world_applications=args.applications or [],
            tags=args.tags or []
        )
        
        success = manager.save_brief(brief)
        if success:
            print(f"Research brief created successfully: {brief['id']}")
        else:
            print("Failed to create research brief")
    
    elif args.command == "list":
        briefs = manager.list_briefs(args.type, args.level)
        print(f"Found {len(briefs)} research briefs:")
        for brief in briefs:
            print(f"  {brief['id']}: {brief['title']} ({brief['type']}, {brief['depth_level']})")
    
    elif args.command == "delete":
        success = manager.delete_brief(args.brief_id)
        if not success:
            exit(1)
    
    elif args.command == "rebuild":
        manager.rebuild_index_statistics()
        manager.save_index()
        print("Research briefs index rebuilt successfully")


if __name__ == "__main__":
    main()
