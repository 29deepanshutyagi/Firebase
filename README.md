# Brain Tumor Detection Website

![Brain Tumor Detection](banner.png)

## Introduction

Welcome to the Brain Tumor Detection website repository! This project is designed to detect brain tumors by analyzing MRI scans of the brain using Artificial Intelligence and Machine Learning techniques. This README file provides an overview of the project, its features, and instructions for setting up and running the website.

## Features

- *MRI Image Upload*: Users can upload MRI scan images of the brain for analysis.

- *Tumor Detection*: The system employs an AI model to analyze the uploaded MRI scans and identify the presence of tumors.

- *Visualization*: Results are displayed in a user-friendly format, making it easy for users to understand the analysis.

- *Accessibility*: The website is designed to be accessible and user-friendly for both healthcare professionals and patients.

## Technology Stack

- *Frontend*:
  - HTML, CSS, JavaScript
  - Framework: [React-Native](https://reactnative.org/)
  
- *Backend*:
  - Python with [Flask](https://flask.palletsprojects.com/) framework
  - Deep Learning: [TensorFlow](https://www.tensorflow.org/), [Keras](https://keras.io/)

- *Deployment*:
  - [Docker](https://www.docker.com/)
  - [Heroku](https://www.heroku.com/) (for cloud hosting)

## Setup

Follow these steps to set up the project:

1. Clone the repository:

   bash
   git clone https://github.com/29deepanshutyagi.git
   

2. Navigate to the project directory:

   bash
   cd brain-tumor-detection
   

3. Set up the backend:

   - Create a virtual environment and activate it (recommended).

   bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate
   

   - Install the required Python packages:

   bash
   pip install -r requirements.txt
   

4. Set up the frontend:

   - Navigate to the `frontend` directory:

   bash
   cd frontend
   

   - Install the required Node.js packages:

   bash
   npm install
   

5. Start the application:

   - Go back to the project root directory:

   bash
   cd ..
   

   - Run the application using Docker:

   bash
   docker-compose up
   

   The website should now be accessible at `http://localhost:3000`.

## Usage

1. Access the website using a web browser.

2. Upload an MRI scan image of the brain.

3. Wait for the AI model to process the image.

4. The results, including whether a tumor is detected, will be displayed on the screen.

## Contributions

We welcome contributions from the open-source community. If you'd like to improve this project, please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- We would like to express our gratitude to the open-source community for providing the tools and frameworks that made this project possible.

- Special thanks to healthcare professionals and researchers in the field of medical image analysis.

If you have any questions, encounter issues, or would like to collaborate, please don't hesitate to contact us. Happy brain tumor detection!

*Disclaimer*: This website is for educational and research purposes and should not be used as a substitute for professional medical advice. If you suspect a medical condition, please consult a healthcare professional.
