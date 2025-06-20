// Go to MongoDB website
// Create a free cluster
// Create a User
// Get the connection string
// Install MongoDB Compass

const {MongoClient} = require("mongodb")

const url = "mongodb+srv://amarnathkumar:JqxdEQWMXFn8GMAn@namastenode.m7getjp.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {

    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data = {
        firstname: "Sonali",
        lastname: "Bendre",
        city: "Mumbai",
        phoneNumber: "9784562130",
    };

    // Insert document
    const insertResult = await collection.insertMany([data]);
    console.log("Inserted documents =>", insertResult);
    

    // Read database
    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);
    
    return "done";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());