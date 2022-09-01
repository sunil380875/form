const express = require("express");

const viewController = require("../controller/viewController");
const authController = require("./../controller/authController");

const router = express.Router();
router.use(authController.isLoggedIn);
router.get("/", viewController.getOverview);
router.get("/login", viewController.getLogin);
router.get("/signup", viewController.getSignup);
router.get("/getblog", viewController.getBlog);
router.get("/updateblog", viewController.updateBlog);

module.exports = router;
