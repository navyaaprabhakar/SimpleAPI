# 🚀 Simple Greeting API & Web App

A lightweight web application with a **Node.js + Express backend** and a **plain HTML, CSS, and JavaScript frontend** that greets the user. The project is fully deployable on **Vercel**.

## 📌 Features

✅ **REST API** - `GET /api/greet?name=YourName`\
✅ **Simple UI** - Enter name, click a button, and get greeted\
✅ **Modern Design** - Sleek UI with CSS styling\
✅ **Easy Deployment** - Hosted on **Vercel**

---

## 📂 Project Structure

```
simple-api-project/
│── backend/            # Node.js + Express backend
│   ├── server.js       # Express API server
│   ├── package.json    # Dependencies & scripts
│   ├── vercel.json     # Vercel config for deployment
│── frontend/           # Plain HTML, CSS & JavaScript frontend
│   ├── index.html      # Main webpage
│   ├── style.css       # Styling
│   ├── script.js       # Fetch API request
│   ├── vercel.json     # Vercel config for deployment
│── README.md           # Documentation
```

---

## 🛠️ Tech Stack

### **Backend**

- **Node.js**
- **Express.js**
- **CORS**

### **Frontend**

- **HTML5**
- **CSS3**
- **JavaScript (Fetch API)**

### **Deployment**

- **Vercel**

---

## 🔧 Setup & Installation

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/navyaaprabhakar/SimpleAPI.git
cd SimpleAPI
```

### **2️⃣ Run the Backend Locally**

```sh
cd backend
npm install
node server.js
```

- Open [**http://localhost:5000/api/greet?name=YourName**](http://localhost:5000/api/greet?name=YourName) in your browser.

### **3️⃣ Run the Frontend Locally**

Simply open `frontend\index.html` in your browser.

---

## 🚀 Deploying to Vercel

### **1️⃣ Install Vercel CLI**

```sh
npm install -g vercel
vercel login
```

### **2️⃣ Deploy Backend**

```sh
cd backend
vercel
```

- **Copy the deployed backend URL** (e.g., `https://your-backend.vercel.app`).
- Update `API_BASE_URL` in `frontend/script.js`.

### **3️⃣ Deploy Frontend**

```sh
cd frontend
vercel
```

- **Open the deployed frontend URL in your browser** (e.g., `https://your-frontend.vercel.app`).

---

## 📦 API Endpoint Documentation

### **GET /api/greet**

Returns a greeting message.

#### **Request Example**

```sh
GET /api/greet?name=John
```

#### **Response**

```json
{
  "message": "Hello, John! Welcome to Younglabs."
}
```

#### **Error Handling**

If the name is missing:

```json
{
  "error": "Name is required."
}
```

---

## 🎨 UI Preview

| User Input | Greeting Output                      |
| ---------- | ------------------------------------ |
| **John**   | *Hello, John! Welcome to Younglabs.* |
| *(empty)*  | *⚠️ Please enter your name.*         |

---

**🌟 Enjoy coding! Happy Hacking!** 🚀🎉

