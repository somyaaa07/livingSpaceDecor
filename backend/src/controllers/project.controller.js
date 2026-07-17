import { Op } from "sequelize";
import { Project } from "../models/index.js";
import makeSlug from '../utils/slugify.js';

function toClientShape(row) {
    const p = row.toJSON ? row.toJSON() : row;

    return {
        id: p.id,
        name: p.name,
        slug: p.slug,
        type: p.type,
        location: p.location,
        area: p.area,
        bhk: p.bhk,
        style: p.style,
        year: p.year,
         description: p.description,
        duration: p.duration,
        image: p.image,
        gallery: p.gallery || [],
        highlights: p.highlights || [],
        clientQuote: p.clientQuoteText ? {
            text: p.clientQuoteText,
            author: p.clientQuoteAuthor,
            title: p.clientQuoteTitle
        }
            : null,
        isPublished: p.isPublished,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt

    }
}

export const list = async (req, res,next) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 12;

        const { type, search, style } = req.query;

        const where = {
            isPublished: true
        }

        if (type) {
            where.type = type;
        }

        if (style) {
            where.style = style;
        }

        if (search) {
            where[Op.or] = [
                {
                    name: {
                        [Op.like]: `%${search}%`
                    }
                },
                {
                    location: {
                        [Op.like]: `%${search}%`
                    }
                }
            ]
        }

        const { rows, count } = await Project.findAndCountAll({
            where,
            order: [['createdAt', 'DESC']],
            limit,
            offset: (page - 1) * limit,

        })

        return res.status(200).json({
            success: true,
            data: rows.map(toClientShape),
            pagination: {
                total: count,
                page,
                pages: Math.ceil(count / limit),
                limit
            }
        })
    }
    catch (err) {
        next(err)
    }
}

//get /api/slug

export const getBySlug = async (req, res, next) => {
    try {
        const project = await Project.findOne({
            where: {
                slug: req.params.slug,
                isPublished: true
            }
        });

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "project not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: toClientShape(project)
        })
    }
    catch (err) {
        next(err)
    }
}

// get /api/admin/projects

export const listAdmin = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 100;

        const { search } = req.query;

        const where = {}

        if (search) {
          where[Op.or] = [
    { name: { [Op.like]: `%${search}%` } },
    { location: { [Op.like]: `%${search}%` } },
]
        }

        const { rows, count } = await Project.findAndCountAll({
            where,
            offset: (page - 1) * limit,
            limit,
            order: [['createdAt', 'DESC']]
        })

        return res.status(200).json({
            success: true,
            data: rows.map(toClientShape),
            pagination: {
                total: count,
                page,
                pages: Math.ceil(count / limit),
                limit
            }
        })
    }
    catch (err) {
        next(err)
    }
}

export const getById = async (req, res, next) => {
    try {
        const project = await Project.findByPk(req.params.id)

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: toClientShape(project)
        })
    }
    catch (err) {
        next(err)
    }
}

export const create = async (req, res, next) => {
    try {
        const body = req.body;

        if (!body.name || !body.image) {
            return res.status(400).json({
                success: false,
                message: "Name and Image are required"
            })
        }

        let slug = makeSlug(body.name)

        const existing = await Project.findOne({
            where: { slug }
        })

        if (existing) {
            slug = `${slug}-${Date.now()}`
        }

        const project = await Project.create({
            name: body.name,
            slug,
            type: body.type,
            location: body.location,
            area: body.area,
            bhk: body.bhk,
            style: body.style,
            year: body.year,
            duration: body.duration,
            description: body.description,
            image: body.image,
            gallery: body.gallery || [],
            highlights: body.highlights || [],
            clientQuoteText: body.clientQuote?.text,
            clientQuoteAuthor: body.clientQuote?.author,
            clientQuoteTitle: body.clientQuote?.title,
            isPublished:
                body.isPublished !== undefined ? body.isPublished : true
        })

        return res.status(200).json({
            success: true,
            data: toClientShape(project)
        })
    }
    catch (err) {
        next(err)
    }
}

//get/:id
export const update = async (req, res, next) => {
    try {
        const project = await Project.findByPk(req.params.id)

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            })
        }

        const body = req.body

        if (body.name && body.name !== project.name) {
            let slug = makeSlug(body.name)

            const exisiting = await Project.findOne({
                where: {
                    slug,
                    id: {
                        [Op.ne]: project.id
                    },
                },
            });

            if (exisiting) {
                slug = `${slug}-${Date.now()}`
            }

            body.slug = slug
        }

        if (body.clientQuote) {
            body.clientQuoteText = body.clientQuote.text
            body.clientQuoteAuthor = body.clientQuote.author
            body.clientQuoteTitle = body.clientQuote.title
        }

        await project.update(body)

        return res.status(200).json({
            success:true,
            data:toClientShape(project)
        });

    }

    catch(err){
        next(err)
    }
}

export const remove = async (req,res,next)=>{
    try{
        const project = await Project.findByPk(req.params.id);

        if(!project){
            return res.status(404).json({
                success:false,
                message:"Project not found"
            })
        }

        await project.destroy();

        return res.status(200).json({
            success:true,
            message:"Projected deleted successfully"
        })
    }
    catch(err){
        next(err)
    }
}