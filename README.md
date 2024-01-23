# Project Name

#### Node, Express, Typescript, Jest, Docker Hexagonal Architecture Template

## Introduction

#### This is a template to run a node.js project that uses hexagonal architecture with docker

## Installation and Usage

### Using Docker

1. **Clone the Repository**

    ```bash
    git clone git@github.com:andres-root/node-base-hex.git
    ```

2. **Build with Docker Compose**

    Navigate to the project directory:

    ```bash
    cd [Your Project Directory]
    ```

    Build the project using Docker Compose:

    ```bash
    docker compose build
    ```

3. **Run the Project**

    Run your project in detached mode:

    ```bash
    docker compose up -d
    ```

### Running Tests

To run tests, follow these steps:

1. **Install Dependencies**

    ```bash
    npm install
    ```

2. **Run Tests**

    ```bash
    npm run test
    ```

### Running Without Docker

To run the project without Docker, ensure the Docker backend instance is not running, then follow these steps:

1. **Install Dependencies**

    ```bash
    npm install
    ```

2. **Start the Development Server**

    ```bash
    npm run dev
    ```

## Contributing

[//]: # (Provide instructions on how others can contribute to your project. Include guidelines for code contributions, issue reporting, and pull requests.)

## License

[//]: # (Specify the license under which your project is released, if applicable.)

---

[//]: # (You can also add additional sections like 'Features', 'Built With', 'Acknowledgments', etc. depending on your project's needs.)
