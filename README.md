# 📝 Glassmorphism To-Do List App

A beautiful **To-Do List App** with **Glassmorphism UI**, built using **React Vite**, **Local Storage** for task persistence, and **Firebase Authentication** for user login.

---

## 🚀 Features
✔ **Add, Edit, Delete tasks**  
✔ **Mark tasks as Completed/Undo**  
✔ **Local Storage support** (Tasks persist after refresh)  
✔ **Firebase Authentication** (Users must log in to use)  
✔ **Glassmorphism UI with gradient text**  
✔ **Fully responsive design**  

---

## 📂 Project Structure
```
📂to-do-app
│── 📂src
│   ├── 📂components
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   ├── 📂auth
│   │   ├── Auth.jsx
│   ├── 📂styles
│   │   ├── styles.css
│   ├── App.jsx
│   ├── main.jsx
│── .env
│── index.html
│── package.json
│── README.md
```

---

## 🛠️ Technologies Used
- ⚡ **React (Vite)**
- 🗄️ **Local Storage**
- 🔥 **Firebase Authentication**

---

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/shivamsaurbh25/to-do-app.git
cd to-do-app
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Firebase Authentication
- Go to **[Firebase Console](https://console.firebase.google.com/)**.
- Create a project & enable **Google Authentication**.
- Get your Firebase API keys and add them to a `.env` file:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4️⃣ Start the App
```sh
npm run dev
```
---

## 📜 License
This project is **open-source** and available under the **MIT License**.

---

## ❤️ Love to Hear Your Feedback!
### We’d love to hear your thoughts on this project! 🚀

💬 Found a bug? Have an idea for improvement?

- Feel free to open an issue or submit a pull request.
- Drop your feedback in the comments section.
⭐ If you like this project, consider giving it a star on GitHub! ⭐

---