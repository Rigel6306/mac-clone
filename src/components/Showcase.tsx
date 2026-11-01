'use client'
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import clsx from "clsx";
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
   const isTablet = useMediaQuery({query:'(max-width:1024px)'})
 
  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".mediaContent",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        
        },
      });

      timeline.to(".cutoutContainer img", {
        transform:('scale(1.1)')

      }).to('.content',{opacity:1,y:0,ease:'power1.in'})
    }

 

  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="mediaContent ">
        <video
          className="object-cover object-center"
          src="videos/game.mp4"
          loop
          autoPlay
          muted
        ></video>
        <div className="cutoutContainer ">
          <img
            
            src="mask-logo.svg"
            alt="mask"
          />
        </div>
      </div>
      <div className="content relative z-10 my-5 lg:-mt-40 bg-black font-semibold text-xl text-dark-100 lg:opacity-0">
        <div className="wraper flex justify-center items-center ">
          <div className=" max-w-md">
              <h1 className="text-6xl">Rocket Chip</h1>
              <p className="mt-4" >Introducing <span className="font-bold">M4, the next generation of Apple Silicon.</span> M4 powers</p>

              <p>It drives Apple Intelligence on Ipad Pro, so you can write,create and accomplish more with ease.
                All in a design that's unbelievabaly thin,light,and powerfull.
              </p>

              <p>A brand-new display engine delivers breathtaking precision,color,accurecy, and brightness. And a next0gen GPU with harware accelerated ray tracing brings console-level graphics to your fingertip</p>
              <p><a href="">Learn more about Apple intelligence</a></p>
          </div>
          <div className="chipPerformence   items-start space-y-2">
            <p >Up to </p>
            <h2 className="text-4xl">4x faster</h2>
            <p >Pro Renderince Performence than M2
              Up to</p>
            <p >Up to </p>
            <h2 className="text-4xl">1.5x faster</h2>
            CPU performence than M2
            <p > Up to</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
