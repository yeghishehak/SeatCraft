import styles from "./store.module.css";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import {useRef, useEffect} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Store({style}) {
    const titleRef = useRef(null)
    const imagesRef = useRef(null)

    useEffect(() => {
        const title = titleRef.current;

        gsap.fromTo (
            title,
            { opacity: 0, filter: "blur(10px)"},
            {
                opacity: 1,
                filter: "blur(0px)",
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                }
            }
        )

        const images = imagesRef.current.children

        Array.from(images).forEach((image, index) => {
            gsap.fromTo (
                image,
                {opacity: 0, filter: "blur(10px)", y: 100},
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                    scrollTrigger: {
                        trigger: image,
                        start: "top 105%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        })
    }, [])

    return (
        <div className={styles.store} style={style}>
            <h1 ref={titleRef} className={styles.title}>Top Sales</h1>

            <div className={styles.items}>
                <div ref={imagesRef} className={styles.itemsImageContainer}>
                    <Link to="/product/regal-lounger">
                        <img draggable="false" src="/store/Item1.png" alt="Image 1" className={`${styles.itemImage} ${styles.itemImage1}`} />
                    </Link>
                    <Link to="/product/auracurve">
                        <img draggable="false" src="/store/Item2.png" alt="Image 2" className={`${styles.itemImage} ${styles.itemImage2}`} />
                    </Link>
                    <Link to="/product/miraform">
                        <img draggable="false" src="/store/Item3.png" alt="Image 3" className={`${styles.itemImage} ${styles.itemImage3}`} />
                    </Link>
                    <Link to="/product/modulux">
                        <img draggable="false" src="/store/Item4.png" alt="Image 4" className={`${styles.itemImage} ${styles.itemImage4}`} />
                    </Link>
                    <Link to="/product/velvet-crest">
                        <img draggable="false" src="/store/Item5.png" alt="Image 5" className={`${styles.itemImage} ${styles.itemImage5}`} />
                    </Link>
                    <Link to="/product/vivoseat">
                        <img draggable="false" src="/store/Item6.png" alt="Image 6" className={`${styles.itemImage} ${styles.itemImage6}`} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Store;