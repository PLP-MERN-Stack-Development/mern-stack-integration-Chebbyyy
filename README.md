# 📝 **BlogHub — MERN Full Stack Blogging Platform**

**BlogHub** is a full-stack blogging application built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
It allows users to **register**, **log in**, **create and edit blog posts**, **categorize content**, and interact with a secure RESTful API.

---

## 🚀 **Project Overview**

**BlogHub** is a modern, cloud-based blogging system that supports:
- Secure user authentication using JWT.
- Full CRUD operations for blog posts and categories.
- Cloud-hosted MongoDB via **MongoDB Atlas**.
- A responsive **React frontend** that connects to an Express.js backend.

This project demonstrates clean architecture, modular code design, and integration between backend and frontend using a RESTful API.

---

## 🧠 **Tech Stack**

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, Axios, React Router, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | JSON Web Tokens (JWT), bcryptjs |
| **Environment Variables** | dotenv |
| **API Testing** | Postman / Thunder Client |

---

## 🗂️ **Folder Structure**

bloghub/
│
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page components (Home, Login, Dashboard, etc.)
│ │ ├── context/ # Auth context (if implemented)
│ │ ├── api/ # Axios API calls
│ │ └── App.js
│ ├── package.json
│ └── README.md
│
└── server/ # Express backend
├── config/ # Database configuration (db.js)
├── controllers/ # Business logic for each route
├── middleware/ # Authentication & error handling
├── models/ # Mongoose schemas (User, Post, Category)
├── routes/ # API route definitions
├── utils/ # Helper utilities (JWT, error response)
├── uploads/ # Uploaded images
├── .env # Environment variables
├── package.json
└── server.js

yaml
Copy code

---

## ⚙️ **Setup Instructions**

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/bloghub.git
cd bloghub
2️⃣ Setup and Run the Backend
bash
Copy code
cd server
npm install
Create a .env file inside the server/ directory and then start the backend:

bash
Copy code
npm run dev   # if using nodemon
# or
node server.js
Backend runs on:
👉 http://localhost:5000

3️⃣ Setup and Run the Frontend
bash
Copy code
cd ../client
npm install
npm start
Frontend runs on:
👉 http://localhost:3000

🔑 Environment Variables
Create a .env file in the /server directory with the following:

env
Copy code
PORT=5000
MONGODB_URI=mongodb+srv://cheburetdaisy65_db_user:12345@cluster0.pns2wuc.mongodb.net/?appName=Cluster0
JWT_SECRET=myverysecretkey
NODE_ENV=development
🧩 API Documentation
🔐 Authentication Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Log in user and return a JWT token

📝 Post Routes
Method	Endpoint	Access	Description
GET	/api/posts	Public	Get all posts
GET	/api/posts/:id	Public	Get a single post
POST	/api/posts	Private	Create a new post
PUT	/api/posts/:id	Private	Update an existing post
DELETE	/api/posts/:id	Private	Delete a post

🗂️ Category Routes
Method	Endpoint	Access	Description
GET	/api/categories	Public	Get all categories
POST	/api/categories	Private	Create a category
DELETE	/api/categories/:id	Private	Delete a category

💡 Features Implemented
✅ Secure user authentication using JWT
✅ Password hashing with bcryptjs
✅ Full CRUD functionality for posts and categories
✅ Modular Express.js architecture
✅ MongoDB Atlas cloud database integration
✅ Centralized error handling middleware
✅ CORS-enabled Express API
✅ React frontend consuming RESTful API via Axios
✅ Environment variable-based configuration

🖥️ Frontend Overview
The React frontend includes:

Login & Register pages with validation

Dashboard showing user posts

Create / Edit Post forms connected to backend

Category filtering for posts

Axios interceptors for protected routes

Responsive design with Tailwind CSS

Frontend base URL → http://localhost:3000
Backend base URL → http://localhost:5000/api

🧪 Testing the API
Test with Postman or Thunder Client:

Register User

Method: POST

Endpoint: http://localhost:5000/api/auth/register

Body:

json
Copy code
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "123456"
}
Log In

Method: POST

Endpoint: http://localhost:5000/api/auth/login

Copy the token returned.

Access Protected Routes

Add this header:

Authorization: Bearer <your_token_here>
🖼️ Screenshots



Page	Description
User login page
Dashboard displaying user posts
Form for creating a new blog post

###🤝 Contributing
Contributions are welcome!

Fork this repository

Create a feature branch:


git checkout -b feature/YourFeature
Commit your changes:

git commit -m "Add new feature"
Push to your branch and open a Pull Request.

🧾 License
This project is licensed under the MIT License.
You’re free to use, modify, and distribute it for personal or educational purposes.

Developed with ❤️ by Daisy Cheburet


Would you like me to include a **short “Frontend Usage” section** (showing how the React app consumes the API using Axios, e.g., sample code for login/register)?  
That makes your README even more impressive for portfolios or submissions.
