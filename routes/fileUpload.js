const express = require("express")
const router = express.Router();
const path = require("path");
router.use("/", (req,res,next) => {
    let basePath = path.join(__dirname,"..");
    if(req.files == null){
        res.status(400).json({
            msg : "Sorry, No files are uploaded"
        })
    }
        let {file} = req.files;
        file.mv(`${basePath}/uploads/${file.name}`, err => {
            if(err)
            return res.status(500).json({
                msg : "Sorry, Something went wrong"
            })
            
            res.json({fileName : file.name, filePath : `http://localhost:5000/${file.name}`})
        })
    
})

module.exports = router;