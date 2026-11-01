import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProductCanvas from "@/components/ProductCanvas";
import CanvasContext from "@/context/canvasContext";
import Showcase from "@/components/Showcase";
import Performence from "@/components/Performence";
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
        <Showcase/>
        <Performence/>
      </main>

    </CanvasContext>
  );
}
