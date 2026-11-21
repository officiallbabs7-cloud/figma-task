import { useEffect, useState } from "react";

const calc = () => {
  const w = window.innerWidth;
  return w < 640 ? "phone" : w < 1024 ? "tablet" : "desktop";
};

export default function useLayout() {
  const [layout, setLayout] = useState(calc);

  useEffect(() => {
    const update = () => setLayout(calc());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return layout;
}