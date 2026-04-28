# 📚 Bookstore REST API

## 📌 Project Overview

This project is a simple RESTful API for managing a bookstore. It allows users to perform CRUD operations (Create, Read, Update, Delete) on books using Node.js, Express, and MongoDB.

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Postman

## ⚙️ How to Run Locally

1. Clone the repository:

```
git clone <your-repo-link>
cd bookstore-api
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
```

4. Run the server:

```
npm start
```

Server runs on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### 🔹 Create Book

**POST** `/books`

Body:

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 20,
  "isbn": "1234567890",
  "publishedDate": "2018-10-16"
}
```

---

### 🔹 Get All Books (with Pagination & Search)

**GET** `/books?page=1&limit=5&search=atomic`

---

### 🔹 Get Single Book

**GET** `/books/:id`

---

### 🔹 Update Book

**PUT** `/books/:id`

---

### 🔹 Delete Book

**DELETE** `/books/:id`

---

## ✅ Features

* CRUD operations
* MongoDB Atlas integration
* Pagination
* Search filter
