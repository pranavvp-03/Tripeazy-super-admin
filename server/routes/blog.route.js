const express = require("express");
const { fetchblogs, fetchBlogDetails, updateBlog } = require("../controllers/blogController");
const router = express.Router();


router.get("/fetch-blogs",fetchblogs)
router.get("/:blogId",fetchBlogDetails)
router.put("/:blogId",updateBlog)



module.exports = router