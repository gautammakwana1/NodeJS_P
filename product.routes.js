const express = require('express');
const productRoutes = express.Router();
const productController = require('../controller/product.controller');
// const {addProduct,deleteProduct,getAllProduct,getProduct,replaceProduct,updateProduct} 
//          = require('../controller/product.controller');


//Get All Product
productRoutes.get('/', productController.getAllProduct);

// Get specific data one or more from id field 
productRoutes.get('/get-product', productController.getProduct);

// TO ADD product for temporary time not in original file just for server 
productRoutes.post('/add-product', productController.addProduct);

// Replace Product 
productRoutes.put('/replace-product', productController.replaceProduct);

// Update Product
productRoutes.patch('/update-product', productController.updateProduct);

// Delete product
productRoutes.delete('/delete-product', productController.deleteProduct);

// Export all routes through productRoutes
module.exports = productRoutes;