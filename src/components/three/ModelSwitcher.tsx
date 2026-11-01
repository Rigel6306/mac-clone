import { PresentationControls } from "@react-three/drei";
import type { ComponentProps } from "react";
import { useRef } from "react";
import { Group, Mesh } from "three";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTENCE = 9;

const fadeMeshes = (group: Group | null, opacity: number) => {
    if (!group) return;
    group.traverse((child) => {
        if (child instanceof Mesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
        }
    });
};

const moveGroup = (group: Group | null, x: number) => {
    if (!group) return;
    gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

type ModelSwitcherProps = {
    scale: number;
    isMobile: boolean;
};

function ModelSwitcher({ scale, isMobile }: ModelSwitcherProps) {
    const smallMacBookRef = useRef<Group>(null);
    const largeMacBookRef = useRef<Group>(null);

    const showLargeMacBook = scale ===0.08 || scale===0.05

    useGSAP(()=>{
        if(showLargeMacBook){
        moveGroup(smallMacBookRef.current,-OFFSET_DISTENCE)
        moveGroup(largeMacBookRef.current,0)

        fadeMeshes(smallMacBookRef.current,0)
        fadeMeshes(largeMacBookRef.current,1)
    }else{
         moveGroup(smallMacBookRef.current,0)
        moveGroup(largeMacBookRef.current,OFFSET_DISTENCE)

        fadeMeshes(smallMacBookRef.current,1)
        fadeMeshes(largeMacBookRef.current,0)
    }
    },[scale])


    const controlsConfig = {
        snap:true,
        speed:1,
        zoom:1,
        polar:[-Math.PI,Math.PI] as const,
        azimuth:[-Infinity,Infinity] as const,
    } satisfies ComponentProps<typeof PresentationControls>;
  return (
   <>
   <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
            <MacbookModel16 scale={isMobile?0.05:0.08}/>
        </group>
   </PresentationControls>

    <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
            <MacbookModel14 scale={isMobile?0.03:0.06}/>
        </group>
   </PresentationControls>
   </>
  )
}

export default ModelSwitcher