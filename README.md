# 🎯 **Random Quote Generator - Node.js + Next.js**

A simple **Random Quote Generator** app built with **Node.js** for the backend and **Next.js** for the frontend. The app allows users to view random quotes and add their own quotes to the database.

###  Demo Screenshots of Project - 

![Screenshot 2025-02-02 181619](https://github.com/user-attachments/assets/5123ce04-8bd8-470b-aceb-72e7787de7a3)
![Screenshot 2025-02-02 182013](https://github.com/user-attachments/assets/c2b9903b-3903-4e9d-9b22-93c4ff2f2ece)
![Screenshot 2025-02-02 181915](https://github.com/user-attachments/assets/829ed9c4-48e7-43d7-a113-36979b2297f3)
![Screenshot 2025-02-02 181758](https://github.com/user-attachments/assets/a73b4143-6792-4013-b6b6-fa61d4e95e37)
![Screenshot 2025-02-02 181742](https://github.com/user-attachments/assets/aca81d16-31c9-4d75-843f-6b0017f6d181)
![Screenshot 2025-02-02 181715](https://github.com/user-attachments/assets/881a24e9-f1a0-4a8f-9a30-32be1ba55e95)


---

## 🚀 **Features**
- **Backend (Node.js + Express):**
  - ✅ Fetches a random quote.
  - ✅ Allows users to add new quotes.
- **Frontend (Next.js):**
  - ✅ Displays quotes fetched from the backend.
  - ✅ Allows users to interact with the system and view new random quotes.

---

## 📦 **Technologies Used**
- **Backend:**
  - Node.js
  - Express.js
  - CORS (Cross-Origin Resource Sharing)
  - Body-parser
- **Frontend:**
  - Next.js
  - Axios (for making HTTP requests)
- **Database (Optional):**
  - MongoDB / SQLite (can be used to store quotes persistently)

---

## ⚡ **Getting Started**

Follow the steps below to get the application up and running on your local machine.

## ⚡ Step by Step Guide

Step 1: Setup Node.js & Express Backend
We'll create an API that:

- ✅ Returns a random quote.
- ✅ Allows users to add new quotes.

#### 1️⃣ Initialize a Node.js Project

Run the following commands:

```
mkdir quote-generator
cd quote-generator
npm init -y
```

#### 2️⃣ Install Required Dependencies

```
npm install express cors body-parser
```
####  3️⃣ Create server.js (Backend)

✅ Run the Backend:
```
node server.js
```

---


## ⚡Step 2: Setup Next.js Frontend
Let's build a simple Next.js app to fetch and display quotes.

#### 1️⃣ Create a Next.js App
Run:
```
npx create-next-app@latest quote-app
cd quote-app
npm install axios
```
#### 2️⃣ Update pages/index.js
Edit the file pages/index.js

#### 3️⃣ Run the Next.js App
```
npm run dev
```

## ⚡ Node Version Management
To ensure compatibility with the latest Next.js, use Node.js version 20.x or higher:
```
nvm install 20
node -v
```

## ⚡ Step 3: Verify the Application
- Backend should be running on `http://localhost:5000`
- Frontend should be running on `http://localhost:3000`

Visit http://localhost:3000 and you should see a random quote displayed with a button to fetch a new one.

#### 🎉 Enjoy Your Random Quote Generator!
