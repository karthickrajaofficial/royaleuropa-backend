// // backend/server.js
// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require('dotenv').config();

// // Import email templates
// const userEmailTemplate = require('./templates/userEmailTemplate');
// const adminEmailTemplate = require('./templates/adminEmailTemplate');
// const adminRoutes = require('./routes/admin');
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Create transporter for sending emails
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// // Test email configuration
// transporter.verify((error, success) => {
//   if (error) {
//     console.log('Error with email configuration:', error);
//   } else {
//     console.log('Server is ready to send emails');
//   }
// });

// // Email sending endpoint
// app.post('/api/send-email', async (req, res) => {
//   try {
//     const formData = req.body;
//     console.log('Received form data:', formData);

//     // Generate HTML content from templates
//     const userHtml = userEmailTemplate(formData);
//     const adminHtml = adminEmailTemplate(formData);

//     // Email content sent to the user
//     const mailOptions = {
//       from: {
//         name: 'Grand Royal Tours',
//         address: process.env.EMAIL_USER
//       },
//       to: formData.email,
//       subject: `Travel Inquiry Confirmation - Grand Royal Tours`,
//       html: userHtml
//     };

//     // Notification email to admin
//     const adminNotification = {
//       from: {
//         name: 'Grand Royal Tours Website',
//         address: process.env.EMAIL_USER
//       },
//       to: process.env.ADMIN_EMAIL || 'info@grandroyaltours.com',
//       subject: `New Travel Inquiry from ${formData.name}`,
//       html: adminHtml
//     };

//     console.log('Attempting to send emails...');

//     // Send both emails
//     await Promise.all([
//       transporter.sendMail(mailOptions),
//       transporter.sendMail(adminNotification)
//     ]);

//     console.log('Emails sent successfully');
//     res.status(200).json({ 
//       status: 'success',
//       message: 'Email sent successfully' 
//     });

//   } catch (error) {
//     console.error('Email sending error:', error);
//     res.status(500).json({ 
//       status: 'error',
//       message: 'Failed to send email',
//       error: error.message 
//     });
//   }
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ 
//     status: 'error',
//     message: 'Something broke!',
//     error: err.message 
//   });
// });

// // Admin routes
// app.use('/api/admin', adminRoutes);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// backend/server.js
// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";
// import dotenv from "dotenv";

// // Import email templates
// import userEmailTemplate from "./templates/userEmailTemplate.js";
// import adminEmailTemplate from "./templates/adminEmailTemplate.js";

// // Routes
// import adminRoutes from "./routes/admin.js";
// import packageRoutes from "./routes/packageRoutes.js";
// import connectDB from "./config/db.js";
// dotenv.config();
// connectDB();
// const app = express();
// // const uploadRoutes = require('./routes/upload');
// import uploadRoutes from './routes/upload.js';

// // Middleware

// app.use(cors());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));


// // Create transporter for sending emails
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

// // Test email configuration
// transporter.verify((error, success) => {
//   if (error) {
//     console.log("Error with email configuration:", error);
//   } else {
//     console.log("Server is ready to send emails");
//   }
// });

// // Email sending endpoint
// app.post("/api/send-email", async (req, res) => {
//   try {
//     const formData = req.body;
//     console.log("Received form data:", formData);

//     // Generate HTML content from templates
//     const userHtml = userEmailTemplate(formData);
//     const adminHtml = adminEmailTemplate(formData);

//     // Email content sent to the user
//     const mailOptions = {
//       from: {
//         name: "Grand Royal Tours",
//         address: process.env.EMAIL_USER,
//       },
//       to: formData.email,
//       subject: `Travel Inquiry Confirmation - Grand Royal Tours`,
//       html: userHtml,
//     };

//     // Notification email to admin
//     const adminNotification = {
//       from: {
//         name: "Grand Royal Tours Website",
//         address: process.env.EMAIL_USER,
//       },
//       to: process.env.ADMIN_EMAIL || "info@grandroyaltours.com",
//       subject: `New Travel Inquiry from ${formData.name}`,
//       html: adminHtml,
//     };

//     console.log("Attempting to send emails...");

//     // Send both emails
//     await Promise.all([
//       transporter.sendMail(mailOptions),
//       transporter.sendMail(adminNotification),
//     ]);

//     console.log("Emails sent successfully");
//     res.status(200).json({
//       status: "success",
//       message: "Email sent successfully",
//     });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     res.status(500).json({
//       status: "error",
//       message: "Failed to send email",
//       error: error.message,
//     });
//   }
// });

// // API routes
// app.use("/api/admin", adminRoutes);
// app.use("/api/packages", packageRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     status: "error",
//     message: "Something broke!",
//     error: err.message,
//   });
// });

// // Serve static files (uploaded images)
// app.use('/uploads', express.static('public/uploads'));

// // Use upload routes
// app.use('/api', uploadRoutes);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on port ${PORT}`);
// });
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';

// Import email templates
import userEmailTemplate from "./templates/userEmailTemplate.js";
import adminEmailTemplate from "./templates/adminEmailTemplate.js";

// Routes
import adminRoutes from "./routes/admin.js";
import packageRoutes from "./routes/packageRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import uploadRoutes from './routes/upload.js';
import connectDB from "./config/db.js";

// ES modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// IMPORTANT: Serve static files BEFORE API routes
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Debug middleware to check if files exist
app.use('/uploads/*', (req, res, next) => {
  const filePath = path.join(__dirname, 'public', req.path);
  console.log('Requested file:', req.path);
  console.log('Full path:', filePath);
  console.log('File exists:', fs.existsSync(filePath));
  
  // List directory contents for debugging
  if (req.path.includes('/uploads/packages/')) {
    const dirPath = path.join(__dirname, 'public/uploads/packages');
    if (fs.existsSync(dirPath)) {
      console.log('Directory contents:', fs.readdirSync(dirPath));
    }
  }
  
  next();
});

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Test email configuration
transporter.verify((error, success) => {
  if (error) {
    console.log("Error with email configuration:", error);
  } else {
    console.log("Server is ready to send emails");
  }
});

// Email sending endpoint
app.post("/api/send-email", async (req, res) => {
  try {
    const formData = req.body;
    console.log("Received form data:", formData);

    // Generate HTML content from templates
    const userHtml = userEmailTemplate(formData);
    const adminHtml = adminEmailTemplate(formData);

    // Email content sent to the user
    const mailOptions = {
      from: {
        name: "Grand Royal Tours",
        address: process.env.EMAIL_USER,
      },
      to: formData.email,
      subject: `Travel Inquiry Confirmation - Grand Royal Tours`,
      html: userHtml,
    };

    // Notification email to admin
    const adminNotification = {
      from: {
        name: "Grand Royal Tours Website",
        address: process.env.EMAIL_USER,
      },
      to: process.env.ADMIN_EMAIL || "info@grandroyaltours.com",
      subject: `New Travel Inquiry from ${formData.name}`,
      html: adminHtml,
    };

    console.log("Attempting to send emails...");

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(adminNotification),
    ]);

    console.log("Emails sent successfully");
    res.status(200).json({
      status: "success",
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to send email",
      error: error.message,
    });
  }
});

// API routes - AFTER static file serving
app.use("/api/admin", adminRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api", uploadRoutes); // Upload routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something broke!",
    error: err.message,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📁 Static files served from: ${path.join(__dirname, 'public/uploads')}`);
  
  // Check if uploads directory exists and create if needed
  const uploadsPath = path.join(__dirname, 'public/uploads');
  if (!fs.existsSync(uploadsPath)) {
    console.log('📁 Creating uploads directory...');
    fs.mkdirSync(uploadsPath, { recursive: true });
    fs.mkdirSync(path.join(uploadsPath, 'packages'), { recursive: true });
    fs.mkdirSync(path.join(uploadsPath, 'banner'), { recursive: true });
    fs.mkdirSync(path.join(uploadsPath, 'attractions'), { recursive: true });
    fs.mkdirSync(path.join(uploadsPath, 'subplaces'), { recursive: true });
  }
  
  console.log('📂 Upload directories ready');
});