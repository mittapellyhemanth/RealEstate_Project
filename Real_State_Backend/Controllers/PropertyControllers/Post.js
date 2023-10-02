const Property = require('../../model/property_schema')

let PostController = {}

PostController.post = async(req,res)=>{
    try{
        // console.log("reached post")
        let newppdid = 0; // it will store digit of last inserted of ppd_id
        let ppd_id; 
    
        // This function will return the last document inserted into the DB
        const existingProperty = await Property.findOne({}, {}, { sort: { _id: -1 } }, function (err, post) {
            return post;
        });
    
    
        if (existingProperty !== null) {
    
            for (let i = 3; i < existingProperty.ppdid.length; i++) {
                // Running loop to store ppdid of last added property to db 
                newppdid += existingProperty.ppdid[i];
    
            }
            ppd_id = "PPD" + (parseInt(newppdid) + 1);  // increment for new insert
    
        } else {
            ppd_id = "PPD" + 1000; // if there is no any previous  property in DB
        }
    
        const data = req.body;  // need to provide data in body
    
        const views = parseInt(Math.random() * 30);
        const daysleft = parseInt(Math.random() * 40);
        const propertyData = new Property({                 //add new property
    
            user: req.id,                  // get id from token passed during authen
            unique_id: req.unique_id,     // get id from token auth
            ppdid: ppd_id,
            views: views,
            daysleft: daysleft,
            status: "unsold",
    
            image: req.file.filename,    // coming from multer
            property_type: data.property_type,
            price: data.price,
            property_age: data.property_age,
            property_description: data.property_description,
    
            negotiable: data.negotiable,
            ownerShip: data.ownerShip,
            property_approved: data.property_approved,
            bank_loan: data.bank_loan,
            length: data.length,
            breath: data.breath,
            area: data.area,
    
            area_unit: data.area_unit,
            bhk: data.bhk,
            floor: data.floor,
            attached: data.attached,
            western: data.western,
            furnished: data.furnished,
            parking: data.parking,
    
            lift: data.lift,
            electricity: data.electricity,
            facing: data.facing,
            owner_name: data.owner_name,
            mobile: data.mobile,
            postedby: data.postedby,
            saletype: data.saletype,
    
            featured: data.featured,
            ppdpackage: data.ppdpackage,
            email: data.email,
            city: data.city,
            addressarea: data.addressarea,
            pincode: data.pincode,
    
            address: data.address,
            landmark: data.landmark,
            longitude: data.longitude,
            latitude: data.latitude
        })
    
        propertyData.save()
            res.status(200).json({
                message: "data saved sucessfully"
            })
    }
       catch(err){
        res.status(500).json({
            message: "unable to save data",
            // detail: err   //this line to be used to check error
        })
        console.log(err);
       }
    
}



module.exports = PostController