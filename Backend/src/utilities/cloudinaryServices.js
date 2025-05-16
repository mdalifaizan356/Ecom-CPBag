import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFile = async (files) => {
  const results = [];

  for (const file of files) {
    try {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "your-folder-name", // Optional
            resource_type: "auto", // Image, video, pdf, etc.
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        stream.end(file.buffer); // multer.memoryStorage should provide buffer
      });

      results.push(result);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  return results;
};

export default uploadFile;
