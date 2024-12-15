import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  examName: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  examLink: {
    type: String,
    required: true,
  },
  examCode: {
    type: String,
    required: true,
    unique: true,
  },
}, {timestamps:true})

export const ExamData = mongoose.model("ExamData", examSchema)