import { CommercialProject, PersonalProject } from '../../types';
import styles from './ProjectCard.module.scss';

interface ProjecCardProps {
  project: CommercialProject | PersonalProject;
}
export const ProjectCard = ({ project }: ProjecCardProps) => {
  return (
    <article className={styles.container}>
      <div>
        <img src={project.img} alt="" loading="lazy" />
      </div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </article>
  );
};
