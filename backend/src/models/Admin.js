import { DataTypes , Model } from "sequelize";
import sequelize  from '../config/database.js'

class Admin extends Model {}

Admin.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    username:{
        type:DataTypes.STRING(80),
        allowNull:false,
        unique:true
    },
    passwordHash:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    name:{
        type:DataTypes.STRING(120),
        allowNull:true
    }
},{
    sequelize,
    modelName:'Admin',
    tableName:'admin',
    timestamps:true
})

export default Admin;
