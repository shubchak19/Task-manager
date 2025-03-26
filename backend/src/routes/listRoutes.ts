import express from "express";
import List from "../models/list";
import taskRoutes from "./taskRoutes";

const router = express.Router();

router.use("/:listId/tasks", taskRoutes);

router.get("/", async (req, res) => {
  try {
    const lists = await List.find();
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching lists",
      error,
    });
  }
});

router.post("/", async (req, res) => {
  const { id, name } = req.body;
  try {
    const newList = new List({ id, name, items: [] });
    await newList.save();
    res.status(201).json({
      message: "List created successfully",
      list: newList,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating List",
      error,
    });
  }
});

router.delete("/:listId", async (req, res) => {
  const { listId } = req.params;
  try {
    const deletedList = await List.findOneAndDelete({ id: listId });
    if (!deletedList) {
      res.status(404).json({
        message: "List not found",
      });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting list",
      error,
    });
  }
});

export default router;
