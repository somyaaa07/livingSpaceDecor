import express from "express";
import { protect } from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import * as ctrl from "../controllers/location.controller.js";

const router = express.Router();

// Public
router.get("/", ctrl.list);

// Admin
router.get("/id/:id", protect, ctrl.getById);

// Public
router.get("/:slug", ctrl.getBySlug);

// Create
router.post(
  "/",
  protect,
  upload.fields([
    { name: "heroImage", maxCount: 1 },
    { name: "aboutImage", maxCount: 1 },
  ]),
  ctrl.create
);

// Update
router.put(
  "/:id",
  protect,
  upload.fields([
    { name: "heroImage", maxCount: 1 },
    { name: "aboutImage", maxCount: 1 },
  ]),
  ctrl.update
);

// Delete
router.delete("/:id", protect, ctrl.remove);

export default router;