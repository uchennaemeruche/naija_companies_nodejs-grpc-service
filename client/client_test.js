const client = require("./client")

client.getAllCompanies({}, (error, companies) => {
    if (error) throw error;
    console.log("Companies List:", companies);
});


const newCompany = {
    id: "ca8c79oni9549g0k43ug",
    name: "Verve",
    sector: "FinTech",
    category: "",
    is_startup: false,
    ceo: " Elegbe",
    revenue: "12.2 billion",
}
client.addCompany(newCompany, (error, _company) => {
    if (error) throw error;
    console.log("New company added to list:", _company);
});

client.updateCompany({ id: 3, revenue: "200.2 billion" }, (error, company) => {
    if (error) throw error;
    console.log("Company successfully updated.", company);
});

client.deleteCompany({ id: 2 }, (error, company) => {
    if (error) throw error;
    console.log("Company removed from list", company);
});

client.getCompany({ id: 1 }, (error, company) => {
    if (error) throw error;
    console.log("Company fetched successfully", company);
})