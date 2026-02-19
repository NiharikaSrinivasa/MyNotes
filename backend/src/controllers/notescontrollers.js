export const getAllNotes = (req, res) => {
  res.status(200).send("task list has 500 records");
};
export const postNotes = (req, res) => {
  res.status(201).json({ message: "Post created Successfully" });
};
export const editNotes = (req, res) => {
  res.status(200).json({ message: "Post edited Successfully" });
};
export const deleteNotes = (req, res) => {
  res.status(200).json({ message: "Post Deleted Successfully" });
};
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
