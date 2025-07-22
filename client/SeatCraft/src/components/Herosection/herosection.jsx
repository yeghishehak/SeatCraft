import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./herosection.module.css";

function HeroSection() {
  const lettersRef = useRef(null);
  const comfortRef = useRef(null);
  const exploreRef = useRef(null)

  const sentence = "The Only Way to Have ";
  const comfort = "Comfort";

  useEffect(() => {
    // Animate all children span elements inside the container
    gsap.fromTo(
      lettersRef.current.children,
      { opacity: 0, filter: "blur(10px)", top: "20px", position: "relative" },
      { opacity: 1, filter: "blur(0px)", top: "0px", duration: 0.5, stagger: 0.05, delay: 0.2, ease: "power1.out"}
    );

    gsap.fromTo (
      comfortRef.current,
      {opacity: 0, filter: "blur(10px)", position: "relative", top: 50},
      {opacity: 1, filter: "blur(0px)", top: 0, delay: 1.1, duration: 1, ease: "power1.out"}
    )

    gsap.fromTo (
      exploreRef.current,
      { opacity: 0},
      { opacity: 1, delay: 1.5, duration: 1, ease: "power1.out", cursor: "pointer"}
    )
  }, []);

  return (
    <div className={styles.herosectionDiv}>
      <div className={styles.herosectionTextDiv}>
        <h1 className={styles.h1}>
          <span ref={lettersRef}>
            {sentence.split("").map((letter, i) => (
              <span key={i} className={styles.letter}>
                {letter}
              </span>
            ))}
          </span>
          <br />
          <span ref={comfortRef} className={styles.span}>{comfort}</span>
        </h1>
        <button
          ref={exploreRef}
          onClick={() => window.scrollBy({ top: 700, behavior: "smooth" })}
          className={styles.button}
        >
          <span className={styles.exploreSpan}>Explore</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
