import { useEffect } from "react";
import { connectWithWebSocket } from "./utils/wsConnection/wsConnection";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import LoginPage from "./components/loginpage";

function App() {
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
