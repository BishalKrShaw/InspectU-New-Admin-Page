import React from 'react'

function CreateExamForm() {
  return (
    <>
      <div id="exam-form">
        <form action="" method="post">
          <div className="fields">
            <label htmlFor="examName">Exam Name</label>
            <input type="text" name="examName" id="examName" />
          </div>
          <div className="fields"></div>
          <div className="fields"></div>
          <div className="fields"></div>
          <div className="fields"></div>
          <div className="fields"></div>
        </form>
      </div>
    </>
  )
}

export default CreateExamForm