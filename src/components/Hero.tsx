"use client"
import { useEffect, useRef } from "react"

function Hero() {

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 3
  }, [])

  return (
    <section id='hero' >
      <div className=" ">
        <h1>Mac Book Pro</h1>
        <img className='mx-auto w-2/3' src="title.png" alt="title" />
        <video ref={videoRef} className='mx-auto' src="videos/hero.mp4" autoPlay muted />
        <button>Buy</button>
        <p>Buy for $1599 Or $ 1333</p>
      </div>
    </section>
  )
}

export default Hero