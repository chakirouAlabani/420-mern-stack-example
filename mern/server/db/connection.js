import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const client = new MongoClient(URI);

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Connected to local MongoDB.");
} catch (err) {
  console.error("MongoDB connection failed:", err);
}

const db = client.db("employees");

export default db;
