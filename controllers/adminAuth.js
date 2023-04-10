import jwt from "jsonwebtoken";
import { Admin } from "../model/adminModel.js";


const isSignedInAdmin = async(req, res, next) => {
   let token; 
   if (req.headers){
   try {
        token = req.headers["x-auth-token"]; 
        const decode = jwt.verify(token, process.env.ADMIN_SECRET_CODE); 
        console.log(decode)
        req.user = await Admin.findById(decode.id).select("-password")
        
        next();
        
      }
    catch (error) {
     return res.status(401).json({message: "Invalid Authorization"})
   }
}
if(!token) return res.status(400).json({message:"Access denied"})

}

export {isSignedInAdmin}