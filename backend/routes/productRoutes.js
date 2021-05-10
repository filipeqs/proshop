import express from 'express';

import { protect, admin } from '../middleware/authMiddleware.js';

import {
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    createProduct,
    createProductReview,
    getTopProducts,
} from '../controllers/productControler.js';

const router = express.Router();

// @desc    Fetch all Products
// @route   GET /api/products
// @access  Public

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
router.route('/').get(getProducts).post(protect, admin, createProduct);

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
router.get('/top', getTopProducts);

// @desc    Fetch a Product by productID
// @route   GET /api/products/:id
// @access  Public

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
router
    .route('/:id')
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

// @desc    Create new Review
// @route   POST /api/products/:id/reviews
// @access  Private
router.route('/:id/reviews').post(protect, createProductReview);

export default router;
