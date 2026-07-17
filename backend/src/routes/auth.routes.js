import express from 'express';
import { protect } from '../middleware/auth.js';
import * as ctrl from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', ctrl.login);
router.post('/me',protect,ctrl.getMe);
router.post('/logout',ctrl.logout);
router.post('/password',protect,ctrl.changePassword)

export default router;
