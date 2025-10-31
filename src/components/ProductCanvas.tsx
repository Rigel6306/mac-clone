
'use client'
import { useCanvasContext } from "@/hooks/useCanvasContext";
import { useState } from "react";
const ProductCanvas = () => {

    const {color,scale,reset} = useCanvasContext()
    console.log(color,scale)
    const [controlerColort, setControlerColor] = useState('silver')

    const handleColorControls = ()=>{
        setControlerColor(prev=>prev!=='silver'?'silver':'space')
        
    }

    console.log(controlerColort)
    return (

        <section id="productCanvas" className="min-h-[93vh] relative flex justify-center mt-10">

            <h1 className="text-6xl font-semibold">Take a closer Loook</h1>

            <div className="controls absolute bottom-40 font-semibold flex flex-col items-center ">
                <p>MacBook Pro 16" in Silver / Space Black </p>

                <div className="colorControlerContainer flex justify-center mt-5 gap-5">
                    <div className="colorControler flex justify-center w-40 rounded-full gap-5 bg-gray-600 p-5 ">
                        <div className="silver bg-neutral-300 h-10 w-10  rounded-full cursor-pointer" onClick={handleColorControls}></div>
                        <div className="spaceBlack bg-neutral-900  h-10 w-10 rounded-full cursor-pointer "></div>
                    </div>
                    <div className="colorControler flex justify-center w-40 rounded-full gap-5 bg-gray-600 p-5 ">
                        <div className="silver bg-neutral-300 h-10 w-10 flex items-center justify-center  rounded-full cursor-pointer" onClick={handleColorControls}><p>14"</p> </div>
                        <div className="spaceBlack bg-neutral-900 flex items-center justify-center  h-10 w-10 rounded-full cursor-pointer "> <p>16"</p></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ProductCanvas;