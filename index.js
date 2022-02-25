import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import jobRoutes from "./routes/jobs.js";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

app.use(
    express.json(),
    express.urlencoded({ extended: true }),
);

app.use("/api/jobs", jobRoutes)
app.use("/api/auth", authRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(4000))
    .catch(err => console.log(err));