# 📝 SmartForm - MERN Google Form Clone

SmartForm is a responsive Google Form-style web application built using the **MERN stack** and styled with **Tailwind CSS**. Users can submit personal data through a form and view all submissions based on email. Designed to be simple, clean, and extendable.

---

## 🚀 Features

- 📄 Submit form with:
  - Name
  - Email
  - Gender
  - Mobile Number
  - Message
- 🔍 View all submissions filtered by email

---

## 🌟 Upcoming Features

- 🗑️ Delete a submission  
- ✏️ Edit a submission  
- 🌓 Dark mode toggle  
- 📬 Send email confirmation on form submit  

---

## 🛠️ Tech Stack

**Frontend**  
- React.js (Vite)  
- Tailwind CSS  
- Axios  
- Lucide React (icons)

**Backend**  
- Node.js + Express  
- MongoDB (Mongoose)  
- Nodemailer *(for future email feature)*

---

## 🌐 Live Demo

> Coming soon (Deploying on **Vercel** and **Render**)

---

## 🧩 Installation

### 🔧 Backend Setup

```bash
cd backend
npm install
npm run dev

💻 Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
Create a .env file inside the frontend/ folder:

ini
Copy
Edit
VITE_BACKEND_URL=http://localhost:4000
When deploying to Vercel, set VITE_BACKEND_URL in project settings to your deployed backend URL (e.g., from Render).

📸 Screenshots
Add screenshots of the submission form and submissions list here!

📂 Folder Structure
bash
Copy
Edit
/backend
  └── models/
  └── routes/
  └── controllers/
  └── server.js

/frontend
  └── components/
  └── pages/
  └── App.jsx
  └── main.jsx
🧠 Project Summary
SmartForm is a MERN-based Google Form clone that lets users submit and fetch form entries by email. Built for simplicity and flexibility, with future support planned for dark mode, delete/edit, and emails.

🤝 Contributing
Pull requests are welcome! If you have suggestions for improvement, feel free to fork the repo and submit a PR.

