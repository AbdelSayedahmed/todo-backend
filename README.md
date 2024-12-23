# Todo List Backend

This is the backend for the Todo List application. It is built with **Express.js**, **Prisma**, **MySQL**, and **TypeScript**. The backend provides APIs to manage tasks, including creating, reading, updating, and deleting tasks.

---

## Features

- **CRUD Operations**:
  - Create, read, update, and delete tasks.
- **Database Integration**:
  - Uses Prisma as an ORM to interact with a MySQL database.
- **TypeScript Support**:
  - Written in TypeScript for improved type safety.
- **CORS Support**:
  - Configured to allow requests from the frontend.

---

## Tech Stack

- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Prisma
- **Programming Language**: TypeScript

---

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or later)
- [MySQL](https://www.mysql.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbdelSayedahmed/todo-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the database:

   - Create a MySQL database named `todo_db`.
   - Update the `DATABASE_URL` in the `.env` file:

     ```env
     DATABASE_URL="mysql://<user>:<password>@localhost:3306/todo_db"
     ```

5. Run the Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev --name init
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. The backend will run on:

   ```
   http://localhost:5000
   ```

---

## API Endpoints

### Base URL

```
http://localhost:5000/api
```

### Endpoints

#### GET /tasks

Fetch all tasks.

#### POST /tasks

Create a new task.

**Body**:

```json
{
  "title": "Task title",
  "color": "Task color"
}
```

#### GET /tasks/:id

Fetch a single task by ID.

#### PUT /tasks/:id

Update a task by ID.

**Body**:

```json
{
  "title": "Updated title",
  "color": "Updated color",
  "completed": true
}
```

#### DELETE /tasks/:id

Delete a task by ID.

---

## Folder Structure

```
backend/
├── node_modueles/
├── prisma/
│   ├── migrations/
│   └── schema.prisma  # Prisma schema definition
├── src/
│   ├── controllers/
│   │   ├── taskControllers.ts  # Controller logic for tasks
│   ├── queries/
│   │   ├── taskQueries.ts      # Prisma queries for tasks
│   ├── routes/
│   │   ├── taskRoutes.ts       # Task routes
│   ├── app.ts         # Express app setup
│   └── server.ts      # Entry point of the server
├── .env               # Environment variables
├── .gitignore         # Ignored Files
├── package-lock.json
├── package.json       # Project metadata and scripts
├── README.md
└── tsconfig.json      # TypeScript configuration
```

---

## Scripts

### Development

```bash
npm run dev
```

Start the development server.

### Build

```bash
npm run build
```

Build the project for production.

### Start

```bash
npm run start
```

Run the production server.

### Prisma Studio

```bash
npx prisma studio
```

Start the Prisma Studio to interact with the database visually.
