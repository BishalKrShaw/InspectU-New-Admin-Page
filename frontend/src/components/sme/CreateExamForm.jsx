import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import axios from 'axios';

const CreateExamForm = () => {
  const [formData, setFormData] = useState({
    examName: '',
    startTime: '',
    endTime: '',
    date: '',
    examLink: '',
    examCode: '',
  });

  const [exams, setExams] = useState([]);

  const fetchExams = async () => {
    const { data } = await axios.get('http://localhost:3000/api/sme/create-exam/');
    setExams(data);
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const generateexamCode = () => {
    setFormData({ ...formData, examCode: nanoid() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/sme/create-exam/', formData);
    fetchExams();
    setFormData({ examName: '', startTime: '', endTime: '', date: '', examLink: '', examCode: '' });
  }

  const deleteExam = async (id) => {
    await axios.delete(`http://localhost:3000/api/sme/create-exam/${id}`);
    fetchExams();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exam examName"
          value={formData.examName}
          onChange={(e) => setFormData({ ...formData, examName: e.target.value })}
          required
        />
        <input
          type="time"
          placeholder="Start Time"
          value={formData.startTime}
          onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
          required
        />
        <input
          type="time"
          placeholder="End Time"
          value={formData.endTime}
          onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Exam Link"
          value={formData.examLink}
          onChange={(e) => setFormData({ ...formData, examLink: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="examCode"
          value={formData.examCode}
          readOnly
        />
        <button type="button" onClick={generateexamCode}>
          Generate Exam Code
        </button>
        <button type="submit">Create Exam</button>
      </form>

      <div>
        <h2>Existing Exams</h2>
        <ul>
          {exams.map((exam) => (
            <li key={exam._id}>
              {exam.examName} - {exam.date} - {exam.examCode}
              <button onClick={() => deleteExam(exam._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateExamForm;
