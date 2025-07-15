import styles from './footer.module.css';
import { Link } from 'react-router-dom';

function Footer({style}) {
    return (
        <div className={styles.footer} style={style}>
            <div className={styles.footerTop}>
                <div className={styles.categoriesFooter}>
                    <h1 className={styles.titleTop}>Categories</h1>

                    <p className={styles.linkHome}>
                        <Link className={styles.link} to="/">Home</Link>
                    </p>
                    <p className={styles.linkAbout}>
                        <Link className={styles.link} to="/about">About</Link>
                    </p>
                    <p className={styles.linkStore}>
                        <Link className={styles.link} to="/store">Store</Link>
                    </p>
                    <p className={styles.linkContact}>
                        <Link className={styles.link} to="/contact">Contact</Link>
                    </p>
                </div>

                <div className={styles.contactUsFooter}>
                    <h1>Contact Us</h1>


                    <p className={styles.contactInfoText}>
                        Phone: (123) 456-7890
                    </p>
                    <p className={styles.contactInfoText}>
                        Email: support@seatcraft.com
                    </p>
                    <p className={styles.contactInfoText}>
                        Address: 123 Comfort Lane, Furnitown, USA
                    </p>
                    <p className={styles.contactInfoText}>
                        Website: seatcraft.onrender.com
                    </p>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.footerBottomLeft}>
                    <h1>SeatCraft</h1>
                    <p>©All rights reserved.</p>
                </div>

                <div className={styles.footerBottomRight}>
                    <img src='/socials/tiktok.png' alt='Tiktok' className={`${styles.socialIcon} ${styles.tiktok}`} />
                    <img src='/socials/instagram.png' alt='Instagram' className={styles.socialIcon} />
                    <img src='/socials/linkedin.png' alt='LinkedIn' className={styles.socialIcon} />
                </div>
            </div>
        </div>
    )
}

export default Footer;