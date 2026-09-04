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

import upload from "../middleware/upload.js";

const router = express.Router();

/*
=========================================================
GET LATEST 4 PROJECTS
Home Page
IMPORTANT: /latest must come before /:id
=========================================================
*/
router.get("/latest", getLatestUpcomingProjects);

/*
=========================================================
GET ALL PROJECTS
Admin Panel
=========================================================
*/
router.get("/", getUpcomingProjects);

/*
=========================================================
GET SINGLE PROJECT
Details Page
=========================================================
*/
router.get("/:id", getUpcomingProjectById);

/*
=========================================================
CREATE UPCOMING PROJECT

image   → 1 MAIN IMAGE
gallery → 4-6 DETAIL IMAGES
=========================================================
*/
router.post(
  "/",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "gallery",
      maxCount: 6,
    },
  ]),
  createUpcomingProject,
);

/*
=========================================================
UPDATE UPCOMING PROJECT

image   → optional main image
gallery → optional 4-6 detail images
=========================================================
*/
router.put(
  "/:id",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "gallery",
      maxCount: 6,
    },
  ]),
  updateUpcomingProject,
);

/*
=========================================================
DELETE PROJECT
=========================================================
*/
router.delete("/:id", deleteUpcomingProject);

export default router;
