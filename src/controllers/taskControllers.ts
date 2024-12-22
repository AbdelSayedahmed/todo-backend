import { Request, Response } from "express";
import * as taskQueries from "../queries/taskQueries";

// GET /tasks
export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await taskQueries.getAllTasks();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

// POST /tasks
export const createTask = async (req: Request, res: Response) => {
  const { title, color } = req.body;
  try {
    const newTask = await taskQueries.createTask(title, color);
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create task" });
  }
};

// PUT /tasks/:id
export const updateTask = async (req: Request, res: Response) => {
  const { title, color, completed } = req.body;
  const taskId = parseInt(req.params.id);
  try {
    const updatedTask = await taskQueries.updateTask(
      taskId,
      title,
      color,
      completed
    );
    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to update task" });
  }
};

// GET /tasks/:id
export const getTask = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  try {
    const task = await taskQueries.getTaskById(taskId);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to fetch task" });
  }
};

// DELETE /tasks/:id
export const deleteTask = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  try {
    await taskQueries.deleteTask(taskId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to delete task" });
  }
};
