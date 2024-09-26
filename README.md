
# Node Sandbox

## Overview
This project is a **Node.js Sandbox** designed for turning in coding assessments via a public URL. The sandbox allows you to run Node.js code, manage different routes, handle file uploads, and execute unit tests. This environment is particularly useful for building, testing, and sharing small-scale projects or assessments. It also includes a basic API setup and file upload features to demonstrate common backend tasks.

## Project Structure

Here's a breakdown of the project structure and how the different parts interact:

```
├── controllers/          # Handles the business logic for various endpoints
│   └── assignUsers.js     # Logic for user assignment operations
├── helpers/              # Utility functions used across the app
│   ├── assignRandomValues.js # Function to assign random values to users
│   ├── getFile.js        # Helper to read and process files
│   └── sortPackages.js   # Utility to sort package data
├── models/               # Database models
│   └── models.js         # Mongoose schema and model definitions
├── routes/               # Application routing logic
│   └── app.js            # Main router setup for API endpoints
├── tests/                # Unit tests for the codebase
│   ├── controllers/      
│   │   └── assignUsers.test.js # Tests for assignUsers.js
│   └── helpers/
│       └── sortPackages.test.js # Tests for sortPackages.js
├── uploads/              # Directory to store uploaded files
│   └── input.csv         # Sample input CSV for file processing
├── views/                # Front-end HTML files (used in this sandbox)
│   ├── index.html        # Main landing page
│   └── uploads.html      # Page for handling file uploads
├── db.js                 # Database connection setup (Mongoose)
├── server.js             # Main entry point of the application
├── package.json          # Project metadata and dependencies
└── .eslintrc.js          # ESLint configuration for code linting
```

## Prerequisites

Before you run the project, ensure you have the following tools installed:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd node_sandbox
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the Project

To run the application locally, you can use the following command:

```bash
npm start
```

This will start the server using **Nodemon**, which watches for file changes and automatically restarts the server when changes are detected.

### 4. Run Unit Tests

To run the unit tests, use the following command:

```bash
npm test
```

This will execute all the tests located in the `tests/` directory using **Mocha** as the test framework and **Chai** as the assertion library. You can find example tests in the `tests/controllers/assignUsers.test.js` and `tests/helpers/sortPackages.test.js` files.

### 5. Lint and Format Code

- To check for linting issues, run:

```bash
npm run lint
```

- To automatically format your code according to the project's style guide, use:

```bash
npm run format
```

### 6. Uploading Files

The project includes basic file upload functionality. To test file uploads, navigate to the `/uploads.html` page from your browser after starting the server. You can upload a CSV file, and it will be processed by the application.

## Configuration

- **Environment Variables**: The application uses **dotenv** for configuration management. You can set up a `.env` file to specify environment-specific variables, such as the MongoDB connection string.

- **Database**: This project uses **Mongoose** to connect to a MongoDB instance. Make sure to configure your `db.js` with the appropriate connection string.

## Available Scripts

- `npm start`: Start the server in development mode with Nodemon.
- `npm run lint`: Check for code linting issues.
- `npm run format`: Auto-format code using Prettier.
- `npm test`: Run all unit tests with Mocha.

## License

This project is licensed under the ISC License - see the [LICENSE](https://opensource.org/license/isc-license-txt) file for details. You are free to use and modify it as needed.