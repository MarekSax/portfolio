import { Project } from '../../types';
import { TechIcon } from '../TechIcon';
import styles from './ProjectCard.module.scss';

interface ProjecCardProps {
  project: Project | 'dummy';
}
export const ProjectCard = ({ project }: ProjecCardProps) => {
  if (project === 'dummy') {
    return (
      <article
        aria-hidden="true"
        className={(styles.projectCard, styles.dummy)}
      ></article>
    );
  }

  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCard__image}>
        <img src={project.img} alt="" loading="lazy" />
      </div>
      <div className={styles.projectCard__title}>
        <h2>{project.title}</h2>
        {project.role && (
          <p className={styles.projectCard__position}>{project.role}</p>
        )}
      </div>
      <p className={styles.projectCard__description}>{project.description}</p>
      <div className={styles.projectCard__technologies}>
        {project.technologies.map((tech) => (
          <TechIcon name={tech} key={tech} />
        ))}
      </div>
      <div className={styles.projectCard__links}>
        {project.codeUrl && (
          <a href={project.codeUrl} target="_blank" rel="noreferrer noopen">
            Code
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer noopen">
            Demo
          </a>
        )}
      </div>
    </article>
  );
};
