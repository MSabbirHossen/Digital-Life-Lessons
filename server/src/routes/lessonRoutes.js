import express from "express";
import * as lessonController from "../controllers/lessonController.js";
import * as favoriteController from "../controllers/favoriteController.js";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/public", lessonController.getPublicLessons);
router.get("/:id", lessonController.getLessonById);
router.get("/:id/comments", lessonController.getComments);

// Protected routes
router.post("/", verifyToken, lessonController.createLesson);
router.get("/user/my-lessons", verifyToken, lessonController.getUserLessons);
router.put("/:id", verifyToken, lessonController.updateLesson);
router.delete("/:id", verifyToken, lessonController.deleteLesson);
router.post("/:id/like", verifyToken, lessonController.toggleLike);
router.post("/:id/comment", verifyToken, lessonController.addComment);
router.delete(
  "/:id/comment/:commentId",
  verifyToken,
  lessonController.deleteComment,
);

// Favorites
router.post("/favorites/add", verifyToken, favoriteController.addFavorite);
router.post(
  "/favorites/remove",
  verifyToken,
  favoriteController.removeFavorite,
);
router.get(
  "/favorites/my-favorites",
  verifyToken,
  favoriteController.getUserFavorites,
);
router.get(
  "/favorites/check/:lessonId",
  verifyToken,
  favoriteController.isFavorited,
);

// Reports
router.post("/:id/report", verifyToken, favoriteController.reportLesson);
router.get(
  "/admin/reports/all",
  verifyToken,
  verifyAdmin,
  favoriteController.getAllReports,
);
router.post(
  "/admin/reports/:reportId/resolve",
  verifyToken,
  verifyAdmin,
  favoriteController.resolveReport,
);
router.delete(
  "/admin/reports/:lessonId/delete",
  verifyToken,
  verifyAdmin,
  favoriteController.deleteReportedLesson,
);

export default router;
