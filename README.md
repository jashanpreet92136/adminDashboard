# NextAdmin Dashboard (Learning Project)

This is a **Next.js admin dashboard project** created purely for learning purposes.

The main goal of this project was to understand:

- Next.js App Router
- Server Actions
- Authentication flow using NextAuth
- MongoDB integration
- Middleware protection
- Session handling (JWT vs Session)
- Protected routes (dashboard access control)

---

## 🚀 Purpose of this Project

This project is NOT focused on production deployment or responsive UI.

It was built to deeply understand how authentication and server-side logic works in Next.js.

---

## 🔐 Authentication Flow (What I Learned)

- User submits login form
- `useActionState` triggers `authenticate` server action
- `signIn("credentials")` is called
- NextAuth `authorize()` function runs
- Database is checked for user
- Password is compared using bcrypt
- If valid → JWT/session is created
- User is redirected to `/dashboard`

---

## 🧠 Key Concepts Implemented

- Server Actions (`app/lib/actions.js`)
- Credentials Provider (NextAuth)
- bcrypt password hashing
- MongoDB + Mongoose
- Middleware route protection
- JWT + Session callbacks
- Redirect handling after login

---

## 📸 Screenshots

### 🔑 Login Page
![Login Page](./screenshots/login.png)

---

### 📊 Dashboard
![Dashboard View 1](./screenshots/dash1.png)

![Dashboard View 2](./screenshots/dash2.png)

---

### 👤 Users Page
![Users Page](./screenshots/users.png)

---

### 📦 Products Page
![Products Page](./screenshots/products.png)

---

### 💰 Transactions Page
![Transactions View 1](./screenshots/trans1.png)

![Transactions View 2](./screenshots/trans2.png)

---

### 📈 Reports Page
![Reports Page](./screenshots/repo.png)

---

### 📊 Revenue Page
![Revenue View 1](./screenshots/rev1.png)

![Revenue View 2](./screenshots/rev2.png)

---

### 👥 Teams Page
![Teams Page](./screenshots/teams.png)

---

## 🗂 Project Structure
