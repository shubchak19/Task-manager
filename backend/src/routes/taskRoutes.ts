import express, { Request } from "express";
import List from "../models/list";
import { itemType } from "../types";

const router = express.Router({ mergeParams: true });

interface TaskParams {
  listId: string;
  taskId?: string;
}

router.get("/", async (req: Request<TaskParams>, res) => {
  const { listId } = req.params;
  try {
    const list = await List.findOne({ id: listId });
    if (!list) {
      res.status(404).json({
        messge: "List not found",
      });
    } else {
      res.status(200).json(list.items);
    }
  } catch (error) {
    res.status(500).json({
      message: "Error fetching tasks",
      error,
    });
  }
});

router.post("/", async (req: Request<TaskParams>, res) => {
  const { listId } = req.params;
  const { id, title, description } = req.body;

  try {
    const list = await List.findOne({ id: listId });
    if (!list) {
      res.status(404).json({
        message: "List not found",
      });
    } else {
      const newTask = { id, title, description, completed: false };
      list.items.push(newTask);
      await list.save();
      res.status(201).json({
        message: "Task added successfully",
        task: newTask,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error creating task",
      error,
    });
  }
});

router.put("/:taskId", async (req: Request<TaskParams>, res) => {
  const { listId, taskId } = req.params;
  const { title, description, completed } = req.body;

  try {
    const list = (await List.findOne({ id: listId })) as typeof List.prototype;
    if (!list) {
      res.status(404).json({
        message: "List not found",
      });
    } else {
      const task = list.items.find((task: itemType) => task.id === taskId);
      if (!task) {
        res.status(404).json({
          message: "Task not found",
        });
      } else {
        task.title = title;
        task.description = description;
        task.completed = completed;
        await list.save();
        res.status(200).json({
          message: "Task updated successfully",
          task: task,
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      message: "Error updating task",
      error,
    });
  }
});

router.delete("/:taskId", async (req: Request<TaskParams>, res) => {
  const { listId, taskId } = req.params;
  try {
    const list = (await List.findOne({ id: listId })) as typeof List.prototype;
    if (!list) {
      res.status(404).json({
        message: "List not found",
      });
    } else {
      list.items = list.items.filter((task: itemType) => task.id !== taskId);
      await list.save();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting task",
      error,
    });
  }
});

export default router;
