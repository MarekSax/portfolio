import styles from './About.module.scss';
import { marek } from '../../editable_stuff/pageContent';
export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <article className={styles.content}>
        <div className={styles.content__avatar}>
          <img src="./images/avatar.jpg" alt="" />
        </div>
        <div className={styles.content__description}>
          <h1>Hi, I'm Marek</h1>
          {marek.about}
        </div>
      </article>
    </section>
  );
};
