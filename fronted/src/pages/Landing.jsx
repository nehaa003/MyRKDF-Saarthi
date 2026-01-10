import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import robotAnimation from "../assets/robot.json";

function Landing() {
  const navigate = useNavigate();
  const [openCard, setOpenCard] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  /* 🌌 PARALLAX (mouse + scroll) */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      document.documentElement.style.setProperty("--px", `${x}px`);
      document.documentElement.style.setProperty("--py", `${y}px`);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty("--sy", `${scrollY * 0.15}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cards = [
    {
      title: "🎓 Student Friendly",
      desc: "Our chatbot is designed keeping students in mind. Easy to use and provides quick access to all university-related queries.",
    },
    {
      title: "⚡ Instant Responses",
      desc: "Get real-time answers to your questions. No waiting, no confusion – instant guidance for everything from fees to courses.",
    },
    {
      title: "🔒 Reliable Information",
      desc: "All responses are pulled from verified university data. Trustworthy information for students, faculty, and visitors alike.",
    },
  ];

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden flex flex-col relative"
      style={{
        backgroundImage: `
          radial-gradient(circle at top left, rgba(168,85,247,0.35), transparent 40%),
          radial-gradient(circle at bottom right, rgba(59,130,246,0.35), transparent 40%),
          linear-gradient(to bottom right, #05020d, #1a0b3a, #0b1c3d)
        `,
      }}
    >
      {/* 🌌 GALAXY PARALLAX LAYERS */}
      <div className="galaxy galaxy-back"></div>
      <div className="galaxy galaxy-mid"></div>
      <div className="galaxy galaxy-front"></div>

      {/* HERO */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <div className="text-7xl md:text-8xl mt-6 mb-4 drop-shadow-lg">
          🤖
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          MyRKDF Saarthi
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-12">
          Your smart AI assistant for RKDF University ✨  
          Get instant answers about courses, fees, events & more 🚀
        </p>

        <div className="flex gap-4 flex-wrap justify-center z-10">
          <button
            onClick={() => navigate("/chat")}
            className="
              relative bg-gradient-to-r from-cyan-400 to-blue-500
              text-black px-10 py-3 rounded-full text-lg font-semibold
              transition-all duration-300
              hover:scale-110
              hover:shadow-[0_0_40px_rgba(59,130,246,0.9)]
              shadow-[0_0_28px_rgba(59,130,246,0.7)]
            "
          >
            Start Chatting
          </button>

          <button
            onClick={() => setShowAbout(!showAbout)}
            className="border border-white/40 px-8 py-3 rounded-full hover:bg-white/10 transition hover:scale-105"
          >
            About
          </button>
        </div>

        {/* LOTTIE */}
        <div className="hidden md:block absolute right-0 bottom-0 w-[22rem] opacity-90 pointer-events-none">
          <Lottie animationData={robotAnimation} loop />
        </div>
      </section>

      {/* ABOUT */}
      {showAbout && (
        <section className="relative z-10 pt-14 pb-20 px-6 bg-black/40 backdrop-blur-md animate-fadeIn">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              About MyRKDF Saarthi
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              MyRKDF Saarthi is an AI-powered university assistant designed to help
              students, faculty and visitors get accurate information in seconds.
              Whether it’s admissions, fees, courses or campus events – just ask
              and Saarthi will guide you.
            </p>

            <div className="mt-14 grid md:grid-cols-3 gap-8">
              {cards.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setOpenCard(openCard === i ? null : i)}
                  className="
                    relative cursor-pointer p-6 rounded-2xl
                    bg-white/5 backdrop-blur-xl border border-white/10
                    transition-all duration-300
                    hover:scale-[1.05]
                    shadow-[0_15px_40px_rgba(0,0,0,0.7)]
                    hover:shadow-[0_0_50px_rgba(168,85,247,0.65)]
                  "
                >
                  <p className="text-lg font-semibold">{item.title}</p>

                  {openCard === i && (
                    <div className="absolute inset-0 bg-black/90 p-6 rounded-2xl
                    flex items-center justify-center text-center animate-fadeIn z-20">
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-6 text-gray-400 bg-black/60">
        © 2026 RKDF University <br />
        <span className="text-sm">
          Made with 💙 by <span className="text-purple-400 font-medium">Neha Singh</span>
        </span>
      </footer>

      {/* 🌠 STYLES */}
      <style>
        {`
          :root {
            --px: 0px;
            --py: 0px;
            --sy: 0px;
          }

          .galaxy {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
          }

          .galaxy-back {
            background-image: radial-gradient(#ffffff22 1px, transparent 1px);
            background-size: 140px 140px;
            transform: translate(calc(var(--px) * 0.2), calc(var(--py) * 0.2))
                       translateY(calc(var(--sy) * 0.2));
          }

          .galaxy-mid {
            background-image: radial-gradient(#a855f744 1px, transparent 1px);
            background-size: 100px 100px;
            transform: translate(calc(var(--px) * 0.4), calc(var(--py) * 0.4))
                       translateY(calc(var(--sy) * 0.35));
          }

          .galaxy-front {
            background-image: radial-gradient(#3b82f655 1px, transparent 1px);
            background-size: 70px 70px;
            transform: translate(calc(var(--px) * 0.6), calc(var(--py) * 0.6))
                       translateY(calc(var(--sy) * 0.5));
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.35s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Landing;
