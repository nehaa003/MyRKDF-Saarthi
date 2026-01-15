import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import chatboatRoutes from "./routes/chatboat.routes.js";
import authRoutes from "./routes/auth.routes.js"; // ✅ NEW

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4002;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://my-rkdf-saarthi.vercel.app"
    ],
    
    credentials: true
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/bot/v1", chatboatRoutes);
app.use("/auth", authRoutes); 

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Backend is healthy" });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
