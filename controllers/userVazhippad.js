const UserVazhippad = require("../models/userVazhippad")

exports.saveUserVazhippad = (req,res,next) => {
    const {name, vazhippad, date} = req.body;
    UserVazhippad.create({
        name : name,
        vazhippad : vazhippad,
        date : date
    }).then(result => {
        res.json({message : "User Vazhippad has created successfully"})
    }).
    catch(error => {
        res.staus(500).json({message : "Something went wrong !!"})
    })
}

exports.getUserVazhippad = (req,res,next) =>{
    res.json({result : [{
        name : "prasobh", vazhippad : "Pushppanjali", date : "01/01/2008"
    }]})
    // UserVazhippad.findAll({offet : 0, limit : 10}).then(result => {
    //     res.json({result : result})
    // }).catch(error => {
    //     res.status(500).json({message : 'Something went wrong !!'})
    // })
}
