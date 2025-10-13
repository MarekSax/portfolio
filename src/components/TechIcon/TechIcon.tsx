import styles from './TechIcon.module.scss';
import {
  FaReact,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaVuejs,
} from 'react-icons/fa6';
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiReacthookform,
  SiZod,
} from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

interface TechIconProps {
  name: string;
}

export const TechIcon = ({ name }: TechIconProps) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ReactJS':
        return <FaReact className={styles.icon} style={{ color: '#61dafb' }} />;
      case 'VueJS':
        return <FaVuejs className={styles.icon} style={{ color: '#41b883' }} />;
      case 'SASS':
        return <FaSass className={styles.icon} style={{ color: '#cf649a' }} />;
      case 'HTML5':
        return <FaHtml5 className={styles.icon} style={{ color: '#e34f26' }} />;
      case 'CSS3':
        return (
          <FaCss3Alt className={styles.icon} style={{ color: '#264de4' }} />
        );
      case 'TypeScript':
        return (
          <SiTypescript className={styles.icon} style={{ color: '#3178c6' }} />
        );
      case 'JavaScript':
        return (
          <SiJavascript className={styles.icon} style={{ color: '#f0db4f' }} />
        );
      case 'Node.js':
        return (
          <FaNodeJs className={styles.icon} style={{ color: '#83CD29' }} />
        );
      case 'Express':
        return (
          <SiExpress className={styles.icon} style={{ color: '#83CD29' }} />
        );
      case 'MongoDB':
        return (
          <SiMongodb className={styles.icon} style={{ color: '#47A248' }} />
        );
      case 'SQL':
        return (
          <AiOutlineConsoleSql
            className={styles.icon}
            style={{ color: '#f0db4f' }}
          />
        );
      case 'PostgreSQL':
        return (
          <SiPostgresql className={styles.icon} style={{ color: '#336791' }} />
        );
      case 'Git':
        return (
          <FaGitAlt className={styles.icon} style={{ color: '#f1502f' }} />
        );
      case 'Next.js':
        return (
          <SiNextdotjs className={styles.icon} style={{ color: '#fff' }} />
        );
      case 'Tailwind CSS':
        return (
          <SiTailwindcss className={styles.icon} style={{ color: '#06b6d4' }} />
        );
      case 'shadcn/ui':
        return <SiShadcnui className={styles.icon} style={{ color: '#fff' }} />;
      case 'React Hook Form':
        return (
          <div className={styles.rhf}>
            <SiReacthookform
              className={styles.icon}
              style={{ color: '#fff' }}
            />
          </div>
        );
      case 'Zod':
        return <SiZod className={styles.icon} style={{ color: '#fff' }} />;
      case 'Framer Motion':
        return (
          <div className={styles.motion}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 12'>
              <path
                d='M 12.838 0 L 6.12 11.989 L 0 11.989 L 5.245 2.628 C 6.059 1.176 8.088 0 9.778 0 Z M 27.846 2.997 C 27.846 1.342 29.216 0 30.906 0 C 32.596 0 33.966 1.342 33.966 2.997 C 33.966 4.653 32.596 5.995 30.906 5.995 C 29.216 5.995 27.846 4.653 27.846 2.997 Z M 13.985 0 L 20.105 0 L 13.387 11.989 L 7.267 11.989 Z M 21.214 0 L 27.334 0 L 22.088 9.362 C 21.275 10.813 19.246 11.989 17.556 11.989 L 14.496 11.989 Z'
                fill='var(--token-04d93255-d6ab-4bbc-a194-71e004214fb0, rgb(12, 16, 18))'
              ></path>
            </svg>
          </div>
        );
      default:
        return <div className={styles.default}>!</div>;
    }
  };

  return (
    <div className={styles.container}>
      {getIcon(name)}
      <p className={styles.paragraph}>{name}</p>
    </div>
  );
};
