import express from 'express';
import  {protect}  from '../middleware/auth.js';
import * as projectCtrl from '../controllers/project.controller.js';
import * as blogCtrl from '../controllers/blog.controller.js';

const router = express.Router();

router.get('/projects',protect,projectCtrl.listAdmin);
router.get('/projects/:id',protect,projectCtrl.getById);

router.get('/blogs',protect,blogCtrl.listAdmin);
router.get('/blogs/:id',protect,blogCtrl.getById);

export default router