const grpcProtoLoader = require('@grpc/proto-loader')
const grpc = require('@grpc/grpc-js')
const { v4: uuidv4 } = require("uuid");

const PROTO_PATH = "./company.proto"

const opts = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const packageDefinition = grpcProtoLoader.loadSync(PROTO_PATH, opts)
const companyProto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server()

let companies = [{
        id: "1",
        name: "Dell",
        sector: "IT",
        category: "",
        is_startup: false,
        ceo: "Michael Dell",
        revenue: "92.2 billion",
    },
    {
        id: "2",
        name: "Netflix",
        sector: "IT",
        category: "",
        is_startup: false,
        ceo: "Reed Hastings",
        revenue: "20.2 billion",
    },
    {
        id: "3",
        name: "Microsoft",
        sector: "IT",
        category: "",
        is_startup: false,
        ceo: "Satya Nadella",
        revenue: "320 million",
    }
];



server.addService(companyProto.CompanyService.service, {
    getAllCompanies: (_, callback) => {
        callback(null, { companies })
    },
    getCompany: (_, callback) => {
        const companyId = _.request.id;
        const _company = companies.find(({ id }) => id == companyId);
        if (_company) callback(null, _company)
        else callback({ code: grpc.status.NOT_FOUND, details: 'NOT FOUND' })

    },
    addCompany: (req, callback) => {
        let _company = req.request
        _company.id = uuidv4();
        companies.push(_company)
        callback(null, _company)
    },
    deleteCompany: (_, callback) => {
        const companyId = _.request.id;
        let companyIdx = companies.findIndex(({ id }) => id == companyId)
        if (companyIdx == -1) callback({ code: grpc.status.NOT_FOUND, details: 'Not Found' })
        const deletedCompany = companies.splice(companyIdx, 1)
        console.log("Deleted Company", deletedCompany)
        callback(null, {})
    },
    updateCompany: (_, callback) => {
        const companyId = _.request.id;
        const _company = companies.find(({ id }) => id == companyId)
        if (_company) {
            if (_.request.name) _company.name = _.request.name;
            if (_.request.sector) _company.sector = _.request.sector;
            if (_.request.category) _company.category = _.request.category;
            if (_.request.is_startup) _company.is_startup = _.request.is_startup;
            if (_.request.revenue) _company.revenue = _.request.revenue;
            callback(null, _company)
        } else callback({ code: grpc.status.NOT_FOUND, details: 'Not Found' })

    }

})

server.bindAsync("127.0.0.1:30001", grpc.ServerCredentials.createInsecure(), (error, port) => {
    console.log("Server is running on port:", port);
    server.start()
});