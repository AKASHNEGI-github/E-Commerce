import mongoose from "mongoose";

// Connect Mongoose
export const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/ecommerceDB")
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
