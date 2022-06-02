const jwt = require("jsonwebtoken")

module.exports.generateToken = (payload) => {
    return jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_DURATION})
}

module.exports.verifyToken = (token, callback) => {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) console.log(err)
        callback(user)
    })
}