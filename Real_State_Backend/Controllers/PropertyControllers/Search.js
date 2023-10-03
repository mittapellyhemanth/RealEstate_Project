
const Property = require('../../model/property_schema');

let SearchController = {}

SearchController.search = async (req,res)=>{
    try {
        // console.log('getProperty')
        const id =await req.params.id.toUpperCase();
    await Property.findOne({ ppdid: id }).then(result => {
            if (result) {
                res.status(200).json({
                    data: result
                })
            } else {
                res.status(400).json({
                    message: "Id not Found"
                })
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error!!",
            Err: err
        })
    }

}

module.exports = SearchController