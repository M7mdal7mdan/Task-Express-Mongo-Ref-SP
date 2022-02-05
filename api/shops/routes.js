const express = require('express');
const router = express.Router();
const { createShop,shopList} = require("./controllers")


router.post("/",createShop);


router.get("/",shopList);

module.exports = router