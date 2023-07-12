const express = require('express');
//const checkAuth = require('../Middleware/checkAuth.middleware');
const infoControllers = require('../Controllers/info.controllers');
const router = express.Router();
console.log("Inside Info Routes");
router.post('', infoControllers.getInfo);
module.exports = router