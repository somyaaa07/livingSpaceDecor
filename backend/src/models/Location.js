import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Location = sequelize.define(
  "Location",
  {
    title: DataTypes.STRING,

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },

    city: DataTypes.STRING,

    description: DataTypes.TEXT,

    service: DataTypes.STRING,

    about: DataTypes.TEXT,

    heroImage: {
      type: DataTypes.STRING,
      field: "hero_image",
    },

    aboutImage: {
      type: DataTypes.STRING,
      field: "about_image",
    },

    seoTitle: {
      type: DataTypes.STRING,
      field: "seo_title",
    },

    seoDescription: {
      type: DataTypes.TEXT,
      field: "seo_description",
    },

    keywords: DataTypes.TEXT,
  },
  {
    tableName: "locations",

    underscored: true,
  },
);

export default Location;
