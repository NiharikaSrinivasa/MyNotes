import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import wishlistRoutes from "./routes/wishlistRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use("/api/notes", notesRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
