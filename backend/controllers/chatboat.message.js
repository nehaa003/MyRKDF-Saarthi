// import Bot from "../models/bot.model.js";
// import Knowledge from "../models/knowledge.model.js";

// const findAnswer = async (message) => {
//   const keywords = message.toLowerCase().split(" ");
//   const knowledgeList = await Knowledge.find({ isActive: true });

//   for (let item of knowledgeList) {
//     for (let kw of keywords) {
//       if (item.keywords.includes(kw)) {
//         return item.answer;
//       }
//     }
//   }
//   return "Sorry, I do not have an answer for that right now.";
// };

// export const chatMessage = async (req, res) => {
//   try {
//     const { sender, message, sessionId } = req.body;

//     if (!sender || !message || !sessionId) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const studentMessage = await Bot.create({
//       sender,
//       message,
//       sessionId,
//       intent: "general",
//       source: "student"
//     });

//     const botAnswer = await findAnswer(message);

//     const botMessage = await Bot.create({
//       sender: "bot",
//       message: botAnswer,
//       sessionId,
//       intent: "general",
//       source: "knowledgeBase"
//     });

//     return res.status(200).json({
//       studentMessage,
//       botMessage
//     });
//   } catch (error) {
//     console.error("Chat error ❌", error.message);
//     res.status(500).json({ error: "Server error" });
//   }
// };
// export const chatMessage = async (req, res) => {
//   try {
//     console.log("req.body:", req.body);
    
//     // simple response to test connectivity
//     return res.status(200).json({
//       success: true,
//       body: req.body,
//       message: "API working fine"
//     });
//   } catch (error) {
//     console.error("Chat error ❌", error.message);
//     res.status(500).json({ error: "Server error" });
//   }
// };

import Knowledge from "../models/knowledge.model.js";

const RKDF_WEBSITE = "https://www.rkdfuniversity.org";

export const chatMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: "Message is required"
      });
    }

    console.log("USER :", message);

    const text = message.toLowerCase().trim();
    const words = text.split(" ");

    // 👋 1️⃣ GREETING HANDLER
    const greetings = ["hi", "hello", "hey", "hii", "hlo"];
    if (greetings.includes(words[0])) {
      const reply =
        "Welcome to MyRKDF Saarthi 🤖! I’m here to help you with admissions, courses, fees, results, and other RKDF University-related queries.";

      console.log("BOT :", reply);

      return res.json({
        success: true,
        source: "bot",
        reply
      });
    }

    // 🔍 2️⃣ DB SEARCH
    const data = await Knowledge.findOne({
      isActive: true,
      keywords: { $in: words }
    }).sort({ updatedAt: -1 });

    // ✅ Found in DB
    if (data) {
      console.log("BOT :", data.answer);

      return res.json({
        success: true,
        source: "database",
        reply: data.answer,
        category: data.category
      });
    }

    // 🌐 3️⃣ WEBSITE FALLBACK
    const fallbackReply =
      "This information is not available in my database yet. Please check the official RKDF University website.";

    console.log("BOT :", fallbackReply);

    return res.json({
      success: true,
      source: "website",
      reply: fallbackReply,
      link: RKDF_WEBSITE
    });

  } catch (err) {
    console.error("CHATBOT ERROR:", err.message);
    return res.status(500).json({
      success: false,
      error: "Server error"
    });
  }
};
