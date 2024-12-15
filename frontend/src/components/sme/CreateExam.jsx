import React from 'react'
import "./CreateExam.css"
import CreateExamForm from './CreateExamForm'

function CreateExam() {
  return (
    <>
      <div id="sme-nav">
        <h1>Dashboard</h1>
        <div id="sme-profile">
          <div className="sme-img-div">
            <img src="/profile.jpg" alt="" />
          </div>
          <div className="sme-text-div">
            <p id="username">Bishal</p>
            <p id="role">SME</p>
          </div>
        </div>
      </div>

      {/* Exam Creation Form */}
      <CreateExamForm/>
    </>
  )
}

export default CreateExam