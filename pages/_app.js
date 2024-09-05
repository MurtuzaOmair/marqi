import "@/styles/globals.css";
import SmoothScrolling from "@/context/pageContext";
import { useEffect } from "react";
import { loadIonicons } from "@/utils/LoadIonicons";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    loadIonicons();
  }, []);

  return (
    <SmoothScrolling>
      <Component {...pageProps} />
    </SmoothScrolling>
  );
}
