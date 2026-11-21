import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useLayout from "./useLayout";
import MobilePage from "./components/MobilePage";
import TabletPage from "./components/TabletPage";
import HeroStage from "./components/HeroStage";
import About from "./components/About";
import Features from "./components/Features";
import Checkout from "./components/Checkout";
import HowTo from "./components/HowTo";
import Customers from "./components/Customers";
import BlogFooter from "./components/BlogFooter";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

function Home() {
  const layout = useLayout();
  if (layout === "phone") return <MobilePage />;
  if (layout === "tablet") return <TabletPage />;
  return (
    <>
      <HeroStage />
      <About />
      <Features />
      <Checkout />
      <HowTo />
      <Customers />
      <BlogFooter />
    </>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const go = () => document.querySelector(hash)?.scrollIntoView();
      go();
      setTimeout(go, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

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