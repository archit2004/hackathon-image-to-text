import express from'express';
import {createOrder, getUserOrder} from '../controllers/orderController';
const router = express.Router();
router.post('/', createOrder);
router.get('/:userId', getUserOrder);
export default router;