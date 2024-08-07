import styles from './About.module.scss';
import { marek } from '../../editable_stuff/pageContent';
import parse from 'html-react-parser';
export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <article className={styles.content}>
        <div className={styles.content__avatar}>
          <img src="./images/avatar.jpg" alt="avatar" />
        </div>
        <div className={styles.content__description}>
          <h1>Hi, I'm Marek</h1>
          {parse(marek.about)}
        </div>
      </article>
    </section>
  );
};
