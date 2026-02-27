import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); // middle used to use json in controller / used to parse json body
//the below one was a example midleware which consideres the api call as a callback functiona nad executes the console log first
// app.use((req, res, next) => {
//   console.log(`your req method was ${req.method} and url was ${req.url}`);
//   next();
// });

// authcheck middleware
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);
app.use("/api/wishlist", wishlistRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
