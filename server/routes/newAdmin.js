import express from "express"
const router= express.Router()
import upload from "../s3Uploads"
import { createNewAdmin } from "../controllers/newAdminController"


router.post("/", upload.single("Image"),createNewAdmin)

module.exports = newAdminRouter;