import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  Admin  from '../models/Admin.js';
import BlackListedToken from '../models/BlackListedToken.js';

//post /api/v1/auth/login
export const login = async(req,res,next)=>{
    try{
        const {username,password}=req.body;

        if(!username || !password){
            return res.status(400).json({
                success:false,
                message:"please provide username and password"
            })
        }

const admin = await Admin.findOne({ where: { username } });
        if(!admin){
            return res.status(400).json({
                success:false,
                message:"Invalid username or password"
            })
        }

        const valid = await bcrypt.compare(password,admin.passwordHash);
        if(!valid){
            return res.status(400).json({
                success:false,
                message:"Password Might be wrong kindly recheck it "
            })
        }

        const token = jwt.sign({
            id:admin.id,
            username:admin.username,
            },
            process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_EXPIRES_IN || '7d'
        })

        return res.status(200).json({
            success:true,
            message:"Login Successful",
            data:{token,admin:{id:admin.id,username:admin.username,name:admin.name}}
        })
    }
    catch(err){
    next(err);
    }
}

//get /api/v1/auth/me
export const getMe = async (req,res,next)=>{
    try{
        const admin = await Admin.findByPk(req.admin.id ,{
            attributes:['id','username','name']
        })

        if(!admin){
            return res.status(400).json({
                success:false,
                message:"Admin not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Admin Found"
        })
    }
    catch(err){
        next(err);
    }
}

//put /api/v1/auth/changePassword
export const changePassword = async (req,res,next)=>{
    try{
    const {currentPassword,newPassword} = req.body;

    if(!currentPassword || !newPassword){
        return res.status(400).json({
            success:false,
            message:"Neccessary to fill the new and current password"
        })
    }

    if(newPassword.length < 8){
        return res.status(400).json({
            success:false,
            message:"password must be at least 8 characters"
        })
    }
    const admin = await Admin.findByPk(req.admin.id)

    const valid = await bcrypt.compare(currentPassword,admin.passwordHash);

    if(!valid){
        return res.status(400).json({
            success:false,
            message:"Current Password is incorrect"
        })
    }

    admin.passwordHash = await bcrypt.hash(newPassword,10);
    await admin.save();

    return res.status(200).json({
        success:true,
        message:"Password changes successfully"
    })
    }
    catch(err){
        next(err)
    }

}

export const logout = async(req,res,next)=>{
    try{

        const authHeader = req.header.authorization;

        if(!authHeader?.startsWith("Bearer")){
            return res.status(401).json({
                success:false,
                message:"No token provided"
            })
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        await BlackListedToken.create({
            token,
            expiresAt:new Date(decoded.exp * 1000)
        })

        return res.status(200).json({
            success:true,
            message:"Logout successfully"
        })
    }
    catch(err){
        next(err);
    }
}