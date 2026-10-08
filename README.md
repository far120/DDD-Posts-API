# DDD Posts API

A simple REST API built with Node.js, Express, TypeScript, MongoDB, Mongoose, and Kafka.

I built this project to practice DDD architecture, repository pattern, dependency injection, validation, and event-driven communication.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Kafka
- KafkaJS
- Zod
- Docker
- Docker Compose
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
│   ├── events/
│   └── post/
│       ├── entities/
│       └── repositories/
│
├── infrastructure/
│   ├── database/
│   ├── repositories/
│   └── kafka/
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
| POST | `/api/v1/posts` | Create a post |
| GET | `/api/v1/posts` | Get all posts |
| GET | `/api/v1/posts/:id` | Get post by ID |

## Environment Variables

For local development, create a `.env` file:

```env
PORT=5000
NODE_ENV=development
API_PREFIX=/api/v1
MONGODB_URI=mongodb://localhost:27017/Posts
KAFKA_BROKER=localhost:9092
```

For Docker, the API uses:

```env
PORT=5000
NODE_ENV=production
API_PREFIX=/api/v1
MONGODB_URI=mongodb://mongodb:27017/Posts
KAFKA_BROKER=kafka:9093
```

Don't push `.env` files with real secrets to GitHub.

## Run Locally

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

The API will run on:

```text
http://localhost:5000
```

## Run with Docker

Build and start the containers:

```bash
docker compose up -d --build
```

Check the containers:

```bash
docker compose ps
```

Stop the containers:

```bash
docker compose down
```

## Deployment

The API is deployed on **AWS EC2** using **Docker Compose**.

Deployed API:

```text
http://16.171.198.214:5000
```

### Deployed Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `http://16.171.198.214:5000/api/v1/health` | Health check |
| POST | `http://16.171.198.214:5000/api/v1/posts` | Create a post |
| GET | `http://16.171.198.214:5000/api/v1/posts` | Get all posts |
| GET | `http://16.171.198.214:5000/api/v1/posts/:id` | Get post by ID |

The application runs in Docker containers on an AWS EC2 instance with MongoDB and Kafka.

## Example Request

### Create Post

```text
POST /api/v1/posts
```

```json
{
  "title": "My First Post",
  "content": "This is my first post."
}
```

The project can be tested using Postman.

created by [@Mostafa ELFAR](https://github.com/far120)