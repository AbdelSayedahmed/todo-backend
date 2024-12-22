// src/routes/taskRoutes.ts
import { Router } from "express";
import * as taskController from "../controllers/taskControllers";

const router = Router();

router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.createTask);
router.put("/tasks/:id", taskController.updateTask);
router.get("/tasks/:id", taskController.getTask);
router.delete("/tasks/:id", taskController.deleteTask);

export default router;
