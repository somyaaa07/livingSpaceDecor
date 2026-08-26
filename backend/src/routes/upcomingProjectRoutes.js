// routes/upcomingProjectRoutes.js

import express from "express";
import {
  createUpcomingProject,
  getUpcomingProjects,
  getLatestUpcomingProjects,
  getUpcomingProjectById,
  updateUpcomingProject,
  deleteUpcomingProject,
} from "../controllers/upcomingProjectController.js";

// Apne existing multer upload middleware ka path use karo
import upload from "../middleware/upload.js";

const router = express.Router();

/*
  IMPORTANT:
  /latest route ko /:id se PEHLE likhna hai,
  warna Express "latest" ko id samajh sakta hai.
*/

// GET latest 4 projects - Home Page
router.get("/latest", getLatestUpcomingProjects);

// GET all projects - Admin Panel
router.get("/", getUpcomingProjects);

// GET single project
router.get("/:id", getUpcomingProjectById);

// CREATE project
router.post("/", upload.single("image"), createUpcomingProject);

// UPDATE project
router.put("/:id", upload.single("image"), updateUpcomingProject);

// DELETE project
router.delete("/:id", deleteUpcomingProject);

export default router;