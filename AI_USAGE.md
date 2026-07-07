# AI Usage

## Overview

AI tools were used throughout the development process as required by the assignment. Every generated solution was reviewed, tested, and modified before being added to the project.

---

## AI Tools Used

* ChatGPT
* Google Gemini
* LangChain Documentation

---

## How AI Was Used

AI assisted with:

* Planning the project structure
* Designing the frontend layout
* Creating backend architecture
* Writing initial React components
* Building Express APIs
* Integrating LangChain with Gemini
* Prompt design
* Debugging runtime errors
* Improving UI
* Writing project documentation

---

## Sample Prompts

### Project Planning

> Build an AI Investment Research Agent using React, Node.js, Express, LangChain.js, and Gemini. Suggest a clean project structure and implementation plan.

### Backend Development

> Create an Express API that accepts a company name and returns a structured investment report.

### Frontend Development

> Design a clean React interface for displaying an AI-generated investment report.

### Prompt Engineering

> Generate a structured JSON investment report containing decision, confidence score, positives, risks, reasoning, and summary.

---

## Issues Encountered

### Tavily Package

The initial package suggestion did not work correctly.

Resolution:

* Switched to the Tavily REST API.

---

### JSON Parsing

LLM responses occasionally contained extra formatting.

Resolution:

* Added a JSON extraction utility and fallback handling.

---

### Backend Import Issue

An incorrect package import caused the backend to fail.

Resolution:

* Removed the unnecessary import and simplified the implementation.

---

## Development Approach

The objective was to build a clean and understandable application instead of an overly complex solution.

Priority was given to:

* Readable code
* Modular backend structure
* Simple user interface
* Stable AI integration
* Clear documentation

---

## Learning Outcomes

During this project I learned:

* Integrating React with an Express backend
* Using LangChain with Gemini
* Working with external APIs
* Handling LLM responses safely
* Structuring a full-stack AI application
* Debugging AI integration issues
