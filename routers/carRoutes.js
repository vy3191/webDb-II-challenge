const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
   res.json({msg:'working now'})
});

router.post("/", (req,res) => {
   
})

module.exports = router;