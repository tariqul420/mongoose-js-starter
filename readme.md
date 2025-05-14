# Mongoose Quick Start

A modern Node.js application using Express, Mongoose, and MongoDB with best practices for API development.

## Features

- Express.js server with modern ES modules
- MongoDB integration with Mongoose ODM
- JWT authentication
- CORS enabled
- Environment configuration with dotenv
- ESLint and Prettier for code quality
- Development with hot-reload using Nodemon

## Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or remote)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mongoose-quick-start-js
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Development

Start the development server:

```bash
npm start
```

The server will start with hot-reload enabled.

## Available Scripts

- `npm start` - Start the development server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code using Prettier

## Project Structure

```
src/
├── app.js          # Express application setup
├── server.js       # Server entry point
├── config/         # Configuration files
├── lib/           # Utility functions and database connection
├── models/        # Mongoose models
├── routes/        # API routes
└── controllers/   # Route controllers
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file includes the necessary configuration for Node.js deployment.

## License

ISC
