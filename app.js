import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/books", bookRoutes);
app.use("/users", userRoutes);

// Test route (optional but useful for debugging)
app.get("/", (req, res) => {
  res.send("Server is running");
});

// DB connection + server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");

    app.listen(process.env.PORT || 3000, () =>
      console.log("Server running")
    );
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });