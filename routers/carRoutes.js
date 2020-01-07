const express = require("express");
const router = express.Router();
const db = require("../data/db");

router.get("/", (req,res) => {
  try {

  }catch(error) {
     next(error);
  }
});

router.post("/", (req,res) => {
   try {

   } catch(error) {
       next(error); 
   }
})

module.exports = router;