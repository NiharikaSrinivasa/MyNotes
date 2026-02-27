import express from "express";
import {
  deleteNotes,
  editNotes,
  getAllNotes,
  postNotes,
  getAllNoteById,
} from "../controllers/notescontrollers.js";
const notesRoutes = express.Router();
notesRoutes.get("/", getAllNotes);
notesRoutes.get("/:id", getAllNoteById);
notesRoutes.post("/", postNotes);
notesRoutes.put("/:id", editNotes);
notesRoutes.delete("/:id", deleteNotes);

export default notesRoutes;
