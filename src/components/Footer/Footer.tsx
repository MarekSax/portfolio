import { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className={styles.footer}>&copy; {year} Marek Maciejewski</footer>
  );
};
