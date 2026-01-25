import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "../components/Chat";

export default function Chatpage() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      // ✅ allow chat ONLY after auth confirmed
      setAuthorized(true);
    }
  }, [navigate]);

  // ⛔ prevent Chat from rendering early
  if (!authorized) {
    return null; // or loader if you want later
  }

  return (
    <div className="min-h-screen">
      <Chat />
    </div>
  );
}
