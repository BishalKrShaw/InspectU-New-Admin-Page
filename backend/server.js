import express from 'express'
import { connectDatabase } from './db.js';
import examRoute from "./routers/examRoute.js"
import cors from "cors"
import dotenv from 'dotenv';

const app = express();
app.use(cors());

app.use(express.json())

// Load environment variables from .env file
dotenv.config();

// Use process.env.PORT or fallback to a default port
const PORT = process.env.PORT || 5000;

// Database Connection
connectDatabase().then(() => console.log("MongoDB connected"));

app.use("/api/sme/create-exam", examRoute);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
  
})