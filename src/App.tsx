import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/UI/Header.tsx";
import Footer from "./components/UI/Footer.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<div>Other</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
