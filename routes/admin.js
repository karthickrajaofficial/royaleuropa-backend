// Modified Backend API Routes to work with your existing JS data structure
// File: backend/routes/admin.js

const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Since you don't have JSON files, we'll work with your existing JS files
// You'll need to modify these paths to match your actual data files
const PACKAGES_FILE = path.join(__dirname, '../../frontend/src/data/packages.js');
const CATEGORIES_FILE = path.join(__dirname, '../../frontend/src/data/categoryPackages.js');

// Helper functions to read/write JS files
const readJSDataFile = async (filePath) => {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    // Extract the array from the export statement
    const match = fileContent.match(/export\s+const\s+\w+\s*=\s*(\[[\s\S]*?\]);/);
    if (match) {
      return JSON.parse(match[1]);
    }
    return [];
  } catch (error) {
    console.error('Error reading JS file:', error);
    return [];
  }
};

const writeJSDataFile = async (filePath, data, exportName) => {
  try {
    const jsContent = `export const ${exportName} = ${JSON.stringify(data, null, 2)};`;
    await fs.writeFile(filePath, jsContent, 'utf8');
  } catch (error) {
    console.error('Error writing JS file:', error);
    throw error;
  }
};

const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// PACKAGES ROUTES








module.exports = router;