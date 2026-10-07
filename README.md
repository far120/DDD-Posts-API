# DDD Posts API

A simple REST API built with **Node.js, Express, TypeScript, MongoDB, and Mongoose**.

I built this project to practice **DDD architecture**, repository pattern, dependency injection, validation, and REST API development.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Zod
- Postman

## Project Structure

```text
src/
├── api/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   └── validate/
│
├── application/
│   └── post/
│       ├── createpost/
│       ├── getpost/
│       └── listposts/
│
├── domain/
│   └── post/
│       ├── entities/
│       └── repositories/
│
├── infrastructure/
│   ├── database/
│   └── repositories/
│
└── app/
    ├── app.ts
    ├── server.ts
    └── container.ts
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/health` | Health check |
| POST | `/api/v1/posts/` | Create a post |
| GET | `/api/v1/posts/` | Get all posts |
| GET | `/api/v1/posts/:id` | Get post by ID |

## Run the Project

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

Run the development server:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:5000
```

## Example Request

### Create Post

```json
{
  "title": "My First Post",
  "content": "This is my first post."
}
```

The project can be tested using **Postman**.