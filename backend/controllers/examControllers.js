import { ExamData } from "../models/exam.model.js"

const createExam = async (req, res) => {
  try {
    // Validate input fields
    const { examName, startTime, endTime, date, examLink, examCode } = req.body;
    if (!examName || !startTime || !endTime || !date || !examLink || !examCode) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    // If validation passes, proceed to create and save ExamData
    const Exam = new ExamData({ examName, startTime, endTime, date, examLink, examCode });
    await Exam.save();
    
    // Send success response
    return res.status(201).json(Exam);
  } catch (error) {
    // Handle any unexpected errors
    return res.status(500).json({ message: 'Error creating ExamData', error: error.message });
  }

}

const fetchExamData = async (req, res) => {
  try {
    const ExamDatas = await ExamData.find();
    res.status(200).json(ExamDatas);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving ExamDatas' });
  }
}

const deleteExam = async (req, res) => {
  try {
    await ExamData.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'ExamData deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting ExamData' });
  }
}

export default {createExam, fetchExamData, deleteExam}