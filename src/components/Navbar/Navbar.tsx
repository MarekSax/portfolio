import { useState } from 'react';
import classNames from 'classnames';
import styles from './Navbar.module.scss';
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>('top');
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <a href="#top" className={styles.navbarHome}>
            {`<Marek />`}
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={classNames(styles.navbarLink, {
              [styles.navbarLinkActive]: activeLink === 'projects',
            })}
            onClick={() => setActiveLink('projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" className={styles.navbarLink}>
            Resume
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={classNames(styles.navbarLink, {
              [styles.navbarLinkActive]: activeLink === 'about',
            })}
            onClick={() => setActiveLink('about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={classNames(styles.navbarLink, {
              [styles.navbarLinkActive]: activeLink === 'skills',
            })}
            onClick={() => setActiveLink('skills')}
          >
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
};
