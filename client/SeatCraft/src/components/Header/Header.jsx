import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Arrow from "../../assets/arrowright.svg?react";
import Menu from "../../assets/text-outdent.svg?react";
import MenuClose from "../../assets/text-indent.svg?react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showHeader, setShowHeader] = useState(true);

  const [atTop, setAtTop] = useState(true);

  const lastScrollY = useRef(window.scrollY);

  const location = useLocation();
  const isHome = location.pathname === "/";


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const deltaY = currentScrollY - lastScrollY.current;

      // Ignore small scroll jumps (like bounce)
      if (Math.abs(deltaY) < 5) {
        return;
      }

      setAtTop(currentScrollY <= 10);

      if (deltaY < 0) {
        // Scrolling up
        setShowHeader(true);
      } else if (deltaY > 0) {
        // Scrolling down
        setShowHeader(false);

        document.body.style.touchAction = "auto";
        document.documentElement.style.touchAction = "auto";
        document.documentElement.style.overflowY = "auto";
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to manage touch-action based on menu state and screen size

  useEffect(() => {

    if (!menuOpen) {
      document.body.style.touchAction = "auto";
      document.documentElement.style.touchAction = "auto";
      document.documentElement.style.overflowY = "auto";
    }

  const updateTouchAction = () => {
    const isLargeScreen = window.innerWidth >= 913;

    if (isLargeScreen) {
      document.body.style.setProperty('touch-action', 'auto', 'important');
      document.documentElement.style.setProperty('touch-action', 'auto', 'important');
      document.documentElement.style.setProperty('overflowY',  "auto", 'important');
    }
  };

  updateTouchAction(); // Run on mount

  window.addEventListener('resize', updateTouchAction);

  return () => {
    window.removeEventListener('resize', updateTouchAction);
  };
}, [menuOpen]);


  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    document.body.style.touchAction = menuOpen ? "auto" : "none";
    document.documentElement.style.touchAction = menuOpen ? "auto" : "none";
    document.documentElement.style.overflowY = menuOpen ? "auto" : "hidden";
  };

  return (
    <div className={`
      ${styles.header}
      ${menuOpen ? styles.expanded : ''}
      ${!showHeader ? styles.hiddenHeader : ''}
      ${!isHome || !atTop ? styles.headerScrolled : ''}
    `}>

      <div className={styles.SeatCraftTextDiv}>
        <h1 className={styles.SeatCraftText}>SeatCraft</h1>
      </div>

      <nav className={styles.nav}>
        <div className={styles.menuiconDiv}>
          <button onClick={toggleMenu} className={styles.menuiconButton}>
            <Menu className={`${styles.icon} ${!menuOpen ? styles.visible : styles.hidden}`} />
            <MenuClose className={`${styles.icon} ${menuOpen ? styles.visible : styles.hidden}`} />
          </button>
        </div>

        <div className={styles.linksDiv}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/store" className={styles.navLink}>Store</Link>
          <div className={styles.contactDiv}>
            <Link to="/contact" className={`${styles.navLink} ${styles.contact}`}>
              <span className={styles.span}>Contact</span>
              <Arrow className={styles.arrowright} />
            </Link>
          </div>
        </div>

        {menuOpen && (
          <div className={styles.menuOpen}>
            <div className={styles.linksDivOpenMenu}>
              <Link to="/" className={styles.navLinkOpenMenu} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className={styles.navLinkOpenMenu} onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/store" className={styles.navLinkOpenMenu} onClick={() => setMenuOpen(false)}>Store</Link>
              <div className={styles.contactDivOpenMenu}>
                <Link to="/contact" className={`${styles.navLinkOpenMenu} ${styles.contactOpenMenu}`} onClick={() => setMenuOpen(false)}>
                <div className={styles.contactDivOpenMenu}>
                    <span className={styles.spanOpenMenu}>Contact</span>
                    <Arrow className={styles.arrowrightOpenMenu} />
                </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
