import ScrollSpy from 'react-scrollspy-navigation';
import styles from './Navbar.module.scss';
export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <ScrollSpy activeClass={styles.navbarLinkActive}>
        <nav>
          <ul className={styles.navbarList}>
            <li>
              <a href="/" className={styles.navbarLink}>
                {`<Marek />`}
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.navbarLink}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" className={styles.navbarLink}>
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
    </header>
  );
};
