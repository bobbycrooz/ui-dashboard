"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Hero () {
  const bgImage = useRef(null);
  const introImage = useRef(null);

  // useEffect(() => {
  //   gsap.to(boxTwp.current, { x: 300 });
  //   gsap.to(boxRef.current, { x: 600 });
  //   gsap.from(boxThree.current, { x: 900 });

  //   return () => {

  //   };
  // }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500",
        id: "my-scrool",
        scrub: 0.5
      }
    });

    tl.from(bgImage.current, { clipPath: "inset(15%)" });
    tl.to(introImage.current, { height: "400px" }, 0);
  });

  return (
    <section className="w-screen min-h-screen relative bg-primary">

      <div ref={bgImage} className="hero-bg w-screen h-[150vh] relative filter brightness-[40%]">
        <Image src="/webP/laptop.webp" fill className="object-cover" alt={"bg-image"}/>
      </div>

      <div className="intro-center absolute top-1/2 -translate-y-1/2 w-screen centered">
        <div ref={introImage} className="intro-center-image w-[300px] h-[500px] relative filter brightness-[70%] mx-auto" data-scroll data-scroll-speed="0.2">
          <Image src="/webP/hero-1.webp" fill className="object-cover"  alt={""}/>
        </div>

        <p className="hero-text uppercase text-[72px] font-semibold absolute  text-center text-white " data-scroll data-scroll-speed="0.6">
          welcome to smooth scrolling
        </p>
      </div>
    </section>
  );
}
