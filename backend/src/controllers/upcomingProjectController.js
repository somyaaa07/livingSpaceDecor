// import { UpcomingProject } from "../models/index.js";

// /* =========================================================
//    HELPER
// ========================================================= */

// const getFilePath = (file) => {
//   if (!file) return null;

//   return `/uploads/${file.filename}`;
// };

// /* =========================================================
//    CREATE UPCOMING PROJECT
//    Main Image + 4-6 Gallery Images
// ========================================================= */
// export const createUpcomingProject = async (req, res) => {
//   try {
//     const { title, description, alt } = req.body;

//     // -----------------------------------------
//     // VALIDATE TITLE
//     // -----------------------------------------
//     if (!title || !title.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Project title is required",
//       });
//     }

//     // -----------------------------------------
//     // MAIN IMAGE
//     // -----------------------------------------
//     const mainImage =
//       req.files?.image?.length > 0 ? getFilePath(req.files.image[0]) : null;

//     // Main image is required
//     if (!mainImage) {
//       return res.status(400).json({
//         success: false,
//         message: "Main project image is required",
//       });
//     }

//     // -----------------------------------------
//     // GALLERY IMAGES
//     // -----------------------------------------
//     const galleryFiles = req.files?.gallery || [];

//     // Gallery must contain 4-6 images
//     if (galleryFiles.length < 4) {
//       return res.status(400).json({
//         success: false,
//         message: "Please upload at least 4 gallery images",
//       });
//     }

//     if (galleryFiles.length > 6) {
//       return res.status(400).json({
//         success: false,
//         message: "You can upload maximum 6 gallery images",
//       });
//     }

//     const gallery = galleryFiles.map((file) => getFilePath(file));

//     // -----------------------------------------
//     // CREATE PROJECT
//     // -----------------------------------------
//     const project = await UpcomingProject.create({
//       title: title.trim(),

//       description:
//         description && description.trim() ? description.trim() : null,

//       alt: alt && alt.trim() ? alt.trim() : title.trim(),

//       // MAIN IMAGE
//       image: mainImage,

//       // ADDITIONAL IMAGES
//       gallery,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Upcoming project created successfully",
//       project,
//     });
//   } catch (error) {
//     console.error("Create upcoming project error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to create upcoming project",
//       error: error.message,
//     });
//   }
// };

// /* =========================================================
//    GET ALL UPCOMING PROJECTS
//    Used in Admin Panel
// ========================================================= */
// export const getUpcomingProjects = async (req, res) => {
//   try {
//     const projects = await UpcomingProject.findAll({
//       order: [["createdAt", "DESC"]],
//     });

//     return res.status(200).json({
//       success: true,
//       projects,
//     });
//   } catch (error) {
//     console.error("Get upcoming projects error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch upcoming projects",
//       error: error.message,
//     });
//   }
// };

// /* =========================================================
//    GET LATEST 4 UPCOMING PROJECTS
//    Used on Home Page
// ========================================================= */
// export const getLatestUpcomingProjects = async (req, res) => {
//   try {
//     const projects = await UpcomingProject.findAll({
//       order: [["createdAt", "DESC"]],
//       limit: 4,
//     });

//     return res.status(200).json({
//       success: true,
//       projects,
//     });
//   } catch (error) {
//     console.error("Get latest upcoming projects error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch latest upcoming projects",
//       error: error.message,
//     });
//   }
// };

// /* =========================================================
//    GET SINGLE UPCOMING PROJECT
//    Used in Detail Page
// ========================================================= */
// export const getUpcomingProjectById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const project = await UpcomingProject.findByPk(id);

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Upcoming project not found",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       project,
//     });
//   } catch (error) {
//     console.error("Get upcoming project error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch upcoming project",
//       error: error.message,
//     });
//   }
// };

// /* =========================================================
//    UPDATE UPCOMING PROJECT
//    Main Image + Gallery Images
// ========================================================= */
// export const updateUpcomingProject = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, alt } = req.body;

//     // -----------------------------------------
//     // FIND PROJECT
//     // -----------------------------------------
//     const project = await UpcomingProject.findByPk(id);

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Upcoming project not found",
//       });
//     }

//     // -----------------------------------------
//     // BASIC DATA
//     // -----------------------------------------
//     const updateData = {
//       title: title !== undefined && title.trim() ? title.trim() : project.title,

//       description:
//         description !== undefined
//           ? description.trim() || null
//           : project.description,

//       alt: alt !== undefined && alt.trim() ? alt.trim() : project.alt,
//     };

//     // -----------------------------------------
//     // MAIN IMAGE
//     // Only update if new image uploaded
//     // -----------------------------------------
//     if (req.files?.image?.length > 0) {
//       updateData.image = getFilePath(req.files.image[0]);
//     }

//     // -----------------------------------------
//     // GALLERY
//     // Only update if new gallery images uploaded
//     // -----------------------------------------
//     const galleryFiles = req.files?.gallery || [];

//     if (galleryFiles.length > 0) {
//       // Gallery must contain 4-6 images
//       if (galleryFiles.length < 4) {
//         return res.status(400).json({
//           success: false,
//           message: "Please upload at least 4 gallery images",
//         });
//       }

//       if (galleryFiles.length > 6) {
//         return res.status(400).json({
//           success: false,
//           message: "You can upload maximum 6 gallery images",
//         });
//       }

//       updateData.gallery = galleryFiles.map((file) => getFilePath(file));
//     }

//     // -----------------------------------------
//     // UPDATE
//     // -----------------------------------------
//     await project.update(updateData);

//     return res.status(200).json({
//       success: true,
//       message: "Upcoming project updated successfully",
//       project,
//     });
//   } catch (error) {
//     console.error("Update upcoming project error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to update upcoming project",
//       error: error.message,
//     });
//   }
// };

// /* =========================================================
//    DELETE UPCOMING PROJECT
// ========================================================= */
// export const deleteUpcomingProject = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const project = await UpcomingProject.findByPk(id);

//     if (!project) {
//       return res.status(404).json({
//         success: false,
//         message: "Upcoming project not found",
//       });
//     }

//     await project.destroy();

//     return res.status(200).json({
//       success: true,
//       message: "Upcoming project deleted successfully",
//     });
//   } catch (error) {
//     console.error("Delete upcoming project error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete upcoming project",
//       error: error.message,
//     });
//   }
// };

// New Controller Code

import { UpcomingProject } from "../models/index.js";

/* =========================================================
   CONSTANTS
========================================================= */

const MAX_GALLERY_IMAGES = 50;

/* =========================================================
   HELPER
========================================================= */

const getFilePath = (file) => {
  if (!file) return null;

  return `/uploads/${file.filename}`;
};

/* =========================================================
   CREATE UPCOMING PROJECT
   Main Image + 1-50 Gallery Images
========================================================= */

export const createUpcomingProject = async (req, res) => {
  try {
    const { title, description, alt } = req.body;

    // -----------------------------------------
    // VALIDATE TITLE
    // -----------------------------------------

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Project title is required",
      });
    }

    // -----------------------------------------
    // MAIN IMAGE
    // -----------------------------------------

    const mainImage =
      req.files?.image?.length > 0 ? getFilePath(req.files.image[0]) : null;

    if (!mainImage) {
      return res.status(400).json({
        success: false,
        message: "Main project image is required",
      });
    }

    // -----------------------------------------
    // GALLERY IMAGES
    // -----------------------------------------

    const galleryFiles = req.files?.gallery || [];

    // At least 1 gallery image
    if (galleryFiles.length < 1) {
      return res.status(400).json({
        success: false,
        message: "Please upload at least 1 gallery image",
      });
    }

    // Maximum 50 gallery images
    if (galleryFiles.length > MAX_GALLERY_IMAGES) {
      return res.status(400).json({
        success: false,
        message: "You can upload maximum 50 gallery images",
      });
    }

    const gallery = galleryFiles.map((file) => getFilePath(file));

    // -----------------------------------------
    // CREATE PROJECT
    // -----------------------------------------

    const project = await UpcomingProject.create({
      title: title.trim(),

      description:
        description && description.trim() ? description.trim() : null,

      alt: alt && alt.trim() ? alt.trim() : title.trim(),

      // MAIN IMAGE
      image: mainImage,

      // GALLERY IMAGES
      gallery,
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
   Used in Detail Page
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

   Main Image → optional
   Gallery    → optional 1-50 images

   IMPORTANT:
   If no gallery is uploaded,
   existing gallery remains unchanged.

   If new gallery is uploaded,
   existing gallery is replaced.
========================================================= */

export const updateUpcomingProject = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, description, alt } = req.body;

    // -----------------------------------------
    // FIND PROJECT
    // -----------------------------------------

    const project = await UpcomingProject.findByPk(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Upcoming project not found",
      });
    }

    // -----------------------------------------
    // BASIC DATA
    // -----------------------------------------

    const updateData = {
      title: title !== undefined && title.trim() ? title.trim() : project.title,

      description:
        description !== undefined
          ? description.trim() || null
          : project.description,

      alt: alt !== undefined && alt.trim() ? alt.trim() : project.alt,
    };

    // -----------------------------------------
    // MAIN IMAGE
    // Only update if new image uploaded
    // -----------------------------------------

    if (req.files?.image?.length > 0) {
      updateData.image = getFilePath(req.files.image[0]);
    }

    // -----------------------------------------
    // GALLERY
    // -----------------------------------------

    const galleryFiles = req.files?.gallery || [];

    /*
      IMPORTANT:

      If galleryFiles.length === 0
      → keep existing gallery.

      If galleryFiles.length > 0
      → replace existing gallery.
      */

    if (galleryFiles.length > 0) {
      // Maximum 50
      if (galleryFiles.length > MAX_GALLERY_IMAGES) {
        return res.status(400).json({
          success: false,
          message: "You can upload maximum 50 gallery images",
        });
      }

      updateData.gallery = galleryFiles.map((file) => getFilePath(file));
    }

    // -----------------------------------------
    // UPDATE DATABASE
    // -----------------------------------------

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
    });
  }
};
