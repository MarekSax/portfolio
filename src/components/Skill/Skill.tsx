import styles from './Skill.module.scss';
import { useInView } from 'react-intersection-observer';
import { TechIcon } from '../TechIcon';

interface SkillProps {
  name: string;
  progress: number;
}
export const Skill = ({ name, progress }: SkillProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 300,
  });

  return (
    <div className={styles.skill} ref={ref}>
      <div className={styles.skill__icon}>
        <TechIcon name={name} />
      </div>
      <div className={styles.skill__bar}>
        <div
          className={styles.skill__progress}
          style={inView ? { width: `${progress}%` } : {}}
        ></div>
      </div>
    </div>
  );
};
