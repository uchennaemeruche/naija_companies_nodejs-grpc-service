require("dotenv").config()
const messages = require("./proto/user_pb")
const services = require("./proto/user_grpc_pb")
const grpc = require("@grpc/grpc-js")

function main() {
    const client = new services.UserServiceClient(`${process.env.HOST}:${process.env.PORT}`, grpc.credentials.createInsecure())

    // let signupReq = new messages.SignupReq()

    const newUser = {
    name: "Uchenna",
    email: "uche@uche.com",
    password: "uche",
    gender: "MALE"
}

    // console.log("SINGUP REQ", signupReq)
    // signupReq.setName("Uchenna")
    // signupReq.setEmail("uche@uche.com")
    // signupReq.setPassword("uche")

    // console.log("SINGUP REQ 2", signupReq)
    client.signup(newUser, (err, res) => {
        if (err) {
            console.log("ERR"), err
            throw err
         }
        console.log("Signup Res:", res)
    })

    let loginReq = new messages.LoginReq()
    loginReq.setEmail("uche@uche.com")
    loginReq.setPassword("uche")
    client.login(loginReq, (err, res) => {
        if (err) throw err
        console.log("LOgin Res:", res)
    })
}

main()