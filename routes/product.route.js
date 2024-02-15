const express = require('express');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct,deleteProduct} = require('../controllers/product.controller.js');

// getting all product
router.get('/', getProducts);

//getting one product

router.get('/:id', getProduct);

// creating a single product

router.post('/', createProduct);

// updatting an existing product
router.put('/:id', updateProduct);

//deleting a product
router.delete('/:id', deleteProduct);

module.exports= router