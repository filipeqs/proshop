import express from 'express';

import {
    authUser,
    getUserProfile,
    getUsers,
    registerUser,
    updateUserProfile,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Auth user and get Token
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(authUser);

// @desc    Register a New User
// @route   POST /api/users
// @access  Private
router.route('/').post(registerUser);

// @desc    Get User Profile
// @route   GET /api/users/profile
// @access  Private

// @desc    Update User Profile
// @route   PUT /api/users/profile
// @access  Private
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

// @desc    Get all Users
// @route   GET /api/users
// @access  Public/Admin
router.route('/').get(protect, admin, getUsers);

export default router;
