import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute, AdminRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./styles/index.css";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicLessons from "./pages/PublicLessons";
import Dashboard from "./pages/Dashboard";
import AddLesson from "./pages/AddLesson";
import NotFound from "./pages/NotFound";
import {
  LessonDetails,
  MyLessons,
  UpdateLesson,
  MyFavorites,
  UserProfile,
  Pricing,
  PaymentSuccess,
  PaymentCancel,
  AdminDashboard,
  ManageUsers,
  ManageLessons,
  ReportedLessons,
  AdminProfile,
} from "./pages/stubs";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/lessons" element={<PublicLessons />} />
              <Route path="/lessons/:id" element={<LessonDetails />} />

              {/* Private Routes */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/add-lesson"
                element={
                  <PrivateRoute>
                    <AddLesson />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/my-lessons"
                element={
                  <PrivateRoute>
                    <MyLessons />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/update-lesson/:id"
                element={
                  <PrivateRoute>
                    <UpdateLesson />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/my-favorites"
                element={
                  <PrivateRoute>
                    <MyFavorites />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/profile"
                element={
                  <PrivateRoute>
                    <UserProfile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/pricing"
                element={
                  <PrivateRoute>
                    <Pricing />
                  </PrivateRoute>
                }
              />
              <Route
                path="/payment/success"
                element={
                  <PrivateRoute>
                    <PaymentSuccess />
                  </PrivateRoute>
                }
              />
              <Route
                path="/payment/cancel"
                element={
                  <PrivateRoute>
                    <PaymentCancel />
                  </PrivateRoute>
                }
              />

              {/* Admin Routes */}
              <Route
                path="/dashboard/admin"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/admin/manage-users"
                element={
                  <AdminRoute>
                    <ManageUsers />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/admin/manage-lessons"
                element={
                  <AdminRoute>
                    <ManageLessons />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/admin/reported-lessons"
                element={
                  <AdminRoute>
                    <ReportedLessons />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/admin/profile"
                element={
                  <AdminRoute>
                    <AdminProfile />
                  </AdminRoute>
                }
              />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
