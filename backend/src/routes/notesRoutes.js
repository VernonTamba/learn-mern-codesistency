import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notesControllers.js";

const router = express.Router();

// Base url: /api/notes

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;
// This code defines the routes for handling notes in an Express application.
// It includes routes for getting all notes, creating a note, updating a note by ID, and deleting a note by ID.
// The routes respond with appropriate status codes and messages for each operation.
