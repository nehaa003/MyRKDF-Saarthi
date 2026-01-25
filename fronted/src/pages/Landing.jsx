import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const handleStartChat = () => {
    const token = localStorage.getItem("token");
    if (token) navigate("/chat");
    else navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white
      bg-gradient-to-br from-gray-900 via-black to-gray-900">

      <div className="max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6
          bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
          text-transparent bg-clip-text">
          MyRKDF Saarthi
        </h1>

        <p className="text-lg text-gray-300 mb-10">
          AI-powered virtual assistant for RKDF University students
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* CARD */}
          {[
            {
              id: "student",
              title: "🎓 Student Friendly",
              text:
                "Specially designed for RKDF students to access academic help, notices, exam info, and campus support instantly."
            },
            {
              id: "ai",
              title: "🤖 AI Chatbot",
              text:
                "Ask questions in natural language and get instant, intelligent responses powered by AI."
            },
            {
              id: "secure",
              title: "🔒 Secure Access",
              text:
                "Authentication-based access ensures privacy, security, and personalized experience for each student."
            }
          ].map((card) => (
            <div
              key={card.id}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl
              border border-white/10 hover:scale-105 transition-transform"
            >
              <h3 className="font-semibold text-xl">{card.title}</h3>

              {/* Learn more */}
              <button
                onClick={() => toggleCard(card.id)}
                className="mt-3 text-yellow-400 text-sm underline"
              >
                Learn more
              </button>

              {/* ACCORDION */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out
                ${activeCard === card.id ? "max-h-40 mt-3" : "max-h-0"}`}
              >
                <p className="text-sm text-gray-300">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleStartChat}
            className="px-10 py-4 rounded-full font-semibold text-black text-lg
              bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
              shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:scale-105 transition"
          >
            Start Chat 🚀
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-10 py-4 rounded-full font-semibold text-white text-lg
              border border-white/30 hover:bg-white/10 transition"
          >
            New user? Sign up ✨
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} MyRKDF Saarthi made with ❤ by Neha Singh
        </p>
      </div>
    </div>
  );
}
