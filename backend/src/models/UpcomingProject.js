import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class UpcomingProject extends Model {}

UpcomingProject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    // PROJECT TITLE
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    // PROJECT DESCRIPTION
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // IMAGE ALT TEXT
    alt: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    // MAIN IMAGE
    // This image will appear on Home Page
    // and also on the Detail Page
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    // ADDITIONAL DETAIL PAGE IMAGES
    // Example:
    // [
    //   "/uploads/project-1.jpg",
    //   "/uploads/project-2.jpg",
    //   "/uploads/project-3.jpg",
    //   "/uploads/project-4.jpg"
    // ]
    gallery: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],

      get() {
        const raw = this.getDataValue("gallery");

        if (Array.isArray(raw)) {
          return raw;
        }

        if (typeof raw === "string") {
          try {
            return JSON.parse(raw);
          } catch {
            return [];
          }
        }

        return raw || [];
      },
    },
  },
  {
    sequelize,
    modelName: "UpcomingProject",
    tableName: "upcoming_projects",
    timestamps: true,
  },
);

export default UpcomingProject;
