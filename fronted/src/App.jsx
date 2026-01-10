import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Chatpage from "./pages/Chatpage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chatpage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
