const express = require("express");
const router = express.Router();
const db = require("../data/db");

router.get("/", async (req,res) => {
  try {
    res.status(200).json(await db("cars").select());
  }catch(error) {
     next(error);
  }
});

router.post("/", async (req,res) => {
   try {
     const body = {
       vin:req.body.vin,
       make:req.body.make,
       model:req.body.model,
       mileage:req.body.mileage,
       transmission:req.body.transmission,
       title:req.body.title
     }
     if(!req.body.vin) res.status(400).json({msg:`Vin number is missing`});
     if(!req.body.make) res.status(400).json({msg:`cars make is missing`});
     if(!req.body.model) res.status(400).json({msg:`model  is missing`});
     if(!req.body.transmission) res.status(400).json({msg:`transmission is missing`});
     if(!req.body.title) res.status(400).json({msg:`title number is missing`});
     const [ids] = await db("cars").insert(body);
     const newCar = await db("cars").where({id: ids}).first();
     res.status(201).json(newCar);
   } catch(error) {
       next(error); 
   }
})

module.exports = router;