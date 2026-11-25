import { Routes, Route } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home/Home";
import BlogList from "./pages/Blog/BlogList";
import BlogPost from "./pages/Blog/BlogPost";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/post" element={<BlogPost />} />
      </Routes>
    </>
  );
}