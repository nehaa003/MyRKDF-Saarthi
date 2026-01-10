import mongoose from "mongoose";

const botSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      enum: ["student", "bot"],
      required: true
    },

    message: {
      type: String,
      required: true,
      trim: true
    },

    sessionId: {
      type: String,
      required: true,
      index: true
    },

    intent: {
      type: String,
      default: "general" // admission | exam | fees | syllabus | placement | general
    },

    responseTime: {
      type: Number, // in milliseconds
      default: 0
    },

    source: {
      type: String,
      enum: ["knowledgeBase", "AI", "ruleBased"],
      default: "AI"
    },

    isResolved: {
      type: Boolean,
      default: false // Has the student's query been answered satisfactorily?
    },

    metadata: {
      type: Object,
      default: {} // Can store extra info like context, attachments, or AI confidence
    }
  },
  { timestamps: true }
);

const Bot = mongoose.model("Bot", botSchema);
export default Bot;
