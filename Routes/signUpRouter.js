import express from "express"
import bcrypt from "bcrypt"
import { User } from "../model/userModel.js"
const router=express.Router()

router.post("/",async(req,res)=>{

    try {
        let user=await User.findOne({email:req.body.email})

        if(user) return res.status(409).json({message:"Email already exist"})
    
        const salt=await bcrypt.genSalt(10);
    
        const hashPassword=await bcrypt.hash(req.body.password,salt);
    
         user=await new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hashPassword
         }).save()
    
         res.status(200).json({message:"SignedUp Successfully"})   
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"internal server error"})  
    }
    
})


export const signupRouter = router;