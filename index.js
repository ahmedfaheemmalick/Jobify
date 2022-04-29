import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import jobRoutes from "./routes/Jobs.js";
import authRoutes from "./routes/Auth.js";

const app = express();
dotenv.config();

app.use(
    express.json(),
    cors(),
    express.static("./Client")
);

app.use("/api/jobs", jobRoutes)
app.use("/api/auth", authRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(process.env.PORT || 4000))