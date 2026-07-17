import express from 'express';
import upload from '../middleware/upload.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
router.post("/", protect, upload.array("images", 15), (req, res) => {
  const files = (req.files || []).map((f) => `/uploads/${f.filename}`);
  res.status(201).json({ success: true, data: files });
});

export default router;