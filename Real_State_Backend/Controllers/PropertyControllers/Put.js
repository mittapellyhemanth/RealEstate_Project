const Property = require('../../model/property_schema')
let PutController = {}


PutController.put = async (req,res)=>{
    // console.log("update")
    try {
        const propertyId = req.params.id; // would look into param for data
        let updatedData = req.body;
        if(req.file){
         updatedData.image = req.file.filename
        }
        const updateStatus = await Property.findByIdAndUpdate(propertyId, updatedData, { new: true });
        if (!updateStatus) {
            res.status(400).json({
                message: "No such Id found"
            })
        }
        res.status(200).json(updateStatus) // would return updated data
        console.log(updateStatus)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "internal server error"
        })
    }
}


module.exports = PutController