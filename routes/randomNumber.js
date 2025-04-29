const express = require("express");
const router = express.Router();

router.get("/", async function(req, res, next) {
    const randomNumber = Math.floor(Math.random() * 10) +1;
    res.json({ number: randomNumber });
});

module.exports = router;