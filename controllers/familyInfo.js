const FamilyInfo = require("../models/familyInfo")

exports.saveFamilyInfo = (req,res,next) => {
    const {name, address} = req.body;
    FamilyInfo.create({
        name : name,
        address : address
    }).then(result => {
        res.json({message : "Family Info created successfully"})
    }).catch(error => {
        res.staus(500).json({message : "Something went wrong !!"})
    })
}

exports.getFamilyInfo = (req,res,next) => {
    res.json({result : [{
        name : "Prasobh", address : "Vadakkepurakkel House"
    }]})
    // FamilyInfo.findAll({offset : 0, limit : 10}).then(result => {
    //     res.json({result : result})
    // }).catch(error => {
    //     res.json({message : "Something went wrong !!"})
    // })
}