import express from "express";
import {
  deleteWishlist,
  editWishlist,
  getWishlist,
  postWishlist,
} from "../controllers/wishlistcontrollers.js";
const wishlistRoutes = express.Router();
wishlistRoutes.get("/", getWishlist);
wishlistRoutes.post("/", postWishlist);
wishlistRoutes.put("/:id", editWishlist);
wishlistRoutes.delete("/:id", deleteWishlist);

export default wishlistRoutes;
