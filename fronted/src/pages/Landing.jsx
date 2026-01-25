import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const [info, setInfo] = useState("");

  // 🔹 Start Chat button logic ONLY
  const handleStartChat = () => {
    const token = localStorage.getItem("token");
    const hasAccount = localStorage.getItem("hasAccount");

    if (token) {
      navigate("/chat");
    } else if (hasAccount) {
      navigate("/login");
    } else {
      navigate("/signup");
    }
  };

  // 🔹 Cards sirf info dikhayenge
  const handleCardClick = (type) => {
    if (type === "student") {
      setInfo("🎓 This chatbot is built specially for RKDF University students to help with academics, exams, and campus queries.");
    } else if (type === "ai") {
      setInfo("🤖 AI-powered chatbot that gives instant, accurate answers using a university knowledge base.");
    } else if (type === "secure") {
      setInfo("🔒 Secure login system ensures personalized and safe access for every student.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white
      bg-gradient-to-br from-gray-900 via-black to-gray-900">

      <div className="max-w-3xl text-center px-6">
        
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6
          bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
          text-transparent bg-clip-text">
          MyRKDF Saarthi
        </h1>

        {/* SUBTITLE */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          An AI-powered virtual assistant designed to help RKDF University
          students with academic queries, campus information, and instant support.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          <div
            onClick={() => handleCardClick("student")}
            className="cursor-pointer bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10
              hover:scale-105 transition-transform"
          >
            🎓
            <h3 className="font-semibold mt-2">Student Friendly</h3>
            <p className="text-sm text-gray-300 mt-1">
              Built specially for RKDF students.
            </p>
          </div>

          <div
            onClick={() => handleCardClick("ai")}
            className="cursor-pointer bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10
              hover:scale-105 transition-transform"
          >
            🤖
            <h3 className="font-semibold mt-2">AI Chatbot</h3>
            <p className="text-sm text-gray-300 mt-1">
              Instant academic assistance.
            </p>
          </div>

          <div
            onClick={() => handleCardClick("secure")}
            className="cursor-pointer bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10
              hover:scale-105 transition-transform"
          >
            🔒
            <h3 className="font-semibold mt-2">Secure Access</h3>
            <p className="text-sm text-gray-300 mt-1">
              Safe & personalized usage.
            </p>
          </div>
        </div>

        {/* INFO BOX (appears on card click) */}
        {info && (
          <div className="mb-8 p-4 rounded-xl bg-black/40 border border-white/10 text-gray-200">
            {info}
          </div>
        )}

        {/* START CHAT BUTTON */}
        <button
          onClick={handleStartChat}
          className="px-10 py-4 rounded-full font-semibold text-black text-lg
            bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
            shadow-[0_0_30px_rgba(251,191,36,0.6)]
            hover:scale-105 transition-transform"
        >
          Start Chat 🚀
        </button>

        {/* FOOTER */}
        <p className="text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} MyRKDF Saarthi · RKDF University
        </p>
      </div>
    </div>
  );
}
