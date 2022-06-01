const grpcProtoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");

const PROTO_PATH = "./company.proto";
const opts = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const packageDefinition = grpcProtoLoader.loadSync(PROTO_PATH, opts);

const CompanyService = grpc.loadPackageDefinition(packageDefinition).CompanyService;

const client = new CompanyService(
    "localhost:30001",
    grpc.credentials.createInsecure()
);


module.exports = client