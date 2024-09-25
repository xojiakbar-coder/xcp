import Head from "next/head";
import { useEffect } from "react";
import pagesData from "@/utils/pages";
import Footer from "@/components/Footer/page";
import Navbar from "../components/Navbar/page";
import { Element as ScrollElement } from "react-scroll";
import { DrawerProvider } from "@/context/DrawerContext";
import Drawer from "@/components/Navbar/drawer";

export default function Home() {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return (
    <DrawerProvider>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Xojiakbar Isroilov</title>
      </Head>

      <Navbar />
      <Drawer />
      <div className="w-full">
        {pagesData &&
          pagesData.map((page) => {
            const { id, element: Section, path } = page;

            return (
              <ScrollElement name={path} key={id}>
                <Section />
              </ScrollElement>
            );
          })}
      </div>
      <Footer />
    </DrawerProvider>
  );
}
