import express from "express";
import taskRoutes from "./routes/taskRoutes";

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api", taskRoutes);
export { app };
