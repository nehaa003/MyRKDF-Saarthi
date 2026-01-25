import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Chatpage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {/* 👇 tumhara existing chat UI yahin rahega */}
    </div>
  );
}
