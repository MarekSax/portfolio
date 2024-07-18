import { useState } from 'react';
import styles from './MobileMenu.module.scss';
import { IoMenu, IoClose } from 'react-icons/io5';
import cn from 'classnames';

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
        <IoMenu size={48} onClick={openMenu} />
      </div>
      <div
        className={cn(styles.mobileMenuContent, {
          [styles.mobileMenuOpen]: isMenuOpen,
        })}
      >
        <IoClose
          size={48}
          onClick={closeMenu}
          className={styles.mobileMenuIcon}
        />
      </div>
    </>
  );
};
