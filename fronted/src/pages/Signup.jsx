import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const galaxyBg = {
  backgroundImage: `
    radial-gradient(circle at top left, rgba(168,85,247,0.35), transparent 40%),
    radial-gradient(circle at bottom right, rgba(59,130,246,0.35), transparent 40%),
    linear-gradient(to bottom right, #05020d, #1a0b3a, #0b1c3d)
  `,
};

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔒 Validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4002/auth/signup",
        form
      );

      if (res.data.success) {
        alert("Signup successful");
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white"
      style={galaxyBg}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl w-96 space-y-4 border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
      >
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-red-400 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
          Create Account
        </h2>

        <input
          placeholder="Name"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="submit"
          className="w-full py-3 rounded-full font-semibold text-black bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-yellow-400 cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
