import styles from './Navbar.module.scss';
import ScrollSpy from 'react-scrollspy-navigation';
export const Navbar = () => {
  return (
    <ScrollSpy activeClass={styles.navbarLinkActive}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li>
            <a href="#home" className={styles.navbarLink}>
              {`<Marek />`}
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navbarLink}>
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" className={styles.navbarLink}>
              Resume
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navbarLink}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.navbarLink}>
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </ScrollSpy>
  );
};
