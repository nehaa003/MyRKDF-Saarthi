import axios from "axios";

// 🔹 Read API URL from Vite environment variable
const BASE_URL = import.meta.env.VITE_API_URL;

// 🔹 Safety check (helps during debugging)
if (!BASE_URL) {
  console.error(
    "❌ VITE_API_URL is not defined. Please set it in Vercel Environment Variables."
  );
}

// 🔹 Create axios instance
const api = axios.create({
  baseURL: `${BASE_URL}/bot/v1`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// 🔹 Optional: Request logger (safe in production)
api.interceptors.request.use(
  (config) => {
    // console.log("➡️ API Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Optional: Response / Error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(
        "❌ API Response Error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("❌ No response from server:", error.request);
    } else {
      console.error("❌ API Setup Error:", error.message);
    }
    return Promise.reject(error);
  }
);

// 🔹 Send message to chatbot
export const sendMessage = async (message) => {
  try {
    const res = await api.post("/message", { message });
    return res.data;
  } catch (error) {
    return {
      reply: "Server error. Please try again later.",
    };
  }
};

export default api;
