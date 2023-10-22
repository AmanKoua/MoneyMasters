const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/user");

router.post("/signup", async (req, res) => {

    if (!req.body || !req.body.email || !req.body.username || !req.body.password) {
        return res.status(403).json({ error: "Request body missing requried fields!" });
    }

    const doesUserExist = await User.findOne({ email: req.body.email });

    if (doesUserExist) {
        return res.status(400).json({ error: "Email already registered!" });
    }

    let user = undefined;

    try {
        user = await User.signup(req.body.email, req.body.password, req.body.username);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Internal server error registering user!" });
    }


    if (!user) {
        return res.status(500).json({ error: "Internal server error" });
    }

    const payload = {
        email: user.email,
        username: user.userName,
        tokenCreationTime: Date.now()
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '3d' })

    return res.status(200).json({ message: "User account sucessfully created", token, payload });
})

router.post("/login", async (req, res) => {

    if (!req.body || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: "Invalid request body!" });
    }

    let user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(404).json({ error: "No user found for the provided email!" });
    }

    try {
        user = await User.login(req.body.email, req.body.password);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ error: "Internal server error logging user in!" });
    }

    const payload = {
        email: user.email,
        username: user.userName,
        tokenCreationTime: Date.now()
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: '3d' })

    return res.status(200).json({ message: "User account sucessfully logged into account", token, payload });

})

module.exports = router;