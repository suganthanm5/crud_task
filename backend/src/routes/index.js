const authRoutes = require("./auth.routes");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "API is running" });
});
router.use("/auth", authRoutes);

module.exports = router;