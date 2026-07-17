export const notFound = (req,res,next)=>{
    res.status(404).json({
        success:false,
        message:`Page not found ${req.originalUrl}`
    });
};

export const errorHandler = (err,req,res,next)=>{
    console.log(err);

    const status = err.statusCode || 500;

    res.status(status).json({
        success:false,
        message:err.message || 'Internal Server Error'
    })
}