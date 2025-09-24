Are You Okay?

Live demo: https://are-you-okay.netlify.app/

Overview

Are You Okay? is a small, personal project that blends technology with human-centered design. The app lets users log their emotions and needs, providing insights powered by GPT-3.5 with a small RAG (Retrieval-Augmented Generation) setup.

This is a baby step toward my bigger vision of combining humanities and technology to create meaningful, supportive applications.

Tech Stack

Frontend: React + Vite

Backend: Node.js + Express

AI: OpenAI GPT-3.5

Data Handling: Small RAG implementation

Hosting: Netlify (frontend)

Features

Log emotions and daily reflections

Get insights using GPT-3.5

Simple, clean UI for easy interaction

Lightweight, fast, and beginner-friendly structure

Installation

Clone the repo:

git clone https://github.com/gona04/qol_questionnaire.git


Navigate to frontend and backend folders to install dependencies:

cd qol_questionnair_frontend
npm install
cd ../backend
npm install


Set environment variables (for OpenAI API key, etc.) in the backend:

export OPENAI_API_KEY="your_api_key_here"


Run locally:

# Frontend
cd qol_questionnair_frontend
npm run dev

# Backend
cd ../backend
npm start

Contribution

This is a personal project / baby step app. Contributions are welcome in the form of ideas, bug fixes, or suggestions.
