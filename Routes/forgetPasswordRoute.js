import express from "express"

import nodeMailer from "nodemailer"
import { User } from "../model/userModel.js"



const router=express.Router();


router.post("/",async(req,res)=>{
    console.log(req.body)
    try {
        const user=await User.findOne({email:req.body.email})

        if(!user){
            return res.status(400).json({message:"Enter Valid Email"});
        }

        let sender=nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user:"commercialtosala10@gmail.com",
            password:"vwudolescfvgixmm"
        }
        })

        let composeMail={
            from:"commercialtosala10@gmail.com",
            to:`${user.email}`,
            sub:"New Password",
            text:`${user.password}`
        }

        sender.sendMail(composeMail,function(error,info){
            if(error){console.log(error)}
            else{console.log("mail sent Successfully",info.response)}
        })
        res.status(200).json(
            {message:"mail sent successfully"})

    } catch (error) {
        console.log("error: ",error)
        res.status(500).json(
            {message:"Internal Server Error"})
    }
})


export const forgetPasswordRouter=router