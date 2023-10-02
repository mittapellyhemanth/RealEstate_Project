const mongoose = require("mongoose");
const User = require('./user')

const propertySchema = mongoose.Schema({
   user: { type: mongoose.Schema.Types.ObjectId, ref: User },
  unique_id: {
    type: String, required: true
  },
  ppdid: {
    type: String
  },
  views: {
    type: String
  },
  daysleft: {
    type: String
  },
  status: {
    type: String
  },
  property_type: {
    type: String, required: true
  },
  price: {
    type: String, required: true
  },
  property_age: {
    type: String, required: true
  },
  property_description: {
    type: String
  },
  negotiable: {
    type: String
  },
  ownerShip: {
    type: String, required: true
  },
  property_approved: {
    type: String
  },
  bank_loan: {
    type: String, required: true
  },
  length: {
    type: String
  },
  breath: {
    type: String
  },
  area: {
    type: String
  },
  area_unit: {
    type: String
  },
  bhk: {
    type: String
  },
  floor: {
    type: String
  },
  attached: {
    type: String
  },
  western: {
    type: String
  },
  furnished: {
    type: String, required: true
  },
  parking: {
    type: String
  },
  lift: {
    type: String
  },
  electricity: {
    type: String
  },
  facing: {
    type: String, required: true
  },
  owner_name: {
    type: String, required: true
  },
  mobile: {
    type: String
  },
  postedby: {
    type: String
  },
  saletype: {
    type: String
  },
  featured: {
    type: String
  },
  ppdpackage: {
    type: String
  },
  image: {
    type: String
  },
  email: {
    type: String, required: true
  },
  city: {
    type: String, required: true
  },
  addressarea: {
    type: String
  },
  pincode: {
    type: String, required: true
  },
  address: {
    type: String, required: true
  },
  landmark: {
    type: String
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  }
})

const propertyModel = mongoose.model("Property", propertySchema);
module.exports = propertyModel;