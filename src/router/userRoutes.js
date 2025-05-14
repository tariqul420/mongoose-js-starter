import { Router } from 'express';
import { createUser, getUserRole, updateUser } from '../controllers/userController';

const router = Router();

// User routes
router.post('/create-user', createUser);
router.get('/:email', getUserRole);
router.put('/update-user/:email', updateUser);

export default router;
