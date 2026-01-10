import { useEffect, useRef, useState } from "react";
import { sendMessage } from "../services/api";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const bottomRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Welcome message
  useEffect(() => {
    setMessages([
      {
        sender: "bot",
        text: "👋 Hello! I’m 🤖 MyRKDF Saarthi — your smart university assistant. How can I help you today?",
      },
    ]);
  }, []);

  // Typing animation
  const typeBotMessage = (fullText) => {
    let index = 0;
    setIsTyping(true);

    const interval = setInterval(() => {
      index++;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.sender === "bot") {
          const updated = [...prev];
          updated[updated.length - 1] = {
            sender: "bot",
            text: fullText.slice(0, index),
          };
          return updated;
        }
        return [...prev, { sender: "bot", text: fullText.slice(0, index) }];
      });

      if (index === fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20);
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    try {
      const res = await sendMessage(input);
      typeBotMessage(res.reply);
    } catch {
      typeBotMessage("⚠️ Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col h-screen text-white"
      style={{
        backgroundImage: `
          radial-gradient(circle at top left, rgba(168,85,247,0.35), transparent 40%),
          radial-gradient(circle at bottom right, rgba(59,130,246,0.35), transparent 40%),
          linear-gradient(to bottom right, #05020d, #1a0b3a, #0b1c3d)
        `,
      }}
    >
      {/* HEADER */}
      <div className="p-4 text-center border-b border-white/10 backdrop-blur-md bg-black/30">
        <h2 className="text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-2">
          <span>🤖</span>
          <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
            MyRKDF Saarthi
          </span>
          <span style={{ color: "initial" }}>🎓</span>
        </h2>

        <p className="text-sm text-gray-300 mt-1 tracking-wide">
          ✨ RKDF University • AI Assistant
        </p>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={
                "relative px-5 py-3 rounded-2xl max-w-md leading-relaxed backdrop-blur-xl transition-all " +
                (msg.sender === "user"
                  ? "bg-gradient-to-r from-purple-700 to-indigo-700 border border-orange-400/50 shadow-[0_0_40px_rgba(249,115,22,0.6)]"
                  : "bg-white/10 border border-orange-400/40 shadow-[0_0_35px_rgba(251,146,60,0.45)]")
              }
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <span className="animate-pulse">🤖 Saarthi is typing</span>
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-150"></span>
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-300"></span>
            </span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="p-4 bg-black/40 backdrop-blur-xl border-t border-white/10 flex gap-3">
        <input
          type="text"
          className="
            flex-1 px-5 py-3 rounded-full
            bg-white/10 backdrop-blur-xl text-white
            placeholder-gray-300 outline-none
            border border-orange-400/30
            focus:ring-2 focus:ring-yellow-400/70
            focus:border-yellow-400/60
            transition-all
          "
          placeholder="💬 Ask about fees, courses, exams, events..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={isTyping}
        />

        <button
          onClick={handleSend}
          disabled={isTyping}
          className="
            px-6 rounded-full font-semibold text-black
            bg-gradient-to-r from-cyan-400 to-blue-500
            hover:scale-105 transition
            shadow-[0_0_25px_rgba(59,130,246,0.6)]
            disabled:opacity-50
          "
        >
          🚀 Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
