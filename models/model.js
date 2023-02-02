const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    
    display_name: { type: String, required: true },
    reg_id: { type: Number, required: true },
    scores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Scores" }],
   
  },
  { timestamps: true }
);

const subjectSchema = new Schema(
  { 
    ExamQuestions:[{
      Instruction:String,
      Passage:String,
      Questions:[{
        QuestionId:String,
        Correct:String,
        QuestionOptions:[{
          Option_Title:String,
          Option_Value:String
        }]
      }]
    }]
       

    }
);

const scoresSchema = new Schema(
  {
    scores: Number,
    reg_id:Number,
    userDetails: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  },
  { timestamps: true }
);



const Student = mongoose.model("Student", studentSchema);
const Subject = mongoose.model("Subject", subjectSchema);
const Scores = mongoose.model("Scores", scoresSchema);

module.exports = {
  Student,
  Subject,
  Scores,
};
