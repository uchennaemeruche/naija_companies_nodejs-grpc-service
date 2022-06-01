const express = require("express")
const path = require("path")
const client = require("./client")
const hbs = require("hbs")
const PORT = 5000,
    HOST = "localhost"

const app = express()


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


hbs.registerHelper("json", function(obj) {
    return JSON.stringify(obj);
})

app.get("/", (req, res) => {
    client.getAllCompanies({}, (error, result) => {
        console.log("Calling all companies");
        if (error) throw error;

        res.render("companies", { results: result.companies })
            // res.json(companies);
    });
})

app.get("/companies", (req, res) => {
    client.getAllCompanies({}, (error, companies) => {
        console.log("Calling all companies");
        if (error) throw error;
        res.json(companies)
    });
})

app.get("/companies/:id", (req, res) => {
    client.getCompany({ id: req.params.id }, (error, company) => {
        if (error) throw error;
        res.json(company);
    });
})

app.post("/companies", (req, res) => {
    console.log("Adding...")
    let _newCompany = {
        name: req.body.name,
        sector: req.body.sector,
        category: req.body.category,
        is_startup: req.body.is_startup,
        ceo: req.body.ceo,
        revenue: req.body.revenue
    };

    console.log("_New Company:", _newCompany);
    client.addCompany(_newCompany, (error, company) => {
        if (error) throw error;
        console.log("New news added to list:", company);
        res.redirect("/")
    });
})


app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});