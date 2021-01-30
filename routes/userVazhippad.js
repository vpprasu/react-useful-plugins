const express = require("express");
const router = express.Router();
const userVazhippadController = require("../controllers/userVazhippad")
router.post("/add", userVazhippadController.saveUserVazhippad)

router.get("/edit/:id", (req,res,next) => {
    res.json({})
})

router.put("/edit", (req,res,next) => {
    res.json({})
})

router.get("/list", userVazhippadController.getUserVazhippad)

router.delete("/delete/:id", (req,res,next) => {
    res.json({})
})

module.exports = router;