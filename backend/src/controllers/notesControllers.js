import Notes from "../models/Note.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Notes.find().sort({ createdAt: -1 });
    res.status(200).json({
      message: "Notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Notes.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note fetched successfully",
      data: note,
    });
  } catch (error) {
    console.error("Error fetching note:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Notes({
      title,
      content,
    });

    const savedNote = await newNote.save();

    res
      .status(201)
      .json({ message: "Note created successfully", data: savedNote });
  } catch (error) {
    console.error("Error creating note:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    const updatedNote = await Notes.findByIdAndUpdate(
      id,
      {
        title,
        content,
      },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    console.error("Error updating note:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Notes.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res
      .status(200)
      .json({ message: "Note deleted successfully", data: deletedNote });
  } catch (error) {
    console.error("Error deleting note:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
