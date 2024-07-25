import { useState } from 'react';
import styles from './MobileMenu.module.scss';
import { IoMenu, IoClose } from 'react-icons/io5';
import cn from 'classnames';
import { Link } from 'react-scroll';
import { menuItems } from '../../data/MenuItems';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={styles.mobileMenu}>
        <IoMenu
          size={48}
          onClick={openMenu}
          className={styles.mobileMenuIcon}
        />
      </div>
      <div
        className={cn(styles.mobileMenuContent, {
          [styles.mobileMenuOpen]: isMenuOpen,
        })}
      >
        <div className={styles.mobileMenuContentCloseBtn}>
          <IoClose
            size={48}
            onClick={closeMenu}
            className={styles.mobileMenuIcon}
          />
        </div>
        <nav className={styles.mobileMenuContentNav}>
          <ul className={styles.mobileMenuContentNavList}>
            <li>
              <a
                href="#"
                className={styles.mobileMenuContentNavHome}
                onClick={closeMenu}
              >
                {`<Marek />`}
              </a>
            </li>
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  activeClass={styles.mobileMenuContentNavLinkActive}
                  spy
                  to={item.link}
                  className={styles.mobileMenuContentNavLink}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
