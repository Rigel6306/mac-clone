
import { canvasContext } from "@/context/canvasContext"
import { useContext } from "react"
export const useCanvasContext = ()=>{
    const context = useContext(canvasContext);
    if(!context) throw Error("Context is not within the context boundary")
    return context
}
