"use-client"
import React from 'react'

function Hero() {
  return (
    <section id='hero'> 
            <div className="">
                <h1>Mac Book Pro</h1>
                <img className='w-screen' src="title.png" alt="title" />
                <video className='w-screen' src="videos/hero.mp4" autoPlay muted />
            </div>
    </section>
  )
}

export default Hero