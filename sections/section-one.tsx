"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function SectionOne () {
  const boxRef = useRef(null);
  const boxTwp = useRef(null);
  const boxContainter = useRef(null);
  const boxThree = useRef(null);
  const boxFour = useRef(null);
  const { contextSafe } = useGSAP();

  // useEffect(() => {
  //   gsap.to(boxTwp.current, { x: 300 });
  //   gsap.to(boxRef.current, { x: 600 });
  //   gsap.from(boxThree.current, { x: 900 });

  //   return () => {

  //   };
  // }, []);

  const onEnter = contextSafe(({ currentTarget }: never) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  });

  useGSAP(
    () => {
      // gsap code here...
      gsap.to(boxRef.current, {
        x: 200,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      }); // <-- automatically reverted
    },
    { scope: boxRef }
  );

  useGSAP(() => {
    // creating a tl
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxThree.current,
        scrub: 0.5,
        start: "top +=500",
        end: "bottom +=500",
        // markers: { startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20 },
      },
    });

    tl.to(boxTwp.current, { xPercent: 150 }).to(boxFour.current, { xPercent: 150 }, 2);
  });

  useGSAP(
    () => {
      // gsap code here...
      gsap.from(".box", {
        opacity: 0,
        stagger: 0.2,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      }); // <-- automatically reverted
    },
    { scope: boxContainter }
  );

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(boxFour.current, {
      scrollTrigger: {
        trigger: boxFour.current,
        scrub: true,
        start: "top +=500px",
        end: "bottom",
      },
      opacity: 0,
      scale: 0.8,
    });
  });

  return (
    <section className="w-screen min-h-screen p-20">
      <h1 className="header-one font-bold font-mono text-blue-700">Section One</h1>

      <div ref={boxRef} className="box bg-blue-400 w-[200px] h-[200px]"></div>
      <div ref={boxThree}  className="w-full flex justify-between relative">
        <div>
          <div ref={boxTwp} onClick={onEnter} className="box bg-red-400 w-[200px] h-[200px]"></div>
          <div className="box bg-green-400 w-[200px] h-[200px]"></div>
        </div>

        <div
          ref={boxFour}
          className="box bg-zinc-400 w-[500px] h-[500px] border-border absolute top-1/2 right-0 -translate-y-1/2"
        ></div>
      </div>

      <div ref={boxContainter} className="w-full gap-6 flex">
        <div className="box bg-purple-400 w-[200px] h-[200px]"></div>
        <div className="box bg-orange-400 w-[200px] h-[200px]"></div>
        <div className="box bg-fuchsia-400 w-[200px] h-[200px]"></div>
      </div>
    </section>
  );
}
