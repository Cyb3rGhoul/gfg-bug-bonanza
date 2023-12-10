import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Question from "./Question";
import Answer from "./Answer";
import "./App.css";
import ParticleBg from "./Particlebg";


function App() {
  return (
    <>
    <ParticleBg/>
      <Router>
        <Routes>
          <Route path="/question/:id" element={<Question />} />
          <Route path="/answer/:id" element={<Answer />} />
          <Route path="/" element={<Question />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
