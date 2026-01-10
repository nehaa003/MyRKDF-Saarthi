import mongoose from "mongoose";

const knowledgeSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["admission", "courses", "exam", "fees", "syllabus", "placement", "general", "staff", "departments", "hods", "events", "contact", "results", "faq"],
  default: "general",
    },

    keywords: {
      type: [String],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Knowledge = mongoose.model("Knowledge", knowledgeSchema);
export default Knowledge;
