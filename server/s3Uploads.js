import express from "express"
import multer from "multer"
import multerS3 from "multer-s3"
import AWS from "aws-sdk"
import { configDotenv } from "dotenv"

const BUCKET_NAME=process.env.BUCKET_NAME
const REGION=process.env.REGION
const ACCESS_KEY=process.env.ACCESS_KEY
const SECRET_KEY= process.env.SECRET_KEY

const S3= new AWS.S3({
  credentials:{
    accessKeyId:ACCESS_KEY,
    secretAccessKey:SECRET_KEY
  },
  region:REGION
})

const upload = multer({
    storage: multerS3({
      S3: S3,
      bucket: process.env.S3_BUCKET_NAME,
      acl: 'public-read', // File will be publicly readable
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      key: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
      },
    }),
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Only image files are allowed!'), false);
      }
    },
    limits: { fileSize: 5 * 1024 * 1024 }, // Max file size: 5MB
  });
  
  export default upload



















