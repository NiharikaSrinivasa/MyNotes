import note from "../models/note.js";
export const getAllNotes = async (_, res) => {
  // res.status(200).send("task list has 500 records");
  try {
    // const notes = await note.find();
    const notes = await note.find().sort({ createdAt: -1 }); //newest first
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllNoteById = async (req, res) => {
  try {
    const notes = await note.findById(req.params.id);
    if (!notes) {
      res.status(404).json({ message: "Note not found" });
    } else {
      res.status(200).json(notes);
    }
  } catch (error) {
    console.log("Error in getAllNotes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const postNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new note({ title: title, content: content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error in getAllNotes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const editNotes = async (req, res) => {
  // res.status(200).json({ message: "Post edited Successfully" });
  try {
    const { title, content } = req.body;
    const updatedData = await note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );
    if (!updatedData) {
      return res.status(404).json({ message: "ID not found" });
    } else {
      res.status(200).json(updatedData);
    }
  } catch (error) {
    console.log("Error in getAllNotes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const deleteNotes = async (req, res) => {
  // res.status(200).json({ message: "Post Deleted Successfully" });
  try {
    const deletedtask = await note.findByIdAndDelete(req.params.id);
    if (!deletedtask) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.status(200).json({ message: "note deleted successfully" });
    }
  } catch (error) {
    console.log("Error in deleting the task");
    res.status(200).json({ message: "task deleted successfully" });
  }
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// notesRoutes.get("/", (req, res) => {
//   res.send("task list has 500 records");
// });

// notesRoutes.post("/", (req, res) => {
//   res.send("a new task is created");
// });

// notesRoutes.put("/:id", (req, res) => {
//   res.send("task with id 1 is updated");
// });

// notesRoutes.delete("/:id", (req, res) => {
//   res.send("task with id 1 is deleted");
// });
