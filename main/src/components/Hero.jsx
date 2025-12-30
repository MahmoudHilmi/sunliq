import { useEffect, useRef } from "react";

export default function Hero() {

const videoRef = useRef();

useEffect(() => {
    if(videoRef.current) videoRef.current.playbackRate = 2
}, [])

  return (
    <section id="hero">
      <div>
        <h1>Sunliq V-1 Pro</h1>
       <h4>All out Pro.</h4>
      </div>

      <video className="w-auto h-[95%]" src="./vid1.webm" type="video/webm" autoPlay muted playsInline/>

      <button>Buy</button>

      <p>From $999 or $199/mo for 12 months</p>
    </section>
  );
}