// models/UpcomingProject.js

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const UpcomingProject = sequelize.define(
  "UpcomingProject",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    alt: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "upcoming_projects",
    timestamps: true,
  }
);

export default UpcomingProject;