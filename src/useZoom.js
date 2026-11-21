import { useEffect, useState } from "react";

const calc = () => document.documentElement.clientWidth / 768;

export default function useZoom() {
  const [z, setZ] = useState(calc);

  useEffect(() => {
    const update = () => setZ(calc());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return z;
}