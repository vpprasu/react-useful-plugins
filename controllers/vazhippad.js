const Vazhippad = require("../models/vazhippad")

exports.saveVazhippad = (req,res,next) => {
    const {name, price} = req.body;
    Vazhippad.create({
        name : name,
        price : price
    }).then(result => {
        res.json({message : "Vazhippad has created successfully"})
    }).catch(error => {
        res.staus(500).json({message : "Something went wrong !!"})
    })
}

exports.getVazhippad = (req,res,next) => {
    res.json({result : [{
        name : "Pushppanjali", price : 4
    }]})
    // Vazhippad.findAll({offset : 0, limit : 10}).then(result => {
    //     res.json({result : result})
    // }).catch(error => {
    //     res.json({message : "Something went wrong !!"})
    // })
}