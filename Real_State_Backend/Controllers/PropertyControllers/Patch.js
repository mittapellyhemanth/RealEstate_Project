const Property = require('../../model/property_schema')
let PatchController = {}

PatchController.patch = async (req,res)=>{
     const soldId = req.params.id;
    Property.findByIdAndUpdate({ _id: soldId }, { status: "sold", daysleft: 0 },{new:true}).then(result => {
        res.status(200).json({
            message: "This property has been sold",
            data : result
        })
    }).catch(err => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports = PatchController;


