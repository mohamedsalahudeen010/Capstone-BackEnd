import express from "express"
import { Gold } from "../model/goldDataModel.js";

const router=express.Router();


router.post("/",async(req,res)=>{
    try {

        let gold=await Gold.findOne({date:req.body.date})
        if(gold){
           return res.status(406).json({message:"data Already exist"})
        }
         gold=await new Gold({
            date:req.body.date,
            currency:req.body.currency,
            price24k:req.body.price_gram_24k,   
            price22k:req.body.price_gram_22k,   
            price21k:req.body.price_gram_21k,   
            price20k:req.body.price_gram_20k,   
            price18k:req.body.price_gram_18k,   
            stockPrice:req.body.stockPrice, 
            time:req.body.time,
            metalCode:req.body.metalCode,
            currencyCode:req.body.currencyCode,
            prevPrice:req.body.prevPrice,
            ch:req.body.ch,
            chp:req.body.chp,
            exchange:req.body.exchange,
        }).save()
        if(!gold){
            res.status(404).json("error while adding data");
        }
        res.status(200).json({message:"data added Successfully"});
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
})


router.get("/",async(req,res)=>{
    try {
       const sortedData=await Gold.find({}).sort({date:1})
       if (!sortedData) {
        res.status(400).json({ message: "can't get the data" });
      }
      res.status(200).json({message:"get history successfully",sortedData});
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  })
export const goldRouter=router