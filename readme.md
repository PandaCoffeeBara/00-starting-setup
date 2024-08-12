# Coding Refresher Hub

## Table of contents

## Introduction

**Coding Refresher Hub** a project for keeping up with the latest technologies and best practices, in what I consider my main tech stack.
Build with React for the frontend and Node.js for the backend.

## Features

- **Authentication**: Users can sign up, log in, and log out.
- **Standard E-commerce Shop**: Users can browse products, add them to their cart, and checkout.

## Getting Started 

### Prerequisites

Ensure you have the following installed on your system 

- LTS version of Node.js: [Download and install](https://nodejs.org/)
- A package manager: [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
- Docker: [Docker](https://www.docker.com/)

### Installation

1. Clone the repository

```bash
git clone [TODO: Add the repository URL]
``` 

2. Navigate to the project directory

```bash
cd coding-refresher-hub
```

3. Install the dependencies

```bash
npm install
```

4. Set up the environment variables

Create a `.env` file in the root directory of the project based on `.env.example` file.:

```bash
cp .env.example .env
```

5. Start the development server

```bash
npm run dev
```

### Docker

Build and start the Docker image

```bash
docker-compose up --build
```

## Project Structure

The project is structured as follows:

- `src`: Contains the source code for the project.
  - `assets`: General static public assets such as images, icons and base stylesheet.
  - `components`: General shared components.
  - `data`: Hardcoded data to load or the data layer of the projects [data docs](src/data/readme.md).
  - `features`: Feature based organisation, for details see the [features docs](src/features/readme.md).
  - `layouts`: Contains components that are responsible for the layout of the web app [layout docs](src/layouts/readme.md).s 
  - `views`: Contains the pages of the web app.
  - `services`: Contains services that interact with external APIs or services.
  - `utils`: Contains utility functions that are used across the project.
  