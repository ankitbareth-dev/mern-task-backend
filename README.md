# Backend Setup

## Prerequisites

- Node.js (v18 or higher)
- npm
- MongoDB (local or MongoDB Atlas)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ankitbareth-dev/mern-task-backend
cd backend
npm install
```

## Environment Configuration

Create a `.env` file in the root of the backend project:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
OPENROUTER_URL=
OPENROUTER_API_KEY=
CLIENT_URL=
```

## Running Locally

### Development

```bash
npm run dev
```

### Production (build + run)

```bash
npm run build
npm start
```

Server will run at:

```
http://localhost:3000
```

## Notes

- Ensure MongoDB is running or your Atlas URI is valid.
- The server exposes the following endpoints:
  - `POST /api/ask-ai`
  - `POST /api/save`
