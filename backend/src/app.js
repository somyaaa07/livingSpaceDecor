import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import projectRoutes from "./routes/project.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import locationRoutes from "./routes/location.routes.js";
import sendQuoteRoute from "./routes/sendQuote.js";
import upcomingProjectRoutes from "./routes/upcomingProjectRoutes.js";


import { errorHandler, notFound } from "./middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://livingspacedecor.in"],
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(
  "/admin",
  express.static(path.join(__dirname, "..", "public", "admin"))
);

app.use("/api/health", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

app.use("/api/project", projectRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/location", locationRoutes);
app.use("/api", sendQuoteRoute);
app.use("/api/upcoming-projects", upcomingProjectRoutes);


app.use(notFound);
app.use(errorHandler);

export default app;