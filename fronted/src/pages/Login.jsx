import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await api.post("/auth/login", {
        email,
        password
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/chat");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl w-96 space-y-4 border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)]">

        <h2 className="text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-2">
          <span style={{ color: "initial" }}>🔐</span>
          <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Login
          </span>
        </h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-full font-semibold text-black
            bg-gradient-to-r from-red-400 via-yellow-400 to-orange-500
            shadow-[0_0_20px_rgba(251,191,36,0.6)]"
        >
          Login
        </button>
      </div>
    </div>
  );
}
