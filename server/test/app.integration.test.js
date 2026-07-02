import { beforeAll, describe, expect, it, vi } from "vitest";
import request from "supertest";

vi.mock("../src/config/config.js", () => ({
  config: {
    port: 5000,
    nodeEnv: "test",
    mongodbUri: "mongodb://127.0.0.1:27017/test",
    mongodbDbName: "test",
    clientUrl: "http://localhost:5173",
    adminEmail: "admin@example.com",
    primaryClientUrl: "http://localhost:5173",
    firebase: {},
    stripe: {
      secretKey: "sk_test",
      webhookSecret: "whsec_test",
      publicKey: "pk_test",
    },
  },
}));

vi.mock("../src/config/database.js", () => ({
  connectDB: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("../src/middleware/authMiddleware.js", () => ({
  verifyToken: (req, res, next) => next(),
  optionalVerifyToken: (req, res, next) => next(),
  verifyAdmin: (req, res, next) => next(),
}));

vi.mock("../src/controllers/authController.js", () => ({
  registerUser: (req, res) =>
    res.status(201).json({ success: true, user: { id: "u1" } }),
  getCurrentUser: (req, res) => res.json({ success: true, user: { id: "u1" } }),
  updateUserProfile: (req, res) => res.json({ success: true, updated: true }),
  getUserById: (req, res) =>
    res.json({ success: true, user: { id: req.params.id } }),
  getAllUsers: (req, res) => res.json({ success: true, users: [] }),
  getAdminAnalytics: (req, res) => res.json({ success: true, analytics: {} }),
  promoteToAdmin: (req, res) => res.json({ success: true }),
  deleteUser: (req, res) => res.json({ success: true }),
  assignRole: (req, res) => res.json({ success: true }),
  togglePremium: (req, res) => res.json({ success: true }),
  setSpecialBadge: (req, res) => res.json({ success: true }),
}));

vi.mock("../src/controllers/lessonController.js", () => ({
  getPublicLessons: (req, res) =>
    res.json({
      success: true,
      lessons: [{ _id: "l1", title: "Public lesson" }],
    }),
  getFeaturedLessons: (req, res) => res.json({ success: true, lessons: [] }),
  getTopSavedLessons: (req, res) => res.json({ success: true, lessons: [] }),
  getTopContributorsOfWeek: (req, res) =>
    res.json({ success: true, users: [] }),
  getUserLessons: (req, res) => res.json({ success: true, lessons: [] }),
  getAdminLessons: (req, res) => res.json({ success: true, lessons: [] }),
  toggleFeaturedLesson: (req, res) => res.json({ success: true }),
  createLesson: (req, res) => res.status(201).json({ success: true }),
  getLessonById: (req, res) =>
    res.json({ success: true, lesson: { _id: req.params.id } }),
  getComments: (req, res) => res.json({ success: true, comments: [] }),
  updateLesson: (req, res) => res.json({ success: true }),
  deleteLesson: (req, res) => res.json({ success: true }),
  toggleLike: (req, res) => res.json({ success: true, liked: true }),
  addComment: (req, res) => res.status(201).json({ success: true }),
  deleteComment: (req, res) => res.json({ success: true }),
  getSimilarLessons: (req, res) => res.json({ success: true, lessons: [] }),
}));

vi.mock("../src/controllers/favoriteController.js", () => ({
  getUserFavorites: (req, res) => res.json({ success: true, favorites: [] }),
  isFavorited: (req, res) => res.json({ success: true, favorited: false }),
  addFavorite: (req, res) => res.status(201).json({ success: true }),
  removeFavorite: (req, res) => res.json({ success: true }),
  getAllReports: (req, res) => res.json({ success: true, reports: [] }),
  resolveReport: (req, res) => res.json({ success: true }),
  deleteReportedLesson: (req, res) => res.json({ success: true }),
  reportLesson: (req, res) => res.status(201).json({ success: true }),
}));

vi.mock("../src/controllers/stripeController.js", () => ({
  createCheckoutSession: (req, res) =>
    res.json({
      success: true,
      sessionId: "sess_1",
      url: "https://checkout.test",
    }),
  verifyPayment: (req, res) => res.json({ success: true, paid: true }),
  getPaymentStatus: (req, res) => res.json({ success: true, paid: false }),
  handleStripeWebhook: (req, res) => res.json({ received: true }),
}));

let app;

beforeAll(async () => {
  process.env.VERCEL = "1";
  ({ default: app } = await import("../src/index.js"));
});

describe("Express integration wiring", () => {
  it("serves the API health endpoint", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("serves public lessons without auth", async () => {
    const res = await request(app).get("/api/lessons/public");
    expect(res.status).toBe(200);
    expect(res.body.lessons).toHaveLength(1);
  });

  it("returns a route not found response for unknown routes", async () => {
    const res = await request(app).get("/api/does-not-exist");
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });
});
