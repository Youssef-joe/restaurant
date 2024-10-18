const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController.js");
const User = require('./../models/userModel.js')

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post('/user', userController.user)
module.exports = router;
