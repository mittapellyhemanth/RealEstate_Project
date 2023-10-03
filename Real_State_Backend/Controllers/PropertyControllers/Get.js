const Property = require("../../model/property_schema");
let GetController = {};

GetController.get = async (req, res) => {
  try {
    // console.log('Getting the properties')

    const page = (await parseInt(req.query.page)) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    await Property.find()
      .skip(skip)
      .limit(limit)
      .then((result) => {
        res.status(200).json({
          message: "Property details fetched successfully",
          data: result,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

module.exports = GetController;
