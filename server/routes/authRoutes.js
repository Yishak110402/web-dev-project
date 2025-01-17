const express = require("express");
const router = express.Router();
const authControllers = require("./../controllers/authControllers");

router.route("/signup").post(authControllers.signup);
router.route("/login").post(authControllers.login);

module.exports = router;
