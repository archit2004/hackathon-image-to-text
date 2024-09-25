import express from'express';
import {registerUser, loginUser} from '../controllers/authController';
import router from 'express.Router()';
router.post('/register', registerUser);
router.post('/login', loginUser);
module.exports=router;