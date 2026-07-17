import { Op } from "sequelize";
import {Blog,Admin} from "../models/index.js";
import makeSlug from "../utils/slugify.js";

//GET api/blogs -> grid listing
export const list = async(req,res,next)=>{
    try{
        const page = parseInt(req.query.page,10) || 1;
        const limit = parseInt(req.query.limit,10) || 9;

        const {category , tag , search}=req.query;

        const where = {isPublished:true};

        if (category){
            where.category = category
        }

     if (search) {
    where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { excerpt: { [Op.like]: `%${search}%` } },
    ];
}

        const { rows ,count } = await Blog.findAndCountAll({
            where,
            order :[[
                "publishedAt", "DESC",

            ],
            [
                "createdAt",
                "DESC"
            ]],
            limit,
            offset: (page-1)*limit,
            attributes:{exclude:["content"]}
        });

        let data = rows;

        if(tag){
            data = rows.filter((b) => (b.tags || []) . includes(tag))
        }
        return res.status(200).json({
            success:true,
            data,
            pagination:{
                total:count,
                page,
                pages:Math.ceil(count/limit),
                limit,   
            }
        })

    }
    catch(err){
        next(err)
    }
}


//through slug get blog
export const getBySlug = async(req,res,next) =>{
    try{
        const blog = await Blog.findOne({
            where:{
                slug:req.params.slug,
              isPublished: true
            }
        })

        if(!blog){
            return res.status(404).json({
                success:false,
                message:"Blog not found"
            })

        }

        return res.status(200).json({
            success:true,
            data:blog
        })
    }
    catch(err){
        next(err)
    }
}

// listed all the blog which have the admin 
export const listAdmin = async(req,res,next)=>{
    
    try{
        const page = parseInt(req.query.page,10) || 1;
        const limit = parseInt(req.query.limit,10) || 100 ;
        const {search} = req.query;

        const where = {}
if (search) {
    where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { excerpt: { [Op.like]: `%${search}%` } },
    ];
}

        const { rows ,count} = await Blog.findAndCountAll({
            where,
            order:[['createdAt','DESC']],
            limit,
            offset:(page-1)*limit,
            attributes:{exclude:['content']}
        })

        return res.status(200).json({
            success:true,
            data:rows,
            pagination:{
                total: count,
                page,
                pages:Math.ceil(count/limit),
                limit
            }
        })
    }
    catch(err){
        next(err);
    }
}

export const getById = async(req,res,next)=>{
    try{
        const blog = await Blog.findByPk(req.params.id);

        if(!blog){
            return res.status(404).json({
                success:false,
                message:'Blog not found'
            })
        }

        return res.status(200).json({
            success:true,
            data:blog
        })
    }
    catch(err){
        next(err);
    }
}

//post/blog

export const create = async(req,res,next)=>{
    try{
        const body = req.body;

        if(!body.title || !body.content || !body.coverImage){
            return res.status(400).json({
                success:false,
                message:'Please provide all required fields'
            })
        }

        let slug = makeSlug(body.title);

        const exisiting = await Blog.findOne({where:{slug}});

        // if the slug is same with the other blog slug then we'll add the current time to the slug
        if(exisiting){
            slug = `${slug}-${Date.now()}`;
        }
  let author = body.author;
        if (!author && req.admin?.id) {
            const admin = await Admin.findByPk(req.admin.id, {
                attributes: ['name', 'username']
            });
            author = admin?.name || admin?.username || null;
        }

        const blog = await Blog.create({
            ...body,
             author,
            slug,
            publishedAt : body.publishedAt || new Date()
        });

        return res.status(200).json({
            success:true,
            data:blog
        })
    }
    catch(err){
        next(err);
    }
}

//put /blog/:id

export const update = async(req,res,next)=>{
    try{
        const blog = await Blog.findByPk(req.params.id);

        if(!blog){
            return res.status(404).json({
                success:false,
                message:'Blog not found'
            })
        }

        const body = req.body;

        if(body.title && body.title !== blog.title){
            let slug = makeSlug(body.title);

            const exisiting = await Blog.findOne({
                where:{
                    slug,
                    id:{
                        [Op.ne]:blog.id
                    }
                }
            });

            if(exisiting){
                slug = `${slug}-${Date.now()}`
            }
            
            body.slug = slug;

        }

        await blog.update(body);

        return res.status(200).json({
            success:true,
            data:blog
        })
    }
    catch(err){
        next(err);
    }
}

export const remove = async(req,res,next)=>{
    try{
        const blog = await Blog.findByPk(req.params.id);

        if(!blog){
            return res.status(404).json({
                success:false,
                message:'Blog not found'
            })
        }

        await blog.destroy();

        return res.status(200).json({
            success:true,
            message:'Blog deleted successfully'
        })
    }
    catch(err){
        next(err);
    }
}