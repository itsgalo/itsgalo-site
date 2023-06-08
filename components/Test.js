import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Test() {
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here...
      gsap.to(".box", { rotation: "+=360", ease: "power2.inOut", repeat: -1, duration: 3 });
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="container">
      <div className="box">hello</div>
    </div>
  );
}