import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { accessChat } from '../controllers/chatControllers.js';

export const router = express.Router();

router.route('/access').post(authenticate, accessChat);
// router.route('/getAllChats').get(authenticate, fetchChat);
// router.route('/createGroup').post(authenticate, createGroup);
// router.route('/renameGroup').patch(authenticate, renameGroup);
// router.route('/removeMember').patch(authenticate, removeMember);
// router.route('/addMember').patch(authenticate, addMember);