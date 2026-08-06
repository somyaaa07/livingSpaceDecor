import sequelize from "../config/database.js";
import Project from "./Project.js";
import Admin from "./Admin.js";
import Blog from "./Blog.js";
import BlackListed from './BlackListedToken.js'
export { default as Location } from "./Location.js";

export {
    sequelize,
  Project,
  Admin,
  Blog,
  BlackListed
}