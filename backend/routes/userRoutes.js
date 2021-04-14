import express from 'express';

import { authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Auth user and get Token
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(authUser);

// @desc    Get User Profile
// @route   GET /api/users/profile
// @access  Private
router.route('/profile').get(protect, getUserProfile);

export default router;
