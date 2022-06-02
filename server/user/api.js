const bcrypt = require("bcrypt")

module.exports = class API {

    constructor(db, grpc) {
        this.db = db;
        this.grpc = grpc
    }

    signup(_, callback) {
        const users = this.db.collection("users")

        bcrypt.hash(_.request.getPassword(), 10, (error, hash) => {
            let user = { name: _.request.getName, email: _.request.getEmail, gender: _.request.getGender, password: hash, }
            users.insertOne(user).then(result => {
                let resp = new messages
            })
        })
    }
}