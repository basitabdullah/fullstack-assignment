# Help Center API

## Description
A RESTful API to manage "Help Center" cards, along with a frontend to display the cards.

## Features
- Create a new card
- Retrieve all cards
- Retrieve a specific card by title

## Installation

### Backend
1. Clone the repository.
2. Navigate to the backend folder.
3. Install backend dependencies.
4. Create a `.env` file in the backend folder and add a `PORT` and a local MongoDB URI `MONGO_URI`.
5. Start the backend server.

### Frontend
1. Navigate to the frontend folder.
2. Install frontend dependencies.
3. Start the frontend development server.

## API Endpoints

### Backend
- `GET /ping`: Check if the server is running.
- `POST /cards`: Create a new card.
- `GET /cards`: Get all cards.
- `GET /cards/:title`: Get a specific card by title.

## License
MIT

