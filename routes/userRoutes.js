import express from 'express';
import { authUser, registerUser,allUser } from '../controllers/userControllers.js';

export const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/allUser').get(allUser);
