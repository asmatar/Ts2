import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/UI/Header.tsx";
import Footer from "./components/UI/Footer.tsx";
import Home from "./pages/Home.tsx";
import PostDetails from "./pages/PostDetails.tsx";
import FormPost from "./pages/FormPost.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postid" element={<PostDetails />} />
        <Route path="/createPost" element={<FormPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
