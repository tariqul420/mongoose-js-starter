import { Router } from 'express';
import { createToken, removeToken } from '../controllers/jwtController.js';

const router = Router();

router.post('/create', createToken);
router.get('/remove', removeToken);

export default router;
