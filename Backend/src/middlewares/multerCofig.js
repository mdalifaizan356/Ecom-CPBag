import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads folder exists
const uploadPath = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath); 
}

// 1. Disk Storage (for saving files on disk)
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const uploadDisk = multer({ storage: diskStorage });

// 2. Memory Storage (for saving files in DB)
const memoryStorage = multer.memoryStorage();
// const uploadMemory = multer({ storage: memoryStorage });
const uploadMemory = multer({ storage: memoryStorage }).array("Images");


// Export both
export { uploadDisk, uploadMemory };

