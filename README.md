# Node.js + PostgreSQL + MongoDB API

## Overview

This repository contains a Node.js application that connects to both PostgreSQL and MongoDB databases. The application provides a RESTful API with various routes to interact with the data stored in these databases.

## Features

- **Node.js**: The core runtime environment for the application.
- **PostgreSQL**: Used for relational data storage.
- **MongoDB**: Used for document-based data storage.
- **RESTful API**: Provides endpoints for CRUD operations.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- PostgreSQL installed and running.
- MongoDB installed and running.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    POSTGRES_USER=your_postgres_user
    POSTGRES_PASSWORD=your_postgres_password
    POSTGRES_DB=your_postgres_db
    POSTGRES_HOST=your_postgres_host
    MONGO_URI=your_mongo_uri
    ```

## Usage

1. Start the PostgreSQL and MongoDB servers.

2. Run the application:
    ```sh
    npm start
    ```

3. The API will be available at `http://localhost:3000`.

## API Endpoints

### Users

- **GET /users**: Retrieve all users.
- **GET /users/:id**: Retrieve a user by ID.
- **POST /users**: Create a new user.
- **PUT /users/:id**: Update a user by ID.
- **DELETE /users/:id**: Delete a user by ID.

### Products

- **GET /products**: Retrieve all products.
- **GET /products/:id**: Retrieve a product by ID.
- **POST /products**: Create a new product.
- **PUT /products/:id**: Update a product by ID.
- **DELETE /products/:id**: Delete a product by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: matheusdevteodoro@gmail.com
- **GitHub**: teodorogit

