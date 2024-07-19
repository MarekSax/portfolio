import styles from './Hero.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';

export const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Marek Maciejewski</h1>
        <div className={styles.heroSubtitle}>Full-Stack Developer</div>
        <a
          href="https://github.com/MarekSax"
          target="_blank"
          className={styles.heroLink}
        >
          <VscGithubInverted className={styles.heroIcon} />
        </a>
      </div>
    </section>
  );
};
