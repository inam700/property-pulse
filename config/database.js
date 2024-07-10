import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("DB already connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log("DB connected");
  } catch (error) {
    console.log(error, "DB connection failed");
  }
};

export default connectDB;
