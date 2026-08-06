import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class BlackListedToken extends Model {}

BlackListedToken.init(
  {
    token: {
      type: DataTypes.STRING(500),
      allowNull: false,
      unique: "blacklisted_token_unique", // named index, not just `true`
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "BlackListedToken",
    tableName: "BlackListedToken",
    timestamps: true,
  },
);

export default BlackListedToken;
