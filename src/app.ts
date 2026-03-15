import express from "express";
import cors from "cors";
import generateRoutes from "./routes/routesGenerator";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", generateRoutes);

export default app;