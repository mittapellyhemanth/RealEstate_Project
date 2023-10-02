const Property = require('../../model/property_schema')
let DeleteController = {}

DeleteController.delete = async (req,res)=>{
    Property.deleteOne({ _id: req.params.id }).then(response => {
        if (response.deletedCount) {
            res.status(200).json({
                message: "Deleted Successfully",
                data: response
            })
        } else {
            res.status(400).json({
                message: "Id not found"
            })
        }
    }).catch(err => {
        res.status(500).json({
            message: "Internal server error.."
        })
    })
}

module.exports = DeleteController