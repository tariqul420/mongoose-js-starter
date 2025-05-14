# Mongoose Quick Start

A modern Node.js application template using Express, Mongoose, and MongoDB with best practices for API development.

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
git clone https://github.com/tariqul420/mongoose-quick-start-js.git
cd mongoose-quick-start-js
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
NODE_ENV=development
ACCESS_TOKEN_SECRET=
MONGODB_DATABASE_URL=
MONGODB_DATABASE_PASSWORD=
```

> **Note:** follow `env.example`

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
├── lib/            # Utility functions and database connection
├── models/         # Mongoose models
├── routers/        # API routes
└── controllers/    # Route controllers
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file includes the necessary configuration for Node.js deployment.

## Using as a Template

This repository is designed to be used as a template for new MongoDB/Mongoose projects. To use it:

1. Click the "Use this template" button on GitHub
2. Clone your new repository
3. Follow the installation instructions above
4. Customize the project according to your needs

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [ISC License](LICENSE).
