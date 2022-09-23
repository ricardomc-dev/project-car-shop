import { Router, Request, Response } from 'express';
import { registerRoute, loginRoute } from './usersRoute'
// import ordersRoute from './ordersRoute';

const router = Router();

router.use('/register', registerRoute);
router.use('/login', loginRoute);
// router.use('/orders', ordersRoute);

export default router;
