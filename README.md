## MERN Notes App

A full-stack note-taking app built with the MERN stack: MongoDB, Express.js, React, and Node.js. Includes user authentication and full CRUD functionality for notes.

Backend API (Render): https://mernnoteappbackend-1.onrender.com
Frontend (React) (Vercel) : https://mern-note-app-frontend.vercel.app/ 

## Features
✅ Authentication

User Sign Up and Login (JWT-based)

Protected Routes (Frontend)

Logout Support

✅ Notes Management

Create, Read, Delete Notes

Filter Notes using Search Bar

MongoDB Data Persistence via Mongoose

🛠️ Tech Stack

Frontend:	React, Context API, Vite
Backend:	Node.js, Express.js, JWT
Database:	MongoDB Atlas + Mongoose
Auth:	JSON Web Tokens (JWT)
Deployment:	Render (Backend), Vercel (Frontend)

## Auth Endpoints

POST	/api/auth/signup	Register new user
POST	/api/auth/login	Login existing user

## Notes Endpoints (Protected with Bearer Token)

GET	/api/notes	Get all user notes
POST	/api/notes	Create a new note
DELETE	/api/notes/:id	Delete a note by ID

