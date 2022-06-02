const { MongoClient } = require("mongodb");

const DBClient = new MongoClient(process.env.DB_URI, {
    useUnifiedTopology: true,
});
async function connectDB() {
    try {
        await DBClient.connect();
        const db = await DBClient.db(process.env.DB_NAME);
        db.command({ ping: 1 });
        console.log("Connected successfully to mongo server");

        // Create DB Index
        await db.collection("users").createIndex({ email: 1 });
        return db
    } catch (error) {
        console.log("DB Error:", error);
    }
}

module.exports = connectDB