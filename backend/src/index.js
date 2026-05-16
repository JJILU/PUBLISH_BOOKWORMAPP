import express from "express"
import dotenv from "dotenv"
import authRoutes from "../routes/authRoutes.js"

// load env variables
dotenv.config()

console.log(process.env.PORT)

// create express app
const app = express();


// middleware
app.use("/api/auth", authRoutes)


// PORT 
const PORT = process.env.PORT || 4000

// listen to requests on port 
app.listen(PORT, () => {
  console.log("Server running on http://localhost:"+PORT)
})