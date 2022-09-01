const express = require("express");
const authController = require("../controller/authController");
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.get("/logout", authController.logOut);
router.patch("/updateMe", authController.updateMe);
router.delete("/deleteuser", authController.deleteuser);

module.exports = router;
