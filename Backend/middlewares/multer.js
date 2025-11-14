import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname only for this file (ESM safe)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer storage engine
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"), // go up one level if inside /middlewares
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;
