import { MongoClient } from 'mongodb';
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const dbName = process.env.MONGODB_DB || 'digital_magazine';
let client;
let clientPromise;
if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri);
  globalThis._mongoClientPromise = client.connect();
}
clientPromise = globalThis._mongoClientPromise;
export async function getDb(){ const c = await clientPromise; return c.db(dbName); }
