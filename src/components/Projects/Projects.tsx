import { ProjectCard } from '../ProjectCard';
import styles from './Projects.module.scss';
import { pageContent } from '../../data/pageContent';
import type { Projects as ProjectsType } from '../../types';
export const Projects = () => {
  const projectList: ProjectsType = pageContent.projects;
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.projects__title}>Projects</h1>
      <div className={styles.projects__wrapper}>
        <h2>Commercial</h2>
        <div className={styles.projects__container}>
          {projectList.commercial.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          <ProjectCard project="dummy" />
          <ProjectCard project="dummy" />
        </div>
      </div>
      <div className={styles.projects__wrapper}>
        <h2>Personal</h2>
        <div className={styles.projects__container}>
          {projectList.personal.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
