import mongoose from "mongoose";

// SCHEMA
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // mongoose will automatically add createdAt and updatedAt fields
);

// MODEL
const Note = mongoose.model("Note", noteSchema);

export default Note;
// This code defines a Mongoose schema and model for a Note in a MongoDB database.
// The schema includes fields for title and content, both of which are required.
// The model is created using the schema and can be used to interact with the notes collection in the database.
