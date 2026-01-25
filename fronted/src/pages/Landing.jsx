import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleStartChat = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white
      bg-gradient-to-br from-gray-900 via-black to-gray-900">

      <div className="max-w-3xl text-center px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6
          bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
          text-transparent bg-clip-text">
          MyRKDF Saarthi
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          An AI-powered virtual assistant designed to help RKDF University
          students with academic queries, campus information, and instant support.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10">
            🎓 <h3 className="font-semibold mt-2">Student Friendly</h3>
            <p className="text-sm text-gray-300 mt-1">
              Built specially for RKDF University students.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10">
            🤖 <h3 className="font-semibold mt-2">AI Chatbot</h3>
            <p className="text-sm text-gray-300 mt-1">
              Get instant answers using AI-powered chat.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10">
            🔒 <h3 className="font-semibold mt-2">Secure Access</h3>
            <p className="text-sm text-gray-300 mt-1">
              Login required to ensure personalized and secure usage.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleStartChat}
          className="px-10 py-4 rounded-full font-semibold text-black text-lg
            bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
            shadow-[0_0_30px_rgba(251,191,36,0.6)]
            hover:scale-105 transition-transform"
        >
          Start Chat 🚀
        </button>

        {/* Footer text */}
        <p className="text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} MyRKDF Saarthi · RKDF University
        </p>
      </div>
    </div>
  );
}
