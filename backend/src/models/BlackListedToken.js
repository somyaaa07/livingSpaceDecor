import { DataTypes,Model } from "sequelize";
import sequelize from '../config/database.js';

class BlackListedToken extends Model {}

BlackListedToken.init({
    token:{
        type:DataTypes.TEXT,
        allowNull:false,
        unique:true
    },
    expriesAt:{
        type:DataTypes.DATE,
        allowNull:false
    }

},
{
    sequelize,
    modelName:'BlackListedToken',
    tableName:'BlackListedToken',
    timestamps:true
})

export default BlackListedToken;