import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ProductCanvas from "@/components/ProductCanvas";
import CanvasContext from "@/context/canvasContext";
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
