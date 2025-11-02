import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProductCanvas from "@/components/ProductCanvas";
import CanvasContext from "@/context/canvasContext";
import gsap from "gsap";
import {ScrollTrigger }from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  return (
    <CanvasContext>


      <main  >
        <NavBar />
        <Hero />
        <ProductCanvas />
      </main>

    </CanvasContext>
  );
}
