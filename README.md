📝 BlogHub — MERN Full Stack Blogging Platform

BlogHub is a full-stack blogging application built using the MERN stack (MongoDB, Express.js, React, Node.js).
It allows users to register, log in, create and edit blog posts, categorize content, and interact with a secure RESTful API.

🚀 Project Overview

BlogHub is a multi-user blogging system that supports:

Secure authentication with JWT

Blog post creation, editing, and deletion

Category-based content management

Cloud-hosted MongoDB via MongoDB Atlas

Seamless React frontend integration

It demonstrates how to build a scalable MERN application with reusable code, modular architecture, and real-world CRUD functionality.

🧠 Tech Stack
Layer	Technology
Frontend	React.js, Axios, React Router, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB Atlas
Authentication	JSON Web Tokens (JWT), bcryptjs
Environment Variables	dotenv
API Testing	Postman / Thunder Client
🗂️ Folder Structure
bloghub/
│
├── client/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components (Home, Login, Dashboard, etc.)
│   │   ├── context/      # Auth context (if implemented)
│   │   ├── api/          # Axios API calls
│   │   └── App.js
│   ├── package.json
│   └── README.md
│
└── server/               # Express backend
    ├── config/           # MongoDB configuration (db.js)
    ├── controllers/      # Business logic for each route
    ├── middleware/       # Authentication & error handling
    ├── models/           # Mongoose schemas (User, Post, Category)
    ├── routes/           # Route definitions (auth, posts, categories)
    ├── utils/            # Utility functions (JWT, error handling)
    ├── uploads/          # Uploaded images (if any)
    ├── .env              # Environment variables
    ├── package.json
    └── server.js

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/your-username/bloghub.git
cd bloghub

2️⃣ Setup and Run Backend
cd server
npm install


Create a .env file in the server/ directory (see below), then start the server:

npm run dev   # if using nodemon
# or
node server.js


Server runs on:
👉 http://localhost:5000

3️⃣ Setup and Run Frontend
cd ../client
npm install
npm start


Frontend runs on:
👉 http://localhost:3000

🔑 Environment Variables

Create a .env file inside /server:

PORT=5000
MONGODB_URI=mongodb+srv://cheburetdaisy65_db_user:12345@cluster0.pns2wuc.mongodb.net/?appName=Cluster0
JWT_SECRET=myverysecretkey
NODE_ENV=development

🧩 API Documentation
🔐 Authentication Routes
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Log in a user and return JWT
📝 Post Routes
Method	Endpoint	Access	Description
GET	/api/posts	Public	Get all posts
GET	/api/posts/:id	Public	Get a specific post
POST	/api/posts	Private	Create a new post
PUT	/api/posts/:id	Private	Update an existing post
DELETE	/api/posts/:id	Private	Delete a post
🗂️ Category Routes
Method	Endpoint	Access	Description
GET	/api/categories	Public	Get all categories
POST	/api/categories	Private	Create a category
DELETE	/api/categories/:id	Private	Delete a category
💡 Features Implemented

✅ Secure user authentication (JWT)
✅ Password hashing using bcryptjs
✅ Full CRUD operations for posts and categories
✅ Modular Express.js architecture
✅ MongoDB Atlas integration
✅ Centralized error handling
✅ CORS-enabled Express server
✅ Frontend consumes RESTful API via Axios
✅ Environment variable support for configuration

🖥️ Frontend Overview

The React frontend includes:

Login & Register pages with form validation

Dashboard showing posts by logged-in users

Create / Edit Post forms connected to backend API

Category filter for browsing posts by topic

Axios interceptors for authenticated API calls

Styled with Tailwind CSS

Frontend base URL (during development):
http://localhost:3000
Backend API base URL:
http://localhost:5000/api

🧪 Testing the API

Use Postman or Thunder Client:

Register User

POST http://localhost:5000/api/auth/register

Body (JSON):

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "123456"
}


Log In

POST http://localhost:5000/api/auth/login

Copy the returned token.

Access Protected Routes

Add header:

Authorization: Bearer <your_token_here>

🖼️ Screenshots

(Add later when frontend UI is ready)

Page	Description

	User login page

	Display all user posts

	Create a new blog post
🤝 Contributing

Contributions are welcome!

Fork this repo

Create your feature branch (git checkout -b feature/YourFeature)

Commit changes (git commit -m 'Add feature')

Push and open a Pull Request



