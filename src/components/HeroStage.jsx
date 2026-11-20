import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const W = 1440;
const H = 1000;

const getSize = () => {
  const cw = document.documentElement.clientWidth;
  const s = Math.min(cw / W, window.innerHeight / H);
  return { s, stageW: cw / s };
};

export default function HeroStage() {
  const [{ s, stageW }, setSize] = useState(getSize);

  useEffect(() => {
    const update = () => setSize(getSize());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-brand"
      style={{
        height: H * s,
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
      }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: stageW, height: H, transform: `scale(${s})` }}
      >
        <Navbar />
        <Hero />
      </div>
    </section>
  );
}