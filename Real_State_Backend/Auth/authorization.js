const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
console.log("reached auth")
    try {

        const token = req.headers.authorization // It will look for token in headers
        const verify = jwt.verify(token, process.env.SECRET_KEY); // verify token
        req.id = verify.id   // store user ref id
        req.unique_id = verify.userid  // store user ref unique_id
        console.log("authentication sucess")
        next();
    }
    catch {
        res.status(400).json({
            message: "Authentication failed"
        }) // error
        console.log("authentication failed");
    }

}

module.exports = auth;