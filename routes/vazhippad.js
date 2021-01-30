const express = require("express");
const router = express.Router();
const vazhippadController = require("../controllers/vazhippad")

router.post("/add", vazhippadController.saveVazhippad)

router.get("/edit/:id", (req,res,next) => {
    res.json({})
})

router.put("/edit", (req,res,next) => {
    res.json({})
})

router.get("/list", vazhippadController.getVazhippad)

router.delete("/delete/:id", (req,res,next) => {
    res.json({})
})

module.exports = router;