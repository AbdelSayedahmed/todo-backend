import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all tasks
export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

// Create a new task
export const createTask = async (title: string, color: string) => {
  return await prisma.task.create({
    data: { title, color },
  });
};

// Update a task by ID
export const updateTask = async (
  id: number,
  title: string,
  color: string,
  completed: boolean
) => {
  return await prisma.task.update({
    where: { id },
    data: { title, color, completed },
  });
};

// Get a task by ID
export const getTaskById = async (id: number) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

// Delete a task by ID
export const deleteTask = async (id: number) => {
  return await prisma.task.delete({
    where: { id },
  });
};
