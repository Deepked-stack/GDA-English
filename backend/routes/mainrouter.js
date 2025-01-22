import express from 'express';
import {profile} from '../controllers/mainController.js'; // Notice the .js extension

const router = express.Router();

router.get('/profile/:id', profile);
// router.post('/login',login);

export default router;  // Use export default instead of module.exports



