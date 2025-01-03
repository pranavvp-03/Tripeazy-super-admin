const jwt = require("jsonwebtoken");
// const Role = require("../model/role");
const Role= require("../model/role")
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Verify Token Middleware
exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        console.log("no token provided");
        
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach decoded user to request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

exports.authorize = (requiredPermissions) =>{
    return async (req,res,next)=>{
        try {
            const role = await Role.findOne({roleName: req.user.role});
            if(!role){
                return res.status(403).json({message:"Role not found"})
            }

            const userPermission = role.permissions;

            const hashPermission = requiredPermissions.every((required)=>
            userPermission.some((permission)=>
                permission.tabName === required.tabName &&
                permission.actions.includes(required.actions)
            )
        )
        if(!hashPermission){
            return res.status(403).json({message:"Access denied. Insufficient permissions."})
        }
        next();
        } catch (error) {
            console.log("error in authorize middleware",error.message);
            res.status(500).json({message:"Failed to authorize user",error:error.message})
            
        }
    }

}
