import express from 'express';
import examControllers from '../controllers/examControllers.js';

const router = express.Router();

// Create an ExamData
router.post('/', examControllers.createExam);

// Get all ExamDatas
router.get('/', examControllers.fetchExamData);

// Delete an ExamData
router.delete('/:id', examControllers.deleteExam);

export default router
