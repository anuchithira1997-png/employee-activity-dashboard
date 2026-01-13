# Employee Activity Dashboard

A simple React-based Employee Activity Dashboard that allows employees to log daily activities and view their activity history. This project was built as part of a frontend assignment.

---

## 🔗 Live Demo
https://employeeactivity.netlify.app/

## 📂 GitHub Repository
https://github.com/anuchithira1997-png/employee-activity-dashboard

---

## 🧩 Approach & Architecture

- Built using **React JS** with functional components
- Used **React Hooks** (`useState`, `useEffect`) for state management
- Component-based architecture for better reusability and readability
- Basic routing handled using **React Router**
- UI styled using **CSS**
- Data persistence handled using **localStorage** (mocked backend behavior)

---

## ✨ Features Implemented

- Employee login (basic role-based flow)
- Submit daily activity entries
- View personal activity history
- Responsive UI for desktop and mobile
- Clean and simple dashboard layout

---

## ⚖️ Assumptions & Trade-offs

- Backend APIs were not provided, so **localStorage** was used instead of server-side storage
- Authentication is implemented in a simplified way (no JWT or OAuth)
- Focus was kept on functionality and clarity rather than advanced UI frameworks

---

## 🚧 Challenges Faced

- Handling state persistence without a backend
- Managing routing and conditional rendering based on user role
- Deployment configuration issues during Netlify setup

---

## 💡 Suggestions / Improvements

- Integrate a backend API for real authentication and data storage
- Add form validation and error handling
- Improve UI/UX using a design system like Material UI
- Add unit tests for components

---

## ❓ Questions / Clarifications

- None at this time

---

## 🛠️ Tech Stack

- React JS
- JavaScript (ES6)
- HTML5
- CSS3
- Netlify (Deployment)

---

## 📦 Installation & Setup

```bash
git clone https://github.com/anuchithira1997-png/employee-activity-dashboard.git
cd employee-activity-dashboard
npm install
npm start
