import express from 'express';

import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Create new Order
// @route   POST /api/orders
// @access  Private
router.route('/').post(protect, addOrderItems);

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
router.route('/myorders').get(protect, getMyOrders);

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
router.route('/:id').get(protect, getOrderById);

// @desc    Update order to Paid
// @route   PUT /api/orders/:id/pay
// @access  Private
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
