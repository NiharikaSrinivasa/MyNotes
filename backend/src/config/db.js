// import mongoose from "mongoose";
// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("db connected successfully");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("try block execute");
  } catch (error) {
    console.log(error, "error executed");
    process.exit(1);
  }
};

export default connectDB;
