'use client'
import { performanceImages,performanceImgPositions } from "@/const/constents";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Performence = () => {
     const sectionRef = useRef<HTMLElement>(null)

     useGSAP(()=>{
            const timeline = gsap.timeline({
                defaults:{ease:'power1.inOut',duration:2, overwrite:'auto'},
                scrollTrigger:{
                    trigger:sectionRef.current,
                    start:'top bottom',
                    end:'bottom top',
                    scrub:true,
                    invalidateOnRefresh:true
                }
            })

             performanceImgPositions.forEach((item) => {
                if (item.id === "p5") return;

                const selector = `.${item.id}`;
                const vars: gsap.TweenVars = {};

                if (typeof item.left === "number") vars.left = `${item.left}%`;
                if (typeof item.right === "number") vars.right = `${item.right}%`;
                if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

                if (item.transform) vars.transform = item.transform;

                timeline.to(selector, vars, 0);
            })
     },[])

    return ( 
    <section id="performence"  ref={sectionRef}>
        <h2>Next Level Graphics Performence, Game On</h2>
        <div className="wrapper">
            {
                performanceImages.map(({id,src})=>(
                    <img className={id} key={id} src={src} alt={id} />
                ))
            }


        </div>
    </section> 
    );
}
 
export default Performence;