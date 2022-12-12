const express = require('express');

const router = express.Router()

const userController = require("../controllers/user")

router.post("/signup",userController.postSignUp)
router.get("/all",userController.findAll)
router.get("/:userId",userController.findOne)
router.delete("/:id",userController.delete)
router.put("/update/:id",userController.update)
router.post('/login',userController.login)
module.exports = router;
