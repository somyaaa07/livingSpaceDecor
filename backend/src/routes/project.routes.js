import express from 'express';
import  {protect}  from '../middleware/auth.js';
import * as ctrl from '../controllers/project.controller.js';

const router = express.Router();

router.get('/',ctrl.list);
router.get('/:slug',ctrl.getBySlug);
router.post('/',protect,ctrl.create);
router.put('/:id',protect,ctrl.update);
router.delete('/:id',protect,ctrl.remove);

export default router;