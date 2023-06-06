import { connect, Connection } from 'mongoose';

const MONGO_URI: string = process.env.DB_HOST || "";
let connection: Connection | undefined;

export const connectMongoDb = async () => {
  if (!MONGO_URI) {
    throw new TypeError("Invalid schema, connection string expected to start with \"mongodb://\" or \"mongodb+srv://\" but is null or undefined");
  }

  if (connection) return;

  try {
    const db = await connect(MONGO_URI);
    connection = db.connection;
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.error("Error connecting to MongoDB");
    throw error;
  }
};
