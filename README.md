# InvestOnly – AI Investment Research Agent

## Overview

InvestOnly is a full-stack AI-powered web application that analyzes a company and generates an investment research report.

The user enters a company name, and the application gathers recent information, analyzes the business using an LLM, and returns an investment recommendation along with supporting reasons.

The report includes:

* Investment decision (Invest / Watchlist / Pass)
* Confidence score
* Company summary
* Positive factors
* Risk factors
* AI reasoning
* Source references

---

## Tech Stack

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* LangChain.js
* Google Gemini
* Tavily Search API

---

## Features

* Search any company
* AI-generated investment analysis
* Confidence score
* Positive and risk analysis
* AI reasoning
* Source links
* Loading and error handling

---

## Project Structure

```text
AI-Investment-Agent/

├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── langchain/
│   ├── utils/
│   └── package.json
│
├── README.md
└── AI_USAGE.md
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd AI-Investment-Agent
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file.

```env
PORT=5000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
TAVILY_API_KEY=YOUR_TAVILY_API_KEY
```

Start the backend.

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The application will be available at:

* Frontend: http://localhost:5173
* Backend: http://localhost:5000

---

## Application Flow

1. User enters a company name.
2. React sends the request to the Express API.
3. Backend retrieves recent company information using Tavily.
4. LangChain sends the research context to Gemini.
5. Gemini generates a structured investment analysis.
6. The backend processes the response and returns it to the frontend.
7. The report is displayed to the user.

---

## API

### POST `/api/research`

Request

```json
{
  "company": "Tesla"
}
```

Response

```json
{
  "success": true,
  "data": {
    "company": "Tesla",
    "decision": "WATCHLIST",
    "confidence": 74,
    "summary": "...",
    "positives": [],
    "risks": [],
    "reasoning": "...",
    "sources": []
  }
}
```

---

## Design Decisions

* React and Express were selected for simplicity and familiarity.
* LangChain is used to interact with Gemini.
* Tavily provides recent web context for better responses.
* The backend separates routes, controllers, and services to keep the code modular.
* The application focuses on explainable results rather than financial prediction.

---

## Future Improvements

* Company comparison
* Historical stock charts
* PDF report export
* Authentication
* Saved report history

