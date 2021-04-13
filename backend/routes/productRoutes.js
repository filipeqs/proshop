import express from 'express';

import { getProducts, getProductById } from '../controllers/productControler.js';

const router = express.Router();

// @desc    Fetch all Products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts);

// @desc    Fetch a Product by productID
// @route   GET /api/products/:id
// @access  Public
router.route('/:id').get(getProductById);

export default router;
