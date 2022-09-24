import { Router, Request, Response } from 'express';
import { registerRoute, loginRoute } from './usersRoute'
import ordersRoute from './ordersRoute';
import configRoute from './configRoute';

const router = Router();

router.use('/register', registerRoute);
router.use('/login', loginRoute);
router.use('/orders', ordersRoute);
router.use('/config', configRoute );

export default router;
