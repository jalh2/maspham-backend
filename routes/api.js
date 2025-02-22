const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const userController = require('../controllers/userController');

// Inventory routes
router.get('/inventory', inventoryController.getAllTires);
router.get('/inventory/:id', inventoryController.getTire);
router.post('/inventory', inventoryController.createTire);
router.patch('/inventory/:id/quantity', inventoryController.updateQuantity);
router.delete('/inventory/:id', inventoryController.deleteTire);

// User routes
router.post('/users/change-password', userController.changePassword);

module.exports = router;
