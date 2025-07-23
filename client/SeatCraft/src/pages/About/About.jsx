import styles from './about.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef, useEffect} from 'react'

gsap.registerPlugin(ScrollTrigger);

function About({style, aboutText}) {

    const contentRef = useRef(null);

    const titleRef1 = useRef(null)
    const titleRef2 = useRef(null)

    const advantagesRef = useRef(null)

    useEffect(() => {
        const el = contentRef.current.children;

        gsap.fromTo(
        el,
        { x: -100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            },
        }
        );

        const title1 = titleRef1.current;
        const title2 = titleRef2.current;

        [title1, title2].forEach(el => {
        gsap.fromTo(
            el,
            { opacity: 0, filter: "blur(10px)" },
            {
            opacity: 1,
            filter: "blur(0px)",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
            }
            }
        );
        });

        const advantages = advantagesRef.current.children;

        Array.from(advantages).forEach((advantage, index) => {
        gsap.fromTo(
            advantage,
            { opacity: 0, scale: 0.8, filter: "blur(10px)" },
            {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            delay: index * 0.15, // optional stagger-like effect
            ease: "power2.out",
            scrollTrigger: {
                trigger: advantage,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
            }
        );
        });

    }, []);

    return (
        <div className={styles.aboutDiv} style={style}>
            {aboutText &&
                <h1 ref={titleRef1} className={styles.title}>About Us</h1>
            }

            <div ref={contentRef} className={styles.contentDiv}>
                <div className={styles.imageDiv}>
                    <img draggable="false" className={styles.image} src="/aboutImage.png" alt="About Image" />
                </div>

                <div className={styles.textDiv}>
                    <p className={styles.text}>At <span className={styles.span}>SeatCraft</span>, we believe that a chair is more than just a seat — it’s where ideas are born, work gets done, and relaxation begins. That’s why we blend ergonomic design, quality materials, and stylish aesthetics to craft chairs that support your lifestyle. Whether you're working, gaming, or relaxing, SeatCraft is where comfort meets purpose.</p>
                </div>
            </div>

            <div className={styles.advantagesDiv}>
                <h1 ref={titleRef2} className={styles.title}>Our Advantages</h1>

                <div ref={advantagesRef} className={styles.advantages}>
                    <div className={styles.advantage}>
                        <img draggable="false" className={styles.advantageImage} src="/advantages/advantage1.png" alt="Quality" />
                        <h2 className={`${styles.advantageTitle} ${styles.advantageTitle1}`}>High-Quality <br /> Materials</h2>
                        <p className={styles.advantageText}>Made from durable wood, premium leather/fabric, and top-grade foam.</p>
                    </div>

                    <div className={styles.advantage}>
                        <img draggable="false" className={styles.advantageImage} src="/advantages/advantage2.png" alt="Comfort" />
                        <h2 className={styles.advantageTitle}>Multy-<br /> Functional</h2>
                        <p className={styles.advantageText}>Reclining, adjustable, and foldable options for home, office, or outdoor use.</p>
                    </div>

                    <div className={styles.advantage}>
                        <img draggable="false" className={styles.advantageImage} src="/advantages/advantage3.png" alt="Style" />
                        <h2 className={styles.advantageTitle}>Trusted By <br /> Thousands</h2>
                        <p className={styles.advantageText}>Excellent reviews and repeat customers nationwide.</p>
                    </div>

                    <div className={styles.advantage}>
                        <img draggable="false" className={styles.advantageImage} src="/advantages/advantage4.png" alt="Customer Service" />
                        <h2 className={styles.advantageTitle}>Affordable <br /> Prices</h2>
                        <p className={styles.advantageText}>Competitive rates without compromising on quality.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;