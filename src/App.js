import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div>
      <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
