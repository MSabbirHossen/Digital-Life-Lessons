# Digital Life Lessons - Full Stack MERN Application

A comprehensive platform where users can create, share, and discover meaningful life lessons and personal growth insights. Built with React, Node.js, Express, MongoDB, Firebase, and Stripe.

🌐 **Live Demo**: [Coming Soon]

## 📋 Features

### Core Features

- ✅ User authentication (Email/Password + Google OAuth)
- ✅ Lesson CRUD operations (Create, Read, Update, Delete)
- ✅ Public/Private lesson visibility
- ✅ Free/Premium access levels
- ✅ Like, comment, and favorite lessons
- ✅ Search, filter, and sort lessons
- ✅ Stripe payment integration for Premium upgrades
- ✅ Lesson reporting system for moderation
- ✅ Admin dashboard for content moderation
- ✅ Role-based access control (Free User, Premium User, Admin)
- ✅ Responsive design (Mobile, Tablet, Desktop)

### Additional Features

- User profiles with contribution stats
- Favorites management
- Comment system with nested discussions
- Premium content protection with blur/lock UI
- Real-time UI updates
- Toast notifications (no alert())
- Loading states and error handling

## 🏗️ Project Structure

```
digital-life-lessons/
├── client/                     # React Frontend
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── context/          # React Context (Auth)
│   │   ├── services/         # API services (Axios)
│   │   ├── styles/           # Global CSS + Tailwind
│   │   ├── config/           # Firebase config
│   │   ├── App.jsx           # Main app with routing
│   │   └── main.jsx          # Entry point
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── index.html
│   └── .env.example
│
└── server/                     # Express Backend
    ├── src/
    │   ├── controllers/       # Business logic
    │   ├── routes/           # API routes
    │   ├── models/           # Mongoose schemas
    │   ├── middleware/       # Auth, error handling
    │   ├── config/           # Database, Firebase, env
    │   └── index.js          # Express app entry
    ├── package.json
    └── .env.example
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Firebase project
- Stripe account

### 1. Clone & Setup

```bash
# Navigate to project directory
cd digital-life-lessons

# Setup both folders
git init
git add .
git commit -m "Initial commit"
```

### 2. Backend Setup

```bash
cd server

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Edit .env with your credentials
# MONGODB_URI=mongodb+srv://...
# FIREBASE_PROJECT_ID=your_project_id
# STRIPE_SECRET_KEY=sk_test_...
```

**Start Backend:**

```bash
npm run dev
```

Server runs on http://localhost:5000

### 3. Frontend Setup

```bash
cd ../client

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your Firebase and API base URL
# VITE_API_BASE_URL=http://localhost:5000/api
# VITE_FIREBASE_API_KEY=your_api_key
```

**Start Frontend:**

```bash
npm run dev
```

Client runs on http://localhost:5173

## 🔐 Authentication Setup

### Firebase Configuration

1. **Create Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Click "Create Project"
   - Enable Firestore and Authentication

2. **Setup Authentication:**
   - Navigate to "Authentication" → "Sign-in method"
   - Enable "Email/Password" and "Google"
   - Add authorized redirect URI: `http://localhost:5173`

3. **Get Credentials:**
   - Project Settings → Service Account → Generate new private key
   - Download JSON file (for server .env)
   - Get Web SDK credentials (for client .env)

### Firebase Admin SDK

Create `/server/serviceAccountKey.json` or use environment variables:

```env
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your_service_account@your_project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your_client_id
```

## 💳 Stripe Setup

1. **Create Stripe Account:**
   - Go to [Stripe Dashboard](https://dashboard.stripe.com)
   - Create a test account

2. **Get Keys:**
   - API Keys section → Copy Publishable & Secret keys
   - Add to `.env` files

3. **Setup Webhook (for production):**
   - Create webhook endpoint on your server
   - Point to `/api/stripe/webhook`
   - Subscribe to `checkout.session.completed`

**Test Cards:**

- 4242 4242 4242 4242 (Success)
- 4000 0000 0000 9995 (Requires auth)

## 📊 Database Setup

### MongoDB Atlas

1. Create MongoDB Atlas account
2. Create a cluster
3. Add IP to allowlist (or allow all: 0.0.0.0/0)
4. Get connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/digital-life-lessons
   ```

**Collections Created Automatically:**

- `users` - User accounts and premium status
- `lessons` - Published lessons
- `comments` - Lesson comments
- `favorites` - User favorite lessons
- `lessonreports` - Reported inappropriate content

## 📚 API Documentation

### Authentication Endpoints

```
POST /api/auth/register      # Register new user
GET  /api/auth/me            # Get current user (Protected)
PUT  /api/auth/profile       # Update profile (Protected)
GET  /api/auth/user/:id      # Get public user profile
```

### Lessons Endpoints

```
GET  /api/lessons/public            # Get all public lessons
POST /api/lessons                   # Create lesson (Protected)
GET  /api/lessons/:id               # Get single lesson
PUT  /api/lessons/:id               # Update lesson (Protected)
DELETE /api/lessons/:id             # Delete lesson (Protected)
GET  /api/lessons/user/my-lessons   # Get user's lessons (Protected)
```

### Interactions Endpoints

```
POST /api/lessons/:id/like          # Like/unlike lesson (Protected)
POST /api/lessons/:id/comment       # Add comment (Protected)
DELETE /api/lessons/:id/comment/:commentId  # Delete comment (Protected)
```

### Favorites Endpoints

```
POST /api/lessons/favorites/add     # Add favorite (Protected)
POST /api/lessons/favorites/remove  # Remove favorite (Protected)
GET  /api/lessons/favorites/my-favorites  # Get user's favorites (Protected)
GET  /api/lessons/favorites/check/:lessonId  # Check if favorited (Protected)
```

### Reports Endpoints

```
POST /api/lessons/:id/report        # Report lesson (Protected)
GET  /api/lessons/admin/reports/all # Get all reports (Admin)
POST /api/lessons/admin/reports/:reportId/resolve # Resolve report (Admin)
DELETE /api/lessons/admin/reports/:lessonId/delete # Delete reported lesson (Admin)
```

### Stripe Endpoints

```
POST /api/stripe/create-checkout-session  # Create checkout (Protected)
POST /api/stripe/verify-payment           # Verify payment (Protected)
GET  /api/stripe/payment-status           # Check premium status (Protected)
POST /api/stripe/webhook                  # Stripe webhook
```

### Admin Endpoints

```
GET  /api/auth/admin/users              # List all users (Admin)
POST /api/auth/admin/promote            # Promote user to admin (Admin)
POST /api/auth/admin/delete-user        # Delete user (Admin)
```

## 🎨 UI Components

### Custom Hooks

- `useLessons()` - Manage lessons (CRUD, search, filter)
- `useFavorites()` - Manage favorites
- `useInteractions()` - Like, comment, report

### Components

- `PrivateRoute` - Route protection
- `AdminRoute` - Admin route protection
- `Navbar` - Navigation bar
- `Footer` - Footer component
- `LessonCard` - Lesson display card

## 🚀 Deployment

### Backend Deployment (Render)

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Render:**
   - Go to [Render](https://render.com)
   - Create new Web Service
   - Connect GitHub repository
   - Set Build Command: `npm install`
   - Set Start Command: `npm start`
   - Add Environment Variables (from .env)
   - Deploy

3. **Update Client .env:**

   ```
   VITE_API_BASE_URL=https://your-render-app.onrender.com/api
   ```

4. **Update Firebase:**
   - Add deployed domain to authorized domains
   - Update Stripe redirect URLs

### Frontend Deployment (Vercel)

1. **Deploy on Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Import GitHub repository
   - Set Root Directory: `client`
   - Add Environment Variables
   - Deploy

2. **Update Backend/Firebase:**
   - Add Vercel domain to CORS allowlist
   - Add to Firebase authorized domains

## 📝 Environment Variables

### Server (.env)

```env
# MongoDB
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db

# Firebase
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=key_id
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
FIREBASE_CLIENT_EMAIL=service@project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=client_id

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Client (.env)

```env
# Firebase
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=sender_id
VITE_FIREBASE_APP_ID=app_id

# API
VITE_API_BASE_URL=http://localhost:5000/api

# Stripe
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

## 🧪 Testing

### Test Accounts

**Stripe Test Cards:**

- Success: 4242 4242 4242 4242
- Decline: 4000 0000 0000 0002

**Test Users:**
Create accounts via registration page

## 📖 Tech Stack Details

- **Frontend:** React 18, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** Firebase Auth + Firebase Admin SDK
- **Payments:** Stripe API
- **State Management:** React Context API
- **HTTP Client:** Axios
- **Notifications:** React Toastify
- **Routing:** React Router v6

## 🐛 Troubleshooting

### CORS Errors

- Ensure `CLIENT_URL` in server .env matches your frontend URL
- Add domain to Firebase Auth authorized domains
- Update Stripe webhook domain

### 401 Unauthorized

- Check Firebase token is being sent
- Verify token hasn't expired
- Check MongoDB connection
- Ensure user exists in database

### Stripe Webhook Not Working

- Ensure webhook secret is correct
- Check ngrok is running (for local testing)
- Verify endpoint is receiving POST requests

### MongoDB Connection Failed

- Check connection string
- Add your IP to Atlas allowlist
- Verify username/password
- Check cluster region

## 📋 Requirements Checklist

- [x] User authentication (Email + Google)
- [x] Lesson CRUD operations
- [x] Like/Comment/Favorite system
- [x] Search, filter, sort
- [x] Premium upgrade with Stripe
- [x] Admin dashboard
- [x] Role-based access control
- [x] Responsive design
- [x] Error handling
- [x] Loading states
- [x] Toast notifications

## 🤝 Contributing

This is a learning project. Feel free to fork and extend!

## 📄 License

MIT License

## 📞 Support

For questions or issues, please create an issue in the repository.

---

**Made with ❤️ for knowledge sharing**
