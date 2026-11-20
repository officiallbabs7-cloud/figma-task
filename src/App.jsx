import useIsMobile from "./useIsMobile";
import MobilePage from "./components/MobilePage";
import HeroStage from "./components/HeroStage";
import About from "./components/About";
import Features from "./components/Features";
import Checkout from "./components/Checkout";
import HowTo from "./components/HowTo";
import Customers from "./components/Customers";
import BlogFooter from "./components/BlogFooter";

export default function App() {
  const mobile = useIsMobile();

  if (mobile) return <MobilePage />;

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