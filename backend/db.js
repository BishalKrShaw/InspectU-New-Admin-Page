import mongoose, { connect } from "mongoose";

const connectDatabase = async () => {
  mongoose.connect("mongodb://localhost:27017/InspectU")
}

export {connectDatabase}