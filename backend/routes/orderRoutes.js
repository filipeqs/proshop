import express from 'express';

import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Create new Order
// @route   POST /api/orders
// @access  Private
router.route('/').post(protect, addOrderItems);

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
router.route('/:id').get(protect, getOrderById);

export default router;
