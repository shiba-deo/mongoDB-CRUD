const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


//POST
router.post('/todos', productController.createProduct)

//GET
router.get('/todos', productController.getAllProducts)

// GET by ID
router.get('/todos/:id', productController.getProductsById);

// UPDATE by ID
router.put('/todos/:id', productController.updateProductsById);

// DELETE
router.delete('/todos/:id', productController.deleteProductById);

module.exports = router;