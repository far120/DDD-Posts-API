import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { apiLimiter } from "../api/middlewares/rateLimit.middleware";
import notFound from "../api/middlewares/notFound.middleware";
import globalErrorHandler from "../api/middlewares/errorHandler";


const app = express();

// security
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "*", 
        credentials: true,
    })
);
app.use(helmet());

// logging
app.use(morgan("dev"));

// body parser
app.use(express.json());
app.use(express.static("public"));

// rate limiting
app.use(apiLimiter);



// routes
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API testing endpoint, Create by:Mostafa ELFAR",
  });
});

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
  });
});

app.use("/api/v1/posts", require("../api/routes/postroutes"));

// not found
app.use(notFound);

// error handler
app.use(globalErrorHandler);

export default app;
