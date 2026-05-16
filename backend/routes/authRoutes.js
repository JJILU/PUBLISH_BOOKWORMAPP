import express from "express";

const router = express.Router();

// register route
router.post("/register", (req,res) => {
  return res.send({"success": "registered"})
})

// login route
router.post("/login", (req,res) => {
  return res.send({"success": "login"})
})

export default router;