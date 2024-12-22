import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const cors = require("cors");
const prisma = new PrismaClient();
const port = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// GET /tasks
app.get("/tasks", async (_req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

// POST /tasks
app.post("/tasks", async (req: Request, res: Response) => {
  const { title, color } = req.body;

  const newTask = await prisma.task.create({
    data: { title, color },
  });
  res.status(201).json(newTask);
});

// PUT /tasks/:id
app.put("/tasks/:id", async (req: Request, res: Response) => {
  const { title, color, completed } = req.body;
  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(req.params.id) },
      data: { title, color, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to update task" });
  }
});

// GET /tasks/:id (get individual task)
app.get("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to fetch task" });
  }
});

// DELETE /tasks/:id
app.delete("/tasks/:id", async (req: Request, res: Response) => {
  await prisma.task.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
