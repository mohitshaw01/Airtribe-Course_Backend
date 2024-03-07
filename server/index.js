import Express from "express";
import dotenv from 'dotenv'
import connectDB from "./src/db/index.js";

const app = new Express();

dotenv.config()

//
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

