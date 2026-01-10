import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4002/bot/v1", // backend URL
});

export const sendMessage = async (message) => {
  try {
    const res = await api.post("/message", { message });
    return res.data; // { reply: "...", category: "..." }
  } catch (error) {
    console.error("API Error:", error);
    return { reply: "Server error, please try again later." };
  }
};
