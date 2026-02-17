// // // routes/upload.js or in your main server file
// // const express = require('express');
// // const multer = require('multer');
// // const path = require('path');
// // const fs = require('fs');
// // const { v4: uuidv4 } = require('uuid');

// // const router = express.Router();

// // // Ensure upload directories exist
// // const uploadDir = path.join(__dirname, '../public/uploads/packages');
// // const ensureDirectoryExists = (dir) => {
// //   if (!fs.existsSync(dir)) {
// //     fs.mkdirSync(dir, { recursive: true });
// //   }
// // };

// // ensureDirectoryExists(uploadDir);

// // // Configure multer for file upload
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadDir);
// //   },
// //   filename: (req, file, cb) => {
// //     // Generate unique filename with original extension
// //     const uniqueName = `${Date.now()}-${uuidv4()}${path.extname(file.originalname)}`;
// //     cb(null, uniqueName);
// //   }
// // });

// // // File filter to accept only images
// // const fileFilter = (req, file, cb) => {
// //   const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
// //   if (allowedTypes.includes(file.mimetype)) {
// //     cb(null, true);
// //   } else {
// //     cb(new Error('Invalid file type. Only JPEG, PNG, and WebP images are allowed.'), false);
// //   }
// // };

// // // Configure multer
// // const upload = multer({
// //   storage: storage,
// //   fileFilter: fileFilter,
// //   limits: {
// //     fileSize: 5 * 1024 * 1024, // 5MB limit
// //   }
// // });

// // // Upload endpoint
// // router.post('/upload', upload.single('image'), (req, res) => {
// //   try {
// //     if (!req.file) {
// //       return res.status(400).json({
// //         success: false,
// //         message: 'No file uploaded'
// //       });
// //     }

// //     // Return the relative path that can be used in the frontend
// //     const filePath = `/uploads/packages/${req.file.filename}`;
    
// //     res.json({
// //       success: true,
// //       message: 'File uploaded successfully',
// //       filePath: filePath,
// //       originalName: req.file.originalname,
// //       size: req.file.size
// //     });

// //   } catch (error) {
// //     console.error('Upload error:', error);
// //     res.status(500).json({
// //       success: false,
// //       message: 'Upload failed',
// //       error: error.message
// //     });
// //   }
// // });

// // // Delete endpoint (optional - for removing uploaded images)
// // router.delete('/upload/:filename', (req, res) => {
// //   try {
// //     const filename = req.params.filename;
// //     const filePath = path.join(uploadDir, filename);

// //     // Check if file exists
// //     if (!fs.existsSync(filePath)) {
// //       return res.status(404).json({
// //         success: false,
// //         message: 'File not found'
// //       });
// //     }

// //     // Delete the file
// //     fs.unlinkSync(filePath);

// //     res.json({
// //       success: true,
// //       message: 'File deleted successfully'
// //     });

// //   } catch (error) {
// //     console.error('Delete error:', error);
// //     res.status(500).json({
// //       success: false,
// //       message: 'Failed to delete file',
// //       error: error.message
// //     });
// //   }
// // });

// // // Error handling middleware for multer errors
// // router.use((error, req, res, next) => {
// //   if (error instanceof multer.MulterError) {
// //     if (error.code === 'LIMIT_FILE_SIZE') {
// //       return res.status(400).json({
// //         success: false,
// //         message: 'File too large. Maximum size is 5MB.'
// //       });
// //     }
// //   }
  
// //   res.status(400).json({
// //     success: false,
// //     message: error.message || 'Upload failed'
// //   });
// // });

// // module.exports = router;
// // routes/upload.js
// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');

// const router = express.Router();

// // Base upload directory
// const baseUploadDir = path.join(__dirname, '../public/uploads');

// // Ensure any folder exists
// const ensureDirectoryExists = (dir) => {
//   if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
// };
// ensureDirectoryExists(baseUploadDir);

// // Configure multer for temporary storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, baseUploadDir); // save first in base folder
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${uuidv4()}${path.extname(file.originalname)}`;
//     cb(null, uniqueName);
//   }
// });

// // Accept only images
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
//   if (allowedTypes.includes(file.mimetype)) cb(null, true);
//   else cb(new Error('Invalid file type. Only JPEG, PNG, and WebP images are allowed.'));
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 } // 5MB
// });

// // ---------------- Upload Endpoint ----------------
// router.post('/upload', upload.single('image'), (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });

//     // Determine folder type (packages, banner, attractions, subpages, etc.)
//     const type = req.query.type || 'packages';
//     const folderPath = path.join(baseUploadDir, type);
//     ensureDirectoryExists(folderPath);

//     // Move file from base folder to type folder
//     const oldPath = path.join(baseUploadDir, req.file.filename);
//     const newPath = path.join(folderPath, req.file.filename);
//     fs.renameSync(oldPath, newPath);

//     res.json({
//       success: true,
//       message: 'File uploaded successfully',
//       filePath: `/uploads/${type}/${req.file.filename}`,
//       originalName: req.file.originalname,
//       size: req.file.size
//     });

//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ success: false, message: 'Upload failed', error: error.message });
//   }
// });

// // ---------------- Delete Endpoint ----------------
// router.delete('/upload/:type/:filename', (req, res) => {
//   try {
//     const { type, filename } = req.params;
//     const filePath = path.join(baseUploadDir, type, filename);

//     if (!fs.existsSync(filePath)) {
//       return res.status(404).json({ success: false, message: 'File not found' });
//     }

//     fs.unlinkSync(filePath);
//     res.json({ success: true, message: 'File deleted successfully' });

//   } catch (error) {
//     console.error('Delete error:', error);
//     res.status(500).json({ success: false, message: 'Failed to delete file', error: error.message });
//   }
// });

// // ---------------- Multer Error Handling ----------------
// router.use((error, req, res, next) => {
//   if (error instanceof multer.MulterError && error.code === 'LIMIT_FILE_SIZE') {
//     return res.status(400).json({ success: false, message: 'File too large. Maximum size is 5MB.' });
//   }
//   res.status(400).json({ success: false, message: error.message || 'Upload failed' });
// });

// module.exports = router;
// routes/upload.js - Replace with this simpler version
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Base upload directory
const baseUploadDir = path.join(__dirname, '../public/uploads');

// Ensure directory exists
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

ensureDirectoryExists(baseUploadDir);

// Simple storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const type = req.query.type || 'packages';
    const uploadPath = path.join(baseUploadDir, type);
    ensureDirectoryExists(uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Simple naming: timestamp + original name
    const timestamp = Date.now();
    const originalName = file.originalname.replace(/\s+/g, '-');
    cb(null, `${timestamp}-${originalName}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  }
});

// Upload endpoint
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const type = req.query.type || 'packages';
    const filePath = `/uploads/${type}/${req.file.filename}`;
    
    console.log('File uploaded:', filePath);
    
    res.json({
      success: true,
      filePath: filePath,
      originalName: req.file.originalname,
      size: req.file.size
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ success: false, message: 'Upload failed' });
  }
});

export default router;