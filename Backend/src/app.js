import express from "express";
import { connectDB } from "./config/database.js";
import { corsMiddleware } from "./middleware/cors.js";
import businessRoutes from "./routes/businessRoutes.js";
import { config } from "./config/config.js";

const app = express();

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use("/", businessRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running", timestamp: new Date().toISOString() });
});

// Database connection and server startup
const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.port, () => {
      console.log(`Server is running on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
