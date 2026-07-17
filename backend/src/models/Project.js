import { DataTypes, Model } from "sequelize";
import  sequelize  from '../config/database.js'

class Project extends Model { }

Project.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING(180),
        allowNull: false,
        unique: true
    },
    type: {
        type: DataTypes.STRING(150),
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING(150),
        allowNull: true,
    },
    area: {
        type: DataTypes.STRING(150),
        allowNull: true,
    },
    bhk: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    style: {
        type: DataTypes.STRING(80),
        allowNull: true,
    },
    year: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },

    duration: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    image:{
       type:DataTypes.STRING(255),
       allowNull:true,
       field:'images'
    },
gallery: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
    get() {
        const raw = this.getDataValue('gallery');
        if (Array.isArray(raw)) return raw;
        if (typeof raw === 'string') {
            try { return JSON.parse(raw); } catch { return []; }
        }
        return raw || [];
    }
},
highlights: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
    get() {
        const raw = this.getDataValue('highlights');
        if (Array.isArray(raw)) return raw;
        if (typeof raw === 'string') {
            try { return JSON.parse(raw); } catch { return []; }
        }
        return raw || [];
    }
},
    clientQuoteText:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    clientQuoteAuthor:{
        type:DataTypes.STRING(150),
        allowNull:true
    },
    clientQuoteTitle:{
        type:DataTypes.STRING(150),
        allowNull:true
    },
    isPublished:{
        type:DataTypes.BOOLEAN,
        // allowNull:true,
        defaultValue:true
    }
},
{
    sequelize,
    modelName:'Project',
    tableName:'project',
    timestamps:true
})

export default Project;