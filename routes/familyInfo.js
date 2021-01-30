const express = require("express");
const router = express.Router();
const familyInfoController = require("../controllers/familyInfo")

router.post("/add", familyInfoController.saveFamilyInfo)

router.get("/edit/:id", (req,res,next) => {
    res.json({})
})

router.put("/edit", (req,res,next) => {
    res.json({})
})

router.get("/list", familyInfoController.getFamilyInfo)

router.delete("/delete/:id", (req,res,next) => {
    res.json({})
})

module.exports = router;