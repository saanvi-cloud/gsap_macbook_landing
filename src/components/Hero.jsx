import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if(videoRef.current) videoRef.current.playbackRate = 2;
  }, []);
  return (
    <section id='hero'>
      <div>
        <h1>Macbook Pro</h1>
        <img src="/gsap_macbook_landing/title.png" alt='MacBook Title' />
      </div>

      <video src="/gsap_macbook_landing/videos/hero.mp4" autoPlay muted playsInline />
      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero