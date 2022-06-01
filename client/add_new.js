const client = require("./client")

const company = {
    id: "ca9kn1gni953la3vigu0",
    name: "Mekio-Tech",
    sector: "IT",
    category: "small",
    is_startup: true,
    ceo: "Bright Edwin",
    revenue: "",
}

//  {
//         id: "ca8c79oni9549g0k43ug",
//         name: "Verve",
//         sector: "FinTech",
//         category: "",
//         is_startup: false,
//         ceo: "Michele Elegbe",
//         revenue: "12.2 billion",
//     },

client.addCompany(company, (error, _company) => {
    if (error) throw error;
    console.log("New news added to list:", _company);
});