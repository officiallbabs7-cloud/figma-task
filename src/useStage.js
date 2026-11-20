import { useEffect, useState } from "react";

export const W = 1440;
export const H = 1000; // hero height, keep the same as in HeroStage

const calc = () => {
  const cw = document.documentElement.clientWidth;
  const s = Math.min(cw / W, window.innerHeight / H);
  return { s, stageW: cw / s };
};

export default function useStage() {
  const [size, setSize] = useState(calc);

  useEffect(() => {
    const update = () => setSize(calc());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}