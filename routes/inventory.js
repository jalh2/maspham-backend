const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Get all tires
router.get('/', inventoryController.getAllTires);

// Add new tire
router.post('/', inventoryController.addTire);

// Update tire quantity (for sales)
router.patch('/:id/quantity', inventoryController.updateQuantity);

module.exports = router;
