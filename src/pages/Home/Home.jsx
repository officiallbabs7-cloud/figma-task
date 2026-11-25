import useLayout from "../../hooks/useLayout";
import MobilePage from "./components/MobilePage";
import TabletPage from "./components/TabletPage";
import HeroStage from "./components/HeroStage";
import About from "./components/About";
import Features from "./components/Features";
import Checkout from "./components/Checkout";
import HowTo from "./components/HowTo";
import Customers from "./components/Customers";
import BlogFooter from "./components/BlogFooter";

export default function Home() {
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