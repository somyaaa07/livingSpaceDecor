import { DataTypes , Model } from "sequelize";
import sequelize  from '../config/database.js';

class Blog extends Model {}

Blog.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
       type:DataTypes.STRING(200),
       allowNull:false
    },
    slug:{
        type:DataTypes.STRING(220),
        allowNull:false,
        unique:true
    },
    excerpt:{
        type:DataTypes.STRING(200),
        allowNull:true
    },
    content:{
        type:DataTypes.TEXT("long"),
        allowNull:false
    },
    coverImage:{
        type:DataTypes.STRING(200),
        allowNull:false
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
    author:{
        type:DataTypes.STRING(100),
        allowNull:true
    },
    category:{
        type:DataTypes.STRING(120),
        allowNull:true
    },
 tags: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
    get() {
        const raw = this.getDataValue('tags');
        if (Array.isArray(raw)) return raw;
        if (typeof raw === 'string') {
            try { return JSON.parse(raw); } catch { return []; }
        }
        return raw || [];
    }
},

    readtime:{
        type:DataTypes.STRING(20),
        allowNull:true
    },
    isPublished:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
            defaultValue: false

    },
    publishedAt:{
        type:DataTypes.DATE,
        allowNull:true
    }
},{
    sequelize,
    modelName:"Blog",
    tableName:'blog',
    timestamps:true
})

export default Blog;