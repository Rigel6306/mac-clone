
'use client'
import { useCanvasContext } from "@/hooks/useCanvasContext";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import MacbookModel14 from './models/Macbook-14'
import StudioLights from "./three/studioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";
const ProductCanvas = () => {
    const { color, setColor, scale, setScale, reset } = useCanvasContext()
    const isMobile = useMediaQuery({query:'(max-width:1024px)'})
    return (
        <section id="productCanvas" className="">
            <h1 className="text-6xl font-semibold">Take a closer Loook</h1>
            <div className="controls  ">
                <p>MacBook Pro 16&quot; in Silver / Space Black </p>

                <div className="colorControlerContainer ">
                    <div className="colorControler">
                        <div className={`silver  ${clsx('bg-neutral-300',color === '#adb5bd'&& 'activeColor' )}`}  
                            onClick={()=>setColor("#adb5bd")}
                        />
                         <div className={`spaceBlack  ${clsx('bg-neutral-900',color === '#2e2c2e'&& 'activeColor' )}`}  
                            onClick={()=>setColor("#2e2c2e")}
                        />
                    </div>
                    <div className="sizeControlerContainer">  
                        <div className={`silver ${clsx(scale===0.01 ? ' bg-white text-black': 'bg-transparent text-white' )}`} 
                        onClick={()=>setScale(0.01)}
                        ><p>14&quot;</p> </div>
                        <div className={`silver ${clsx(scale===0.08?' bg-white text-black': 'bg-transparent text-white' )}`} 
                        onClick={()=>setScale(0.08)}
                        ><p>16&quot;</p> </div>
                    </div>
                </div>
            </div>
            <Canvas id="canvas" camera={{position:[0,2,5],fov:50,near:0.1,far:100}} gl={{antialias:true}} dpr={[1,2]}>
                <StudioLights/>
                {/* <MacbookModel14 scale={0.1} position={[0,0,0]}/> */}
                {/* <OrbitControls enableZoom={false}/> */}
                <ModelSwitcher scale={isMobile?scale - 0.03 :scale} isMobile={isMobile}/>
            </Canvas>
        </section>
    );
}

export default ProductCanvas;