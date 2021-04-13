import express from 'express';

import { authUser } from '../controllers/userController.js';

const router = express.Router();

// @desc    Auth user and get Token
// @route   Post /api/users/login
// @access  Public
router.route('/login').post(authUser);

export default router;
