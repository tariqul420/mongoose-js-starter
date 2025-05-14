import { Router } from 'express';
import {
  createUser,
  getUserRole,
  updateUser,
} from '../controllers/userController';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

// User routes
router.post('/create', createUser);
router.get('/:email', verifyToken, getUserRole);
router.put('/update/:email', verifyToken, updateUser);

export default router;
