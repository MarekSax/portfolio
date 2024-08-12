import { ProjectCard } from '../ProjectCard';
import styles from './Projects.module.scss';
import { pageContent } from '../../data/pageContent';
import type { Projects as ProjectsType } from '../../types';
export const Projects = () => {
  const projectList: ProjectsType = pageContent.projects;
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projects__container}>
        {projectList.personal.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
