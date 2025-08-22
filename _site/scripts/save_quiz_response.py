import json
import os
import csv
import datetime
import pathlib
import logging
import re

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

try:
    # Load quiz data from environment variable
    quiz_data = json.loads(os.environ['QUIZ_DATA'])

    # Extract basic information from the quiz data
    student_id = quiz_data['student_id']
    student_name = quiz_data['student_name']
    quiz_id = quiz_data['quiz_id']
    quiz_name = quiz_data['quiz_name']
    answers = quiz_data.get('answers', {})
    timestamp = datetime.datetime.now().isoformat()

    # Determine the subject area based on quiz_id prefix
    subject_mapping = {
        'bio_': 'ap-biology',
        'phys_alg_': 'physics-algebra',
        'phys_ose_': 'opensci-physics'
    }
    
    subject = 'general'
    for prefix, folder in subject_mapping.items():
        if quiz_id.startswith(prefix):
            subject = folder
            break
    
    # Create directories for storing quiz data
    base_dir = pathlib.Path('_data/quiz_responses')
    subject_dir = base_dir / subject
    subject_dir.mkdir(parents=True, exist_ok=True)
    
    # Create a subdirectory for individual responses
    individual_dir = subject_dir / 'individual'
    individual_dir.mkdir(parents=True, exist_ok=True)

    # Define CSV filename for aggregated results (one CSV per quiz)
    csv_file = subject_dir / f"{quiz_id}.csv"
    file_exists = csv_file.exists()

    # Save individual response as a JSON file (one file per submission)
    # Format: quiz_id_studentid_YYYY-MM-DDTHH-MM-SS.json
    safe_timestamp = re.sub(r'[:-]', '_', timestamp)
    json_file = individual_dir / f"{quiz_id}_{student_id}_{safe_timestamp}.json"
    with open(json_file, 'w') as f:
        json.dump(quiz_data, f, indent=2)
    
    # Determine all possible field names from this response
    fields = ['timestamp', 'student_id', 'student_name', 'quiz_id', 'quiz_name']
    for question_id in answers.keys():
        fields.append(f"answer_{question_id}")

    # Open a CSV file in append mode - this aggregates all submissions for a quiz
    with open(csv_file, 'a', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fields)

        # Write a new header if the file is new
        if not file_exists:
            writer.writeheader()

        # Prepare CSV row data
        row_data = {
            'timestamp': timestamp,
            'student_id': student_id,
            'student_name': student_name,
            'quiz_id': quiz_id,
            'quiz_name': quiz_name
        }

        # Add answers
        for question_id, answer in answers.items():
            # Convert lists to strings for CSV compatibility
            if isinstance(answer, list):
                answer = ', '.join(str(item) for item in answer)
            row_data[f"answer_{question_id}"] = answer

        # Write the row
        writer.writerow(row_data)

    # Log success
    message = f"Saved response from {student_name} ({student_id}) for quiz '{quiz_name}' ({quiz_id})"
    logger.info(message)
    print(message)

except Exception as e:
    # Log any errors
    error_message = f"Error processing quiz response: {str(e)}"
    logger.error(error_message)
    print(f"Error: {str(e)}")