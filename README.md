# Library Seat Tracker

## Overview
Library Seat Tracker is a web application for viewing library floor layouts, checking available seats and study rooms, and making reservations.

The system includes a frontend interface for browsing floors and booking resources, and a Flask backend for handling API requests and storing booking data.

## Features
- View library floors from Floor 2 to Floor 10
- Display floor maps with labeled seating areas, study rooms, book stacks, and services
- Book individual seats
- Book study rooms
- View current bookings
- Cancel bookings
- Store booking data in `data.json`
- Dynamic floor legends and seat categories
- Booking validation and grace period support

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Python, Flask
- Data storage: JSON (’data.json‘)

## Project Structure
- `index.html` – main webpage structure
- `styles.css` – UI styling
- `script.js` – frontend logic and rendering
- `api.js` – frontend API communication
- `validation.js` – booking validation logic
- `app.py` – Flask backend server
- `data.json` – booking and seat data storage

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/saniyashk14814/Library-Seat-Tracker.git
   cd Library-Seat-Tracker
   
2.Install dependencies:
  pip3 install -r requirements.txt

3.Start the backend server:
  python3 app.py

4.Open the app in your browser:
  http://127.0.0.1:5001

Notes
Do not open index.html directly if you want to test full functionality.
Run the Flask server first so the frontend can communicate with the backend.
Booking data is stored locally in data.json
