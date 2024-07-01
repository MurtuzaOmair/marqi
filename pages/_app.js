import "@/styles/globals.css";
import "../styles/golden/stylesheet.css";
import "../styles/monteserrat/stylesheet.css";
import SmoothScrolling, { PageProvider } from "@/context/pageContext";
import Cursor from "@/components/Cursor";
import { useEffect, useLayoutEffect } from "react";
import { loadIonicons } from "@/utils/LoadIonicons";
// import Template from "@/context/template";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    loadIonicons();
  }, []);

  return (
    // <Template>
    <SmoothScrolling>
      <Component {...pageProps} />
      {/* <Cursor /> */}
      {/* </Template> */}
    </SmoothScrolling>
  );
}
