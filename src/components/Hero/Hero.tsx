import styles from './Hero.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Marek Maciejewski</h1>
        <div className={styles.heroSubtitle}>Full-Stack Developer</div>
        <div className={styles.heroIcon}>
          <a
            href="https://github.com/MarekSax"
            target="_blank"
            className={styles.heroLink}
          >
            <div>
              <VscGithubInverted />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
