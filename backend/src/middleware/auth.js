import jwt from 'jsonwebtoken';
import  BlackListed  from '../models/BlackListedToken.js';

export const protect = async(req,res,next)=>{
    try{
        const authHeader = req.headers.authorization || "";
        const token = authHeader.startsWith("Bearer") ? authHeader.split(" ")[1]:null;

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Not authorized , no token"
            })
        }

        const blackListed = await BlackListed.findOne({where :{token}});
        if(blackListed){
            return res.status(401).json({
                success:false,
                message:"Session ended . Please Login again"
            })
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.admin=decoded
        next();
    }

    catch(err){
        return res.status(401).json({
            success:false,
            message:"Session failed please log in again"
        })
    }
}