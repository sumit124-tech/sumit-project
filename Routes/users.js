
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user");

// router.get("/signup", (req, res) => {
//     res.render("./users/signup.ejs");
// });

// router.post("/signup", async (req, res) => {
//     try {
//         let { username, email, password } = req.body;
//         const newUser = new User({ username, email });
//         const registeredUser = await User.register(newUser, password);
//         console.log(registeredUser);
//         req.flash("success", "welcome to wanderlust");
//         res.redirect("/listings");
//     } catch (e) {
//         req.flash("error", e.message);
//         console.log(e.message);
//         res.redirect("/signup");
//     }
// });

// router.get("/login", (req, res) => {
//     res.render("./users/login.ejs");
// });

// module.exports = router;

router.get("/signup", (req, res) => {
    res.render("./users/signup.ejs");
});

router.post("/signup", async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("success", "Welcome to Wanderlust");
        res.redirect("/listings");
    } catch (e) {
        req.flash("error", e.message);
        console.log(e.message);
        res.redirect("/signup");
    }
});

router.get("/login", (req, res) => {
    res.render("./users/login.ejs");
});

module.exports = router;