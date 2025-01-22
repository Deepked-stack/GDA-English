import express from 'express';
import {updateProgress,toLearnIt, toDoIt, updateSubmoduleToOne} from '../controllers/progressController.js'; // Notice the .js extension

const router = express.Router();

router.put('/progress/:id', updateProgress);
router.put('/tolearnit/:id',toLearnIt);
router.put('/todoit/:id',toDoIt);
router.put('/setsubmoduletoone/:id',updateSubmoduleToOne);

export default router;  // Use export default instead of module.exports



