const express = require("express")
const router = express.Router();
const path = require("path");
router.post("/", (req,res,next) => {
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
    
});

router.post("/multi", async (req,res,next) => {
    let basePath = path.join(__dirname,"..");
    if(req.files.allFiles == null){
        res.status(400).json({
            msg : "Sorry, No files are uploaded"
        })
    }
        let {allFiles} = req.files;
        let output = [];
        let cnt = 0;
        let promise = await Promise.all(
                allFiles.map(async (file) => {
                    let timestamp = new Date().getTime().toString();
                     return new Promise((resolve, reject) => {
                        file.mv(`${basePath}/uploads/${file.name}`, err => {
                            if(err)
                                resolve ({result : {message : `Sorry, Something went wrong on filename :- '${file.name}' upload`}});
                            resolve ({result : {fileName : file.name, filePath : `http://localhost:5000/${file.name}`}});
                            
                        })
                    })
                }
            )
        
        );
        res.status(200).json(promise)
                            
})

module.exports = router;