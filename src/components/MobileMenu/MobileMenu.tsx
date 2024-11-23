import { useEffect, useRef, useState } from 'react';
import styles from './MobileMenu.module.scss';
import { IoMenu, IoClose } from 'react-icons/io5';
import cn from 'classnames';
import { Link } from 'react-scroll';
import { menuItems } from '../../data/MenuItems';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openButtonRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLDivElement | null>(null);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    setTimeout(() => closeButtonRef.current?.focus(), 0);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => openButtonRef.current?.focus(), 0);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        handleCloseMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div ref={openButtonRef} className={styles.mobileMenu}>
        <IoMenu
          size={48}
          onClick={handleOpenMenu}
          className={styles.mobileMenuIcon}
          aria-expanded={isMenuOpen}
          aria-label='Open menu'
        />
      </div>
      <div
        className={cn(styles.mobileMenuContent, {
          [styles.mobileMenuOpen]: isMenuOpen,
        })}
      >
        <div ref={closeButtonRef} className={styles.mobileMenuContentCloseBtn}>
          <IoClose
            size={48}
            onClick={handleCloseMenu}
            className={styles.mobileMenuIcon}
            aria-label='Close menu'
          />
        </div>
        <nav className={styles.mobileMenuContentNav}>
          <ul className={styles.mobileMenuContentNavList}>
            <li>
              <a
                href='#'
                className={styles.mobileMenuContentNavHome}
                onClick={handleCloseMenu}
              >
                {`<Marek />`}
              </a>
            </li>
            {menuItems.map((item) => (
              <li key={item.title}>
                {item.title === 'Resume' ? (
                  <a
                    href={item.link}
                    target='_blank'
                    className={styles.mobileMenuContentNavLink}
                    onClick={handleCloseMenu}
                    aria-label={`Open ${item.title} in a new tab`}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    activeClass={styles.mobileMenuContentNavLinkActive}
                    spy
                    to={item.link}
                    className={styles.mobileMenuContentNavLink}
                    onClick={handleCloseMenu}
                    aria-label={`Navigate to ${item.title} section`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
