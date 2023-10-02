const express = require("express");
const User = require("../model/user");
const userRouter = express.Router();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require('dotenv').config();


userRouter.post("/v1/register",async (req, res) => {
    let newUserID ; 
    // 
    let previousUserID =0; // it will store digit of last inserted of ppd_id

    // would give last registred user
    const lastUserID = await User.findOne({}, {}, { sort: { _id: -1 } }, function (err, userID) {
        return userID;
    });
    
    if(lastUserID != null){
          for(let i=5 ;i<lastUserID.unique_id.length ;i++){
            previousUserID+=lastUserID.unique_id[i]
          }
          newUserID = "06PPD" +(parseInt(previousUserID) +1)
          
    }else{
        newUserID = "06PPD100";
    }

    const { email, password } = req.body;
    bcrypt.hash(password, 10).then(hashPass => { // encrypting password  times with bcrypt
       
        const userData = new User({
            email,
            password: hashPass,
            unique_id : newUserID
        })
       
        // saving email and encrypted password to DB
        userData.save().then(result => {
            res.status(200).json({
                message: "User Created successfully!!",
                data: result,
            })
        }).catch(err => {
            // handle error if email is not found unique
            res.status(400).json({
                message: "Email already exist!!",
                errDesc: err
            })
        })
    }).catch(err => {
        res.status(500).json({
            message: "Internal Server Error!!"
        })
    })

})


userRouter.post("/v1/login", async (req, res) => {
    let newUserID ; 
    // 
    let previousUserID =0; // it will store digit of last inserted of ppd_id

    // would give last registred user
    const lastUserID = await User.findOne({}, {}, { sort: { _id: -1 } }, function (err, userID) {
        return userID;
    });
    
    if(lastUserID != null){
          for(let i=5 ;i<lastUserID.unique_id.length ;i++){
            previousUserID+=lastUserID.unique_id[i]
          }
          newUserID = "06PPD" +(parseInt(previousUserID) +1)
          
    }else{
        newUserID = "06PPD100";
    }
    const loginCred = req.body;
    User.findOne({ email: loginCred.email }).then(user => {
        if (user) {  // will give response from DB

            // if user found then it will encrypt password and compare with DB password 
            bcrypt.compare(loginCred.password, user.password).then(response => {
                if (response) {  // password is correct then create web token
                    const jwtToken = jwt.sign({
                        email: user.email,
                        id: user._id,
                        userid:user.unique_id  // pssing unique id to token
                    },
                        process.env.SECRET_KEY, {
                        expiresIn: "24h"
                    })
                    res.status(200).json({
                        message : "Login credential matched!!",
                        Token : jwtToken,
                        name: user.email.split("@")[0],
                        email: user.email,
                        userId : newUserID
                    })
                } else {
                    res.status(400).json({
                        message: "Email or password does not match!!"
                    })
                }
            })
        } else {
            res.status(400).json({
                message: "Email is not registered with us.."
            })
        }
    }).catch(err => {
        res.status(500).json({
            message: "Internal server Error!!"
        })
    })
})

module.exports = userRouter;
