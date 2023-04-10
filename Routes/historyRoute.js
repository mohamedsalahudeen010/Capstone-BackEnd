import express from "express"
import { History } from "../model/historyModel.js"

const router=express.Router()


router.post("/",async(req,res)=>{
    try {
        const history=await new History({
            name:req.body.name,
            date:req.body.date,
            currency:req.body.currency,
            price24k:req.body.price_gram_24k,   
            price22k:req.body.price_gram_22k,   
            price21k:req.body.price_gram_21k,   
            price20k:req.body.price_gram_20k,   
            price18k:req.body.price_gram_18k,   
            stackPrice:req.body.price 
        }).save()
        res.status(200).json("History added Successfully");
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
})

router.get("/",async(req,res)=>{
    try {
       const storedHistory=await History.find({})
       if (!storedHistory) {
        res.status(400).json({ message: "can't get the data" });
      }
      res.status(200).json({message:"get history successfully",storedHistory});
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  })



  router.delete("/:id",async(req,res)=>{
    try {
        const deleteContent=await History.findByIdAndDelete(
            {_id:req.params.id},
        )   
        if(!deleteContent){return res.status(400).json({message:"Couldn'nt delete your content"})}
        return res.status(200).json({message:"Deleted Successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }

    
})





export const historyRoute=router