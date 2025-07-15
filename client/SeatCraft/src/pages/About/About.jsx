import styles from './about.module.css';

function About({style, aboutText}) {
    return (
        <div className={styles.aboutDiv} style={style}>
            {aboutText &&
                <h1 className={styles.title}>About Us</h1>
            }

            <div className={styles.contentDiv}>
                <div className={styles.imageDiv}>
                    <img draggable="false" className={styles.image} src="/aboutImage.png" alt="About Image" />
                </div>

                <div className={styles.textDiv}>
                    <p className={styles.text}>At <span className={styles.span}>SeatCraft</span>, we believe that a chair is more than just a seat — it’s where ideas are born, work gets done, and relaxation begins. That’s why we blend ergonomic design, quality materials, and stylish aesthetics to craft chairs that support your lifestyle. Whether you're working, gaming, or relaxing, SeatCraft is where comfort meets purpose.</p>
                </div>
            </div>

            <div className={styles.advantagesDiv}>
                <h1 className={styles.title}>Our Advantages</h1>

                <div className={styles.advantages}>
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