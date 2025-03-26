import cors from "cors";
import express from "express";
import { connectToDatabase } from "./dbConnection";
import listRoutes from "./routes/listRoutes";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [`${process.env.FRONTEND_URL}`],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Task Manager Server connected");
});

// connect to database
connectToDatabase().catch(console.dir);

// Routes
app.use("/api/lists", listRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
