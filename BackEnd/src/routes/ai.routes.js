const express = require('express');
const aiController = require("../controllers/ai.controller")

const router = express.Router();


router.post("/ai/get-review", aiController.getReview)


module.exports = router;    
