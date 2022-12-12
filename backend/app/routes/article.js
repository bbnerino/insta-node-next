const express = require('express');

const router = express.Router()

const articleController = require("../controllers/article")

router.post("/",articleController.create)
router.get("/all",articleController.getAll)


module.exports = router;
