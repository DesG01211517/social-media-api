# Post and Comment Management API

author: Desmon Garrison

## Overview

This Express application serves as a backend API for managing posts and comments. It integrates with Supabase for database operations and provides routes to add, retrieve, and manage posts and comments. The API is designed to be simple and effective, allowing for easy integration with front-end applications.

## Features

- **Create Posts**: Add new posts to the database.
- **Retrieve Posts**: Fetch all posts from the database.
- **Fetch Comments**: Get comments for a specific post.
- **CORS Support**: Configured to allow cross-origin requests from a specified client URL.
- **Error Handling**: Provides meaningful error responses for client and server errors.

## Tech Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **Supabase**: An open-source Firebase alternative that provides a backend-as-a-service.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- **CORS**: Middleware to enable CORS (Cross-Origin Resource Sharing).

## API Endpoints

- **GET /**: Returns a welcome message.
- **POST /post**: Adds a new post. Requires post data in the request body.
- **GET /post**: Retrieves all posts from the database.
- **GET /post/:id/comment**: Fetches all comments for a specific post by ID.
- **POST /comment**: Adds a new comment to a post (this route is commented out in the code).

## Error Handling

- The API returns a 500 status code with an error message for server errors.
- The API returns a 404 status code with a resource not found message for invalid routes.

## License

This project is open-source and available under the [MIT License](LICENSE).
