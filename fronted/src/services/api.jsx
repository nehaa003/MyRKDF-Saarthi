import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/bot/v1`,
  withCredentials: true
});

export const sendMessage = async (message) => {
  try {
    const res = await api.post("/message", { message });
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    return { reply: "Server error, please try again later." };
  }
};
