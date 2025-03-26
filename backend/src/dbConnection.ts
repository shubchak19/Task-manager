import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const mongoUri = process.env.MONGO_URI || "";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
} as mongoose.ConnectOptions;

export async function connectToDatabase() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(mongoUri, clientOptions);
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1); // Exit if unable to connect
  }
}
