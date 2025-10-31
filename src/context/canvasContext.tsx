'use client'
import { createContext,ReactNode,useState } from "react"
 

 type CanvasContextType = {
    color:string;
    setColor:React.Dispatch<React.SetStateAction<string>>;
    scale:number;
    setScale:React.Dispatch<React.SetStateAction<number>>;
    reset:()=>void;
 }

 export const canvasContext = createContext<CanvasContextType> ({
  color: '#2e2c2e',
  setColor: () => {},
  scale: 0.08,
  setScale: () => {},
  reset: () => {},
});
const CanvasContext = ({children}:{children:ReactNode}) => {

  const [color, setColor] = useState('#2e2c2e');
  const [scale,setScale] = useState(0.08);

  const reset = ()=>{
    setColor('#2e2c2e')
    setScale(0.08)
  }


    return ( 
        <canvasContext.Provider value={{color,setColor,scale,setScale,reset}}>
                {children}
        </canvasContext.Provider>
     );
}
 
export default CanvasContext;