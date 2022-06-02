require("dotenv").config()
// const grpcProtoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js")
const services = require("./proto/user_grpc_pb")


const API = require("./api");
const connectDB = require("../utils/db");

// const PROTO_PATH = "../../protos/user.proto";
// const opts = {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true,
// };

// const packageDefinition = grpcProtoLoader.loadSync(PROTO_PATH, opts);
// const userProto = grpc.loadPackageDefinition(packageDefinition);


let api = null;


async function main() {
    const db = await connectDB()
    api = new API(db, grpc)
    let server = new grpc.Server()

    server.addService(services.UserServiceService, {
        signup: api.signup,
        login: api.signup,
        // verify: api.verify,
        // getUser: api.getUser,
    })

    server.bindAsync(`${process.env.HOST}:${process.env.PORT}`, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log(`Server is running at: ${process.env.HOST}:${process.env.PORT}`);
    })
}

main().then((res) => {
    console.log("Running main", res)
}).catch(err =>console.log("Error while running MAIN", err))