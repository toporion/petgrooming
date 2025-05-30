const verifyrole=(...allowedRoles)=>{
    return (req,res,next)=>{
        if(!req.user || !allowedRoles.includes(req.user.role)){
            return res.status(403).json({ message: 'Forbidden: You do not have access' });
        }
        next();
    }
}
module.exports=verifyrole;