import { Router } from 'express';
import { registerRoute, loginRoute } from './usersRoute'
import ordersRoute from './ordersRoute';
import configRoute from './configRoute';
import vehiclesRoute from './vehiclesRoute';
import adminRoute from './adminRoute';

const router = Router();

router.use('/register', registerRoute);
router.use('/login', loginRoute);
router.use('/orders', ordersRoute);
router.use('/config', configRoute);
router.use('/vehicles', vehiclesRoute);
router.use('/admin', adminRoute);

export default router;
