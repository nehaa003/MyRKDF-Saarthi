import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "../components/Chat";

export default function Chatpage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Chat /> {/* Your chat component */}
    </div>
  );
}
