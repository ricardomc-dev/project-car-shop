import { Router, Request, Response } from 'express';
import { registerRoute, loginRoute } from './usersRoute'

const router = Router();

router.use('/register', registerRoute);
router.use('/login', loginRoute);

export default router;
