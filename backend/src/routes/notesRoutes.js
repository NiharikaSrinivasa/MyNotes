import express from "express";
import {
  deleteNotes,
  editNotes,
  getAllNotes,
  postNotes,
} from "../controllers/notescontrollers.js";
const notesRoutes = express.Router();
notesRoutes.get("/", getAllNotes);
notesRoutes.post("/", postNotes);
notesRoutes.put("/:id", editNotes);
notesRoutes.delete("/:id", deleteNotes);

export default notesRoutes;
