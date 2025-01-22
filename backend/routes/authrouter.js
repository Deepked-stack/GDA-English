import express from 'express';
import {signup,login} from '../controllers/authController.js'; // Notice the .js extension

const router = express.Router();

router.post('/signup', signup);
router.post('/login',login);

export default router;  // Use export default instead of module.exports






















