import { Location } from "../models/index.js";
import slugify from "../utils/slugify.js";

// =========================================
// Get All Locations
// =========================================
export const list = async (req, res, next) => {
  try {
    const locations = await Location.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({
      success: true,
      data: locations,
    });
  } catch (err) {
    next(err);
  }
};

// =========================================
// Get Location By ID (Admin)
// =========================================
export const getById = async (req, res, next) => {
  try {
    const location = await Location.findByPk(req.params.id);

    if (!location) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    res.status(200).json({
      success: true,
      data: location,
    });
  } catch (err) {
    next(err);
  }
};

// =========================================
// Get Location By Slug (Public)
// =========================================
export const getBySlug = async (req, res, next) => {
  try {
    const location = await Location.findOne({
      where: {
        slug: req.params.slug,
      },
    });

    if (!location) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    res.status(200).json({
      success: true,
      data: location,
    });
  } catch (err) {
    next(err);
  }
};

// =========================================
// Create Location
// =========================================
export const create = async (req, res, next) => {
  try {
    const heroImage = req.files?.heroImage?.[0];
    const aboutImage = req.files?.aboutImage?.[0];

    const location = await Location.create({
      title: req.body.title,
      city: req.body.city,
      description: req.body.description,
      service: req.body.service,
      about: req.body.about,

      seoTitle: req.body.seoTitle,
      seoDescription: req.body.seoDescription,
      keywords: req.body.keywords,

      slug: slugify(req.body.title),

      heroImage: heroImage ? `/uploads/${heroImage.filename}` : null,

      aboutImage: aboutImage ? `/uploads/${aboutImage.filename}` : null,
    });

    res.status(201).json({
      success: true,
      message: "Location created successfully",
      data: location,
    });
  } catch (err) {
    next(err);
  }
};

// =========================================
// Update Location
// =========================================
export const update = async (req, res, next) => {
  try {
    const location = await Location.findByPk(req.params.id);

    if (!location) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    const heroImage = req.files?.heroImage?.[0];
    const aboutImage = req.files?.aboutImage?.[0];

    const data = {
      title: req.body.title,
      city: req.body.city,
      description: req.body.description,
      service: req.body.service,
      about: req.body.about,

      seoTitle: req.body.seoTitle,
      seoDescription: req.body.seoDescription,
      keywords: req.body.keywords,
    };

    if (req.body.title) {
      data.slug = slugify(req.body.title);
    }

    if (heroImage) {
      data.heroImage = `/uploads/${heroImage.filename}`;
    }

    if (aboutImage) {
      data.aboutImage = `/uploads/${aboutImage.filename}`;
    }

    await location.update(data);

    res.status(200).json({
      success: true,
      message: "Location updated successfully",
      data: location,
    });
  } catch (err) {
    next(err);
  }
};

// =========================================
// Delete Location
// =========================================
export const remove = async (req, res, next) => {
  try {
    const location = await Location.findByPk(req.params.id);

    if (!location) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    await location.destroy();

    res.status(200).json({
      success: true,
      message: "Location deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
