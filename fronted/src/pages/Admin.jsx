import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const API = "http://localhost:4002/admin"; // admin backend

  const login = () => {
    if (email && password) setUser({ email });
  };

  const logout = () => setUser(null);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(`${API}/questions`);
      setQuestions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addQuestion = async () => {
    try {
      await axios.post(`${API}/questions`, {
        question: newQuestion,
        answer: newAnswer,
        category: newCategory,
        isActive: true,
      });
      fetchQuestions();
      setNewQuestion(""); setNewAnswer(""); setNewCategory("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) fetchQuestions();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="mb-2 p-2 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 p-2 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
          onClick={login}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <button
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Add New Question</h2>
        <input
          type="text"
          placeholder="Question"
          className="p-2 rounded mr-2 text-black"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Answer"
          className="p-2 rounded mr-2 text-black"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          className="p-2 rounded mr-2 text-black"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          onClick={addQuestion}
        >
          Add
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Questions List</h2>
        <ul>
          {questions.map((q) => (
            <li key={q._id} className="mb-2 bg-gray-700 p-2 rounded flex justify-between">
              <span>
                <strong>[{q.category}]</strong> {q.question} → {q.answer}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
