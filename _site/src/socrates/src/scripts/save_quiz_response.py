import json # for JSON data handling
import os # for file handling
import csv # for data handling/output
import datetime # for date/time handling
import pathlib # for path handling
import logging # for logging

#               D:\python\Jupyter\build\scripts\save_quiz_response.py                    #

quiz_data = json.loads(os.environ['QUIZ_DATA'])

# Extract basic information from the quiz data #
student_id = quiz_data['student_id']
student_name = quiz_data['student_name']
quiz_id = quiz_data['quiz_id']
quiz_name = quiz_data['quiz_name']
timestamp = datetime.now().isoformat() # Get the current timestamp in ISO format

# Create a directory for the quiz data if it doesn't exist #
data_dir = pathlib.Path('_data/quiz_responses')
data_dir.mkdir(parents=True, exist_ok=True)

# Save individual response as a JSON file (one file per submission)
response_file = data_dir / f"{quiz_id}_{student_id}_{timestamp.replace(':', '-')}.csv"
file_exists = csv_file.exists()

# Determine all possible field names from this response
fields = ['timestamp', 'student_id', 'student_name']
for question_id in answers.keys():
    fields.append(f"answer_{question_id}")

# Open a CSV file in append mode
with open(csv_file, 'a', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=fields)

    # Write a new header if the file is new
    if not file_exists:
        write.writeheader()

    # Prepare CSV row data
    row_data = {
        'timestamp': timestamp,
        'student_id': student_id,
        'student_name': student_name
    }

    # Add answers
    for question_id, answer in answers.items():
        # Convert lists to strings for CSV compatibility
        if isinstance(answer, list):
            answer = ', '.join(answer)
        row_data[f"answer_{question_id}"] = answer

    # Write the row
    writer.writerow(row_data)

print(f"Saved response from {student_name} ({student_id}) to {quiz_id}")


