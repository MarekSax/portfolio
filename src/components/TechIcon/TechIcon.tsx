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
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {getIcon(name)}
      <p className={styles.paragraph}>{name}</p>
    </div>
  );
};
