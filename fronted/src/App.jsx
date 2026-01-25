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

export default App;  // 🔑 THIS MUST EXIST
