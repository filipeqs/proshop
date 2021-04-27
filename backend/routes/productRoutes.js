import express from 'express';

import { protect, admin } from '../middleware/authMiddleware.js';

import { getProducts, getProductById, deleteProduct } from '../controllers/productControler.js';

const router = express.Router();

// @desc    Fetch all Products
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts);

// @desc    Fetch a Product by productID
// @route   GET /api/products/:id
// @access  Public

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct);

export default router;
