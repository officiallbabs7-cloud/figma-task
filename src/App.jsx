import { Routes, Route } from "react-router-dom";
import { ScrollManager } from "./components";
import { BlogList, BlogPost } from "./pages/Blog";
import { Home } from "./pages/Home";

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
