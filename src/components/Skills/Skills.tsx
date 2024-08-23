import { pageContent } from '../../data/pageContent';
import { Skill } from '../Skill';
import styles from './Skills.module.scss';
export const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h1 className={styles.skills__title}>Skills</h1>
      <div className={styles.skills__wrapper}>
        {pageContent.skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} progress={skill.progress} />
        ))}
      </div>
    </section>
  );
};
