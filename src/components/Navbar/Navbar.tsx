import { Link } from 'react-scroll';

import { menuItems } from '../../data/MenuItems';
import styles from './Navbar.module.scss';

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
          {menuItems.map((item) => (
            <li key={item.title}>
              {item.title === 'Resume' ? (
                <a
                  href={item.link}
                  target="_blank"
                  className={styles.navbarLink}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  activeClass={styles.navbarLinkActive}
                  spy
                  to={item.link}
                  className={styles.navbarLink}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
