import { Project } from '../../types';
import { TechIcon } from '../TechIcon';
import styles from './ProjectCard.module.scss';

interface ProjecCardProps {
  project: Project;
}
export const ProjectCard = ({ project }: ProjecCardProps) => {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCard__image}>
        <img src={project.img} alt="" loading="lazy" />
      </div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
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
        <a href={project.demoUrl} target="_blank" rel="noreferrer noopen">
          Demo
        </a>
      </div>
    </article>
  );
};
