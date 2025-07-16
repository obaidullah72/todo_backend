# Task Management API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** to manage tasks.

## Features

- **Get all tasks**
- **Create a new task**
- **Update a task**
- **Delete a task**

## Prerequisites

- Node.js >= 14
- MongoDB running locally or in the cloud

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/task-api.git
   cd task-api
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   ```bash
   touch .env
   ```

   And add your MongoDB connection string:

   ```
   MONGODB_URI=mongodb://localhost:27017/taskdb
   PORT=5000
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The API will be running on:

   ```
   http://localhost:5000
   ```

## API Endpoints

### Get all tasks

* **URL:** `/tasks`
* **Method:** `GET`
* **Response:**

  ```json
  [
    {
      "_id": "taskId",
      "title": "Task title",
      "description": "Task description",
      "category": "General",
      "completed": false,
      "createdAt": "2025-07-16T12:00:00Z"
    }
  ]
  ```

---

### Create a new task

* **URL:** `/tasks`
* **Method:** `POST`
* **Body:**

  ```json
  {
    "title": "New task",
    "description": "Optional description",
    "category": "Work",
    "completed": false
  }
  ```
* **Response:**

  ```json
  {
    "_id": "taskId",
    "title": "New task",
    "description": "Optional description",
    "category": "Work",
    "completed": false,
    "createdAt": "2025-07-16T12:00:00Z"
  }
  ```

---

### Update a task

* **URL:** `/tasks/:id`
* **Method:** `PUT`
* **Body:**

  ```json
  {
    "title": "Updated title",
    "description": "Updated description",
    "category": "Personal",
    "completed": true
  }
  ```
* **Response:**

  ```json
  {
    "_id": "taskId",
    "title": "Updated title",
    "description": "Updated description",
    "category": "Personal",
    "completed": true
  }
  ```

---

### Delete a task

* **URL:** `/tasks/:id`
* **Method:** `DELETE`
* **Response:**

  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

---

## Project Structure

```
.
├── models
│   └── Task.js          # Mongoose schema
├── routes
│   └── tasks.js         # Express router
├── server.js            # Entry point
├── package.json
└── README.md
```

## Example Task Model (`models/Task.js`)

```javascript
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    category: { type: String, default: 'General' },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
```

## License

MIT
