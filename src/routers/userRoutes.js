import { Router } from 'express';
import {
  createUser,
  getUserRole,
  updateUser,
} from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = Router();

// User routes
router.post('/create', createUser);
router.get('/role/:email', verifyToken, getUserRole);
router.put('/update/:email', verifyToken, updateUser);

export default router;
