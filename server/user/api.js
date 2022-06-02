const bcrypt = require("bcrypt")
const auth = require("./auth")
const messages = require("./proto/user_pb")
// const objectId = require("mongodb").ObjectId

module.exports = class API {
    db = null

    constructor(db, grpc) {
       
        // console.log("Constructing...", grpc)
        this.db = db;
        this.grpc = grpc
    }

    signup = (_, callback)=> {
        
        const users = this.db.collection("users")

        bcrypt.hash(_.request.getPassword(), 10, (error, hash) => {
            console.log("REQUEST:", _.request)
            let user = { name: _.request.getName(), email: _.request.getEmail(), gender: _.request.getGender(), password: hash, }
            users.insertOne(user).then(result => {
                let resp = new messages.UserResponse()
                resp.setId(user._id.toString())
                resp.setName(user.name)
                resp.setEmail(user.email)
                resp.setToken(auth.generateToken(user))
                callback(null, resp)
            })
        })
    }

    login = (_, callback) => {
        const users = this.db.collection("users");
        users.findOne({ email: _.request.getEmail() }).then(user => {
            if (user) 
                bcrypt.compare(_.request.getPassword(), user.password, (err, result) => {
                    if (result) {
                        let resp = new messages.UserResponse()
                        resp.setId(user._id.toString())
                        resp.setName(user.name)
                        resp.setEmail(user.email)
                        resp.setToken(auth.generateToken(user))
                        callback(null, resp)
                    }
                })
            else return callback({
                code: this.grpc.status.UNAUTHORIZED,
                message: "No user found"
            })
            
        })
    }
}