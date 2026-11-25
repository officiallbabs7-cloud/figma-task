import { useLayout } from "../../hooks";
import {
  About,
  BlogFooter,
  Checkout,
  Customers,
  Features,
  HeroStage,
  HowTo,
  MobilePage,
  TabletPage,
} from "./components";

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
