import "@/styles/globals.css";
import SmoothScrolling from "@/context/pageContext";
import { useEffect } from "react";
import { loadIonicons } from "@/utils/LoadIonicons";
import "../styles/golden/stylesheet.css";
import "../styles/monteserrat/stylesheet.css";

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
