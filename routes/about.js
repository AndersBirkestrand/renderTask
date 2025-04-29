const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
    res.json({ message: "My name is anders, and this is a task for Render"});
});

module.exports = router;