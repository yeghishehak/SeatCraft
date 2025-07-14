import styles from './herosection.module.css';

function HeroSection() {
  return (
    <>
        <div className={styles.herosectionDiv}>
          <div className={styles.herosectionTextDiv}>
            <h1 className={styles.h1}>The Only Way to Have <br /> <span className={styles.span}>Comfort</span></h1>
            <button className={styles.button}><span className={styles.exploreSpan}>Explore</span></button>
          </div>
        </div>
    </>
  );
}

export default HeroSection;