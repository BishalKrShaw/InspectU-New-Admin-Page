import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import "./CreateExamForm.css";

const CreateExamForm = () => {
  const [formData, setFormData] = useState({
    examName: "",
    startTime: "",
    endTime: "",
    date: "",
    examLink: "",
    examCode: "",
  });

  const [exams, setExams] = useState([]);

  const fetchExams = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/sme/create-exam/"
    );
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
    await axios.post("http://localhost:3000/api/sme/create-exam/", formData);
    fetchExams();
    setFormData({
      examName: "",
      startTime: "",
      endTime: "",
      date: "",
      examLink: "",
      examCode: "",
    });
  };

  const deleteExam = async (id) => {
    await axios.delete(`http://localhost:3000/api/sme/create-exam/${id}`);
    fetchExams();
  };

  return (
    <div className="exam-div">
      <form onSubmit={handleSubmit}>
        <div id="exam-name-div">
          <label htmlFor="examName">Exam Name</label>
          <input
            id="examName"
            type="text"
            placeholder="Exam Name"
            value={formData.examName}
            onChange={(e) =>
              setFormData({ ...formData, examName: e.target.value })
            }
            required
          />
        </div>
        <div id="start-time-div">
          <label htmlFor="startTime">Start Time</label>
          <input
            id="startTime"
            type="time"
            placeholder="Start Time"
            value={formData.startTime}
            onChange={(e) =>
              setFormData({ ...formData, startTime: e.target.value })
            }
            required
          />
        </div>
        <div id="end-time-div">
          <label htmlFor="endTime">End Time</label>
          <input
            id="endTime"
            type="time"
            placeholder="End Time"
            value={formData.endTime}
            onChange={(e) =>
              setFormData({ ...formData, endTime: e.target.value })
            }
            required
          />
        </div>
        <div id="date">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            placeholder="Date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div id="exam-link-div">
          <label htmlFor="examLink">Exam Link</label>
          <input
            id="examLink"
            type="text"
            placeholder="Exam Link"
            value={formData.examLink}
            onChange={(e) =>
              setFormData({ ...formData, examLink: e.target.value })
            }
            required
          />
        </div>
        <div id="exam-code-div">
          <label htmlFor="examCode">Exam Code</label>
          <input
            id="examCode"
            type="text"
            placeholder="examCode"
            value={formData.examCode}
            readOnly
          />
          <button
            type="button"
            onClick={generateexamCode}
            style={{ marginLeft: "10px" }}
          >
            Generate Code
          </button>
        </div>
        <button type="submit" style={{ marginTop: "20px" }}>
          Create Exam
        </button>
      </form>

      <div className="exam-history">
        <h2>Existing Exams</h2>
        <ul>
          {exams.map((exam) => (
            <li key={exam._id}>
              {exam.examName} - {exam.date} - {exam.examCode}
              <button onClick={() => deleteExam(exam._id)}>
                <span class="material-symbols-outlined">delete</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateExamForm;
