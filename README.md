# Digital Life Lessons - Full Stack MERN Application

A comprehensive platform where users can create, share, and discover meaningful life lessons and personal growth insights. Built with React, Node.js, Express, MongoDB, Firebase, and Stripe.

**🌐 Live Demo:** [https://digital-life-lessons-client.vercel.app/](https://digital-life-lessons-client.vercel.app/)

---

## 📑 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Project Structure](#-project-structure)
4. [Prerequisites](#-prerequisites)
5. [Quick Start](#-quick-start)
6. [Environment Setup](#-environment-setup)
7. [Database Setup](#-database-setup)
8. [API Documentation](#-api-documentation)
9. [Deployment](#-deployment)
10. [Troubleshooting](#-troubleshooting)
11. [Contributing](#-contributing)

---

## ✨ Features

### Core Functionality
- ✅ User authentication (Email/Password + Google OAuth)
- ✅ Lesson CRUD operations (Create, Read, Update, Delete)
- ✅ Public/Private lesson visibility
- ✅ Free/Premium access levels with Stripe payment integration
- ✅ Like, comment, and favorite lessons
- ✅ Search, filter, and sort lessons
- ✅ Lesson reporting system for moderation
- ✅ Admin dashboard for content moderation
- ✅ Role-based access control (Free User, Premium User, Admin)
- ✅ Responsive design (Mobile, Tablet, Desktop)

### User Experience
- User profiles with contribution stats
- Favorites management
- Comment system with nested discussions
- Premium content protection with blur/lock UI
- Real-time UI updates
- Toast notifications (no alert())
- Loading states and error handling

---

## 🛠️ Tech Stack

### Frontend
- **React** 18 - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **Firebase** - Authentication
- **React Context API** - State management
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - Object Data Modeling (ODM)
- **Firebase Admin SDK** - Server-side authentication
- **Stripe API** - Payment processing

---

## 📁 Project Structure

```
digital-life-lessons/
├── client/                          # React Frontend (Vite)
│   ├── src/
│   │   ├── components/             # Reusable React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LessonCard.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── PublicLessons.jsx
│   │   │   ├── LessonDetailsPage.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── AdminDashboardPage.jsx
│   │   ├── hooks/                  # Custom React hooks
│   │   │   ├── useLessons.js
│   │   │   ├── useFavorites.js
│   │   │   └── useInteractions.js
│   │   ├── context/                # React Context
│   │   │   └── AuthContext.jsx
│   │   ├── services/               # API services (Axios)
│   │   │   └── api.js
│   │   ├── config/                 # Firebase config
│   │   │   └── firebase.js
│   │   ├── styles/                 # Global CSS + Tailwind
│   │   │   └── index.css
│   │   ├── App.jsx                 # Main app with routing
│   │   └── main.jsx                # Entry point
│   ├── public/                     # Static assets
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── .env.example
│
└── server/                          # Express Backend
    ├── src/
    │   ├── controllers/            # Business logic
    │   ├── routes/                 # API routes
    │   ├── models/                 # Mongoose schemas
    │   │   ├── User.js
    │   │   ├── Lesson.js
    │   │   ├── Comment.js
    │   │   └── Report.js
    │   ├── middleware/             # Auth, error handling
    │   │   ├── authMiddleware.js
    │   │   └── errorHandler.js
    │   ├── config/                 # Database, Firebase, env
    │   │   ├── db.js
    │   │   └── firebase.js
    │   └── index.js                # Express app entry
    ├── serviceAccountKey.json      # Firebase credentials
    ├── package.json
    └── .env.example
```

---

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js** v16 or higher
- **npm** or **yarn** package manager
- **MongoDB Atlas** account (for database)
- **Firebase** project (for authentication)
- **Stripe** account (for payment processing)

---

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/MSabbirHossen/Digital-Life-Lessons.git
cd digital-life-lessons
```

### 2. Backend Setup

```bash
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

Server runs on **http://localhost:5000**

### 3. Frontend Setup

```bash
cd ../client

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

Client runs on **http://localhost:5173**

---

## 🔐 Environment Setup

### Backend Environment Variables (.env)

```env
# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/digital-life-lessons

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_key_id
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
FIREBASE_CLIENT_EMAIL=your_service_account@your_project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your_client_id

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Frontend Environment Variables (.env)

```env
# API
VITE_API_BASE_URL=http://localhost:5000/api

# Firebase Web SDK
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Stripe
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

---

## 🔑 Firebase Setup

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create Project"
3. Enable Firestore and Authentication

### Step 2: Configure Authentication

1. Navigate to **Authentication** → **Sign-in method**
2. Enable **Email/Password**
3. Enable **Google OAuth**
4. Add authorized redirect URI: `http://localhost:5173`

### Step 3: Get Credentials

1. Go to **Project Settings** → **Service Account**
2. Click **Generate new private key**
3. Download JSON file for server `.env`
4. Copy Web SDK credentials for client `.env`

---

## 💳 Stripe Configuration

### Step 1: Create Stripe Account

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Create a test account

### Step 2: Get API Keys

1. Navigate to **API Keys** section
2. Copy **Publishable Key** and **Secret Key**
3. Add both keys to backend and frontend `.env` files

### Step 3: Test Cards

| Card Number | Purpose |
|-------------|---------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 9995` | Requires authentication |

### Step 4: Setup Webhook (Production)

1. Create webhook endpoint: `/api/stripe/webhook`
2. Subscribe to: `checkout.session.completed`

---

## 📊 MongoDB Setup

### Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Add your IP to allowlist (or allow all: `0.0.0.0/0`)

### Step 2: Get Connection String

```
mongodb+srv://username:password@cluster.mongodb.net/digital-life-lessons
```

### Collections Created Automatically

- `users` - User accounts and premium status
- `lessons` - Published lessons
- `comments` - Lesson comments
- `favorites` - User favorite lessons
- `lessonreports` - Reported inappropriate content

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register new user | ❌ |
| GET | `/auth/me` | Get current user | ✅ |
| PUT | `/auth/profile` | Update profile | ✅ |
| GET | `/auth/user/:id` | Get public user profile | ❌ |

### Lesson Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/lessons/public` | Get all public lessons | ❌ |
| POST | `/lessons` | Create lesson | ✅ |
| GET | `/lessons/:id` | Get single lesson | ❌ |
| PUT | `/lessons/:id` | Update lesson | ✅ |
| DELETE | `/lessons/:id` | Delete lesson | ✅ |
| GET | `/lessons/user/my-lessons` | Get user's lessons | ✅ |

### Interactions Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/lessons/:id/like` | Like/unlike lesson | ✅ |
| POST | `/lessons/:id/comment` | Add comment | ✅ |
| DELETE | `/lessons/:id/comment/:commentId` | Delete comment | ✅ |

### Favorites Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/lessons/favorites/add` | Add to favorites | ✅ |
| POST | `/lessons/favorites/remove` | Remove from favorites | ✅ |
| GET | `/lessons/favorites/my-favorites` | Get user's favorites | ✅ |
| GET | `/lessons/favorites/check/:lessonId` | Check if favorited | ✅ |

### Reports Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/lessons/:id/report` | Report lesson | ✅ |
| GET | `/lessons/admin/reports/all` | Get all reports | ✅ (Admin) |
| POST | `/lessons/admin/reports/:reportId/resolve` | Resolve report | ✅ (Admin) |
| DELETE | `/lessons/admin/reports/:lessonId/delete` | Delete reported lesson | ✅ (Admin) |

### Payment Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/stripe/create-checkout-session` | Create checkout session | ✅ |
| POST | `/stripe/verify-payment` | Verify payment | ✅ |
| GET | `/stripe/payment-status` | Check premium status | ✅ |
| POST | `/stripe/webhook` | Stripe webhook | ❌ |

### Admin Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/auth/admin/users` | List all users | ✅ (Admin) |
| POST | `/auth/admin/promote` | Promote user to admin | ✅ (Admin) |
| POST | `/auth/admin/delete-user` | Delete user | ✅ (Admin) |

---

## 🚀 Deployment

### Backend Deployment (Render)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to [Render](https://render.com)
   - Create new Web Service
   - Connect GitHub repository
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - Add Environment Variables from `.env`
   - Deploy

3. **Update Client**
   ```env
   VITE_API_BASE_URL=https://your-render-app.onrender.com/api
   ```

4. **Update Firebase & Stripe**
   - Add deployed domain to Firebase authorized domains
   - Update Stripe redirect URLs

### Frontend Deployment (Vercel)

1. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import GitHub repository
   - **Root Directory:** `client`
   - Add Environment Variables
   - Deploy

2. **Update Backend**
   - Add Vercel domain to CORS allowlist
   - Add to Firebase authorized domains

---

## 🐛 Troubleshooting

### CORS Errors
- Ensure `CLIENT_URL` in server `.env` matches your frontend URL
- Add domain to Firebase Auth authorized domains
- Update Stripe webhook domain

### 401 Unauthorized
- Check Firebase token is being sent in headers
- Verify token hasn't expired
- Check MongoDB connection
- Ensure user exists in database

### Stripe Webhook Not Working
- Ensure webhook secret is correct in `.env`
- Check ngrok is running (for local testing)
- Verify endpoint is receiving POST requests
- Check Stripe logs in dashboard

### MongoDB Connection Failed
- Check connection string format
- Add your IP to Atlas allowlist (0.0.0.0/0 for development)
- Verify username and password
- Confirm cluster region is correct

### Firebase Authentication Issues
- Verify Firebase credentials in `.env`
- Check if service account key is valid
- Ensure Firestore is enabled in Firebase project
- Check authorized domains in Firebase console

---

## 📝 Development Checklist

- [x] User authentication (Email + Google)
- [x] Lesson CRUD operations
- [x] Like/Comment/Favorite system
- [x] Search, filter, sort functionality
- [x] Premium upgrade with Stripe
- [x] Admin dashboard & moderation
- [x] Role-based access control
- [x] Responsive design
- [x] Error handling
- [x] Loading states
- [x] Toast notifications

---

## 🤝 Contributing

This is a learning project. Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Feedback

- 💬 **Issues:** Create a GitHub issue for bugs or feature requests
- 📧 **Contact:** For other inquiries, please reach out via GitHub
- 🐛 **Bug Reports:** Include error messages and steps to reproduce

---

**Made with ❤️ for knowledge sharing**

Last Updated: July 2, 2026  
Version: 1.0.0
