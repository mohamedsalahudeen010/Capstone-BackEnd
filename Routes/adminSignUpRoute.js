import express from "express"
import bcrypt from "bcrypt"
import { Admin } from "../model/adminModel.js"

const router=express.Router()

router.post("/",async(req,res)=>{

    try {
        let admin=await Admin.findOne({email:req.body.email})

        if(admin) return res.status(409).json({message:"Email already exist"})
    
        const salt=await bcrypt.genSalt(10);
    
        const hashPassword=await bcrypt.hash(req.body.password,salt);
    
         admin=await new Admin({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hashPassword
         }).save()
    
         res.status(200).json({message:"Admin SignedUp Successfully"})   
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})  
    }
    
})


export const adminSignupRouter = router;