const express = require("express");
const propertyRouter = express.Router();
const Property = require("../model/property_schema");
const auth = require('../Auth/authorization');



//  Giving path and file name  for newly added file in multer
const mongoose = require("mongoose");
const crypto = require("crypto");
const path = require("path");
const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");
const Grid = require("gridfs-stream");


require('dotenv').config()
const URL = process.env.DB_URL

 mongoose.connect(URL,{
useNewUrlParser:true,
useUnifiedToPology:true
  })

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
let gfs, gridfsBucket;
db.once("open", () => {
  console.log("db connected");
  gridfsBucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: process.env.BUCKET_NAME,
  });

  gfs = Grid(db, mongoose.mongo);
  gfs.collection(process.env.BUCKET_NAME);
});
const storage = new GridFsStorage({
  url: URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: process.env.BUCKET_NAME,
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });


////To get property list on home page frontend
 const GetController = require('../Controllers/PropertyControllers/Get') 
    propertyRouter.get("/getproperty",auth,GetController.get )

//Get API for search

// propertyRouter.get("/v1/getproperty/:id",auth,async (req,res)=>{

//     try {
//         console.log('getProperty')
//         const id =await req.params.id.toUpperCase();
    
    
//        await Property.findOne({ ppdid: id }).then(result => {
//             if (result) {
//                 res.status(200).json({
//                     data: result
//                 })
//             } else {
//                 res.status(400).json({
//                     message: "Id not Found"
//                 })
//             }
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "Internal server error!!",
//             Err: err
//         })
//     }

 
// })
const SearchController = require('../Controllers/PropertyControllers/Search');
propertyRouter.get("/v1/getproperty/:id",auth,SearchController.search)

///post API to Add New Property

//......................  POST METHOD ............................

const PostController = require('../Controllers/PropertyControllers/Post');
propertyRouter.post("/addproperty", auth, upload.single("propertyimage"),PostController.post);

// router to download and display images
propertyRouter.get("/images/:filename", (req, res) => {
    const filename = req.params.filename.toString();
    gfs.files.findOne({ filename: filename }, (err, file) => {
      if (!file || file.length === 0) {
        return res.status(404).json({
          error: err + "No files exist",
        });
      }
      //  return res.json(file)
      if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
      } else {
        return res.status(404).json({
          err: "No image exists",
        });
      }
    });
  });
  



///API called when sold button pressed
//......................  PUT METHOD ............................
const PutController = require('../Controllers/PropertyControllers/Put');
propertyRouter.put("/v1/updateproperty/:id",upload.single("propertyimage"),PutController.put);


//......................  PATCH METHOD ............................
const PatchController = require('../Controllers/PropertyControllers/Patch');
propertyRouter.patch("/v1/sold/:id", auth,PatchController.patch)


 //......................  DELETE METHOD ............................
const DeleteController = require('../Controllers/PropertyControllers/Delete');
propertyRouter.delete("/v1/:id",DeleteController.delete)

module.exports = propertyRouter;
