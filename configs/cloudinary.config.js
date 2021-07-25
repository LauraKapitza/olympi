const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET 
})

const storage = new CloudinaryStorage({
  //cloudinary: cloudinary
  cloudinary,
  params: {
    folder: 'Olympi',
    resource_type: 'video',
    allowedFormats:['webm', 'mp4', 'ogv'],
    public_id: (req, file) => file.originalname
  }
});

const uploadCloud = multer({storage}) //storage: storage
module.exports = uploadCloud;