import { UpcomingProject } from "../models/index.js";

/* =========================================================
   CREATE UPCOMING PROJECT
========================================================= */
export const createUpcomingProject = async (req, res) => {
  try {
    const { title, alt } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Project title is required",
      });
    }

    let image = null;

    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    const project = await UpcomingProject.create({
      title,
      alt: alt || title,
      image,
    });

    return res.status(201).json({
      success: true,
      message: "Upcoming project created successfully",
      project,
    });
  } catch (error) {
    console.error("Create upcoming project error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create upcoming project",
      error: error.message,
    });
  }
};

/* =========================================================
   GET ALL UPCOMING PROJECTS
   Used in Admin Panel
========================================================= */
export const getUpcomingProjects = async (req, res) => {
  try {
    const projects = await UpcomingProject.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    console.error("Get upcoming projects error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch upcoming projects",
      error: error.message,
    });
  }
};

/* =========================================================
   GET LATEST 4 UPCOMING PROJECTS
   Used on Home Page
========================================================= */
export const getLatestUpcomingProjects = async (req, res) => {
  try {
    const projects = await UpcomingProject.findAll({
      order: [["createdAt", "DESC"]],
      limit: 4,
    });

    return res.status(200).json({
      success: true,
      projects,
    });
  } catch (error) {
    console.error("Get latest upcoming projects error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch latest upcoming projects",
      error: error.message,
    });
  }
};

/* =========================================================
   GET SINGLE UPCOMING PROJECT
========================================================= */
export const getUpcomingProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await UpcomingProject.findByPk(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Upcoming project not found",
      });
    }

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    console.error("Get upcoming project error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch upcoming project",
      error: error.message,
    });
  }
};

/* =========================================================
   UPDATE UPCOMING PROJECT
========================================================= */
export const updateUpcomingProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, alt } = req.body;

    const project = await UpcomingProject.findByPk(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Upcoming project not found",
      });
    }

    const updateData = {
      title: title || project.title,
      alt: alt || project.alt,
    };

    // Update image only when a new image is uploaded
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    await project.update(updateData);

    return res.status(200).json({
      success: true,
      message: "Upcoming project updated successfully",
      project,
    });
  } catch (error) {
    console.error("Update upcoming project error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update upcoming project",
      error: error.message,
    });
  }
};

/* =========================================================
   DELETE UPCOMING PROJECT
========================================================= */
export const deleteUpcomingProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await UpcomingProject.findByPk(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Upcoming project not found",
      });
    }

    await project.destroy();

    return res.status(200).json({
      success: true,
      message: "Upcoming project deleted successfully",
    });
  } catch (error) {
    console.error("Delete upcoming project error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete upcoming project",
      error: error.message,
    });
  }
};
