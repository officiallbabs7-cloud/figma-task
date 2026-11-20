import { useEffect, useState } from "react";

const check = () => window.innerWidth < 1024;

export default function useIsMobile() {
  const [mobile, setMobile] = useState(check);

  useEffect(() => {
    const update = () => setMobile(check());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return mobile;
}