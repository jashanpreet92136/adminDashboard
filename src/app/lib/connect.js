import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URL);

    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
