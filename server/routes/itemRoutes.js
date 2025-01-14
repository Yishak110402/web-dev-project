const express = require("express");
const router = express.Router();
const itemControllers = require("./../controllers/itemControllers");

router.route("/").get(itemControllers.getAllItems).post(itemControllers.createItem);
router.route("/:id").get(itemControllers.getItem)

module.exports = router;