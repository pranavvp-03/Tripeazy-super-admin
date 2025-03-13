const express = require("express");
const { fetchblogs } = require("../controllers/blogController");
const router = express.Router();


router.get("/fetch-blogs",fetchblogs)



module.exports = router