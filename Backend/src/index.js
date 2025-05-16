import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { connectDB } from "./lib/db_connection.js";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    cors({
      // origin: process.env.CLIENT_URL,
      origin: "http://localhost:5173/",
      methods: "GET, POST, PUT, PATCH, DELETE",
      credentials: true,
    })
  );
 
app.use("/authroutes", authRoutes);
app.use("/userroutes", userRoutes);
app.use("/productroutes", productRoutes);



app.listen(port, host, ()=>{
    console.log(`Server is runnig on Port Number ${port}`);
    connectDB();
});