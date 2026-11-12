import multer from 'multer';
import path from 'path';
import { ApiError } from '../utils/ApiError.js';

// Allowed MIME types for academic document submissions (PDF, DOCX)
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB limit

// In-memory or temporary disk storage configuration
const storage = multer.memoryStorage();

export const uploadDocument = multer({
  storage,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 1,
  },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      return cb(
        new ApiError(
          400,
          'Invalid file type. Only PDF and Word documents (.pdf, .docx, .doc) are permitted.'
        )
      );
    }

    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.pdf', '.docx', '.doc'].includes(ext)) {
      return cb(new ApiError(400, 'Invalid file extension.'));
    }

    cb(null, true);
  },
});
