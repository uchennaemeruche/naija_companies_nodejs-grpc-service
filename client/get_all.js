const client = require("./client")

client.getAllCompanies({}, (error, companies) => {
    if (error) throw error;
    console.log("Companies List:", companies);
});