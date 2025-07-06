
# 📊 Accountant Landing Page – Full-Stack Web Application

A professional and responsive landing page tailored for self-employed accountants and financial consultants. This full-stack project includes a modern frontend with multi-language support and a backend for handling client interactions and service logic.

Developed as part of a complete solution to promote accounting services, this project includes clean design, form handling, and server integration.

---

## 🌐 Live Demo

> Coming soon – deploy via Vercel (frontend) and Render (backend)  
> *(Add links here when live)*

---

## 📸 Screenshot

> Add a screenshot image of the landing page.

![Accountant Landing Screenshot](./screenshot.png)

---

## 🚀 Features

- ✅ Responsive landing page layout
- 🌍 Multi-language support (locales)
- 🧾 Services section (tax, consulting, bookkeeping)
- 📞 Contact form / lead generation
- 📦 Full backend integration using Express
- 🛡️ Clean code structure (frontend & backend separation)

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- SCSS / CSS
- React Router
- i18n localization (multi-language support)
- Vite build system

### Backend
- Node.js + Express
- REST API
- MongoDB (if used)
- File-based routing & service layer structure

---

## 📂 Project Structure

```
accountant-landing/
│
├── client/ (front-end)
│   ├── index.html
│   ├── src/
│   ├── locales/
│   └── vite.config.js
│
├── server/ (back-end)
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── services/
│   └── public/
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/haimmichaeli90/accountant-landing.git
cd accountant-landing
```

---

### 2. Setup Backend

```bash
cd back-end
npm install
```

Create a `.env` file with necessary environment variables (e.g. MongoDB URI or custom configs):

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
```

Start the server:

```bash
npm run dev
```

---

### 3. Setup Frontend

```bash
cd ../front-end
npm install
npm run dev
```

The frontend will run at [http://localhost:5173](http://localhost:5173)  
The backend API will run at [http://localhost:5000](http://localhost:5000)

---

## 👨‍💻 Developed By

**Haim Michaeli**  
[LinkedIn →](https://www.linkedin.com/in/haim-michaeli-b1b75b246/)

---

## 📌 Notes

- This landing page is adaptable for real-world use
- Easily extendable to support form submissions, email integration, or CMS

---

## 📃 License

This project is for educational and professional showcase purposes. Feel free to reuse and adapt with credit.
