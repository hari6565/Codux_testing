import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import LoginForm from "./component/LoginForm.tsx";
import About from "./component/About.tsx";

export default function App() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  return (
    <div>
      <Router>
        {/* Use Routes instead of Switch */}
        <Routes>
          <Route
            path="/"
            element={<LoginForm state={state} setState={setState} />}
          />
          <Route path="/about" element={<About state={state} />} />
        </Routes>
      </Router>
    </div>
  );
}
