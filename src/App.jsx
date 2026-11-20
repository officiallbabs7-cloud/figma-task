import HeroStage from "./components/HeroStage";
import About from "./components/About";
import Features from "./components/Features";
import Checkout from "./components/Checkout";
import HowTo from "./components/HowTo";
import Customers from "./components/Customers";
import BlogFooter from "./components/BlogFooter";

export default function App() {
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