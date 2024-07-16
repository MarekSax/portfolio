import styles from './Navbar.module.scss';
import { Link } from 'react-scroll';
export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul className={styles.navbarList}>
          <li>
            <a href="#" className={styles.navbarHome}>
              {`<Marek />`}
            </a>
          </li>
          <li>
            <Link
              activeClass={styles.navbarLinkActive}
              spy
              to="projects"
              className={styles.navbarLink}
            >
              Projects
            </Link>
          </li>
          <li>
            <a href="#" className={styles.navbarLink}>
              Resume
            </a>
          </li>
          <li>
            <Link
              activeClass={styles.navbarLinkActive}
              spy
              to="about"
              className={styles.navbarLink}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass={styles.navbarLinkActive}
              spy
              to="skills"
              className={styles.navbarLink}
            >
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
