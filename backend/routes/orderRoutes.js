import express from 'express';

import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    getOrders,
    updateOrderToDelivered,
    updateOrderToPaid,
} from '../controllers/orderController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Create new Order
// @route   POST /api/orders
// @access  Private

// @desc    Get all Order
// @route   GET /api/orders
// @access  Private/Admin
router.route('/').get(protect, admin, getOrders).post(protect, addOrderItems);

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

// @desc    Update order to Delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
