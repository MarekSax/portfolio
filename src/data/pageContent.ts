import { PageContent } from '../types';

export const pageContent: PageContent = {
  about:
    'Driven <b>Full-Stack Developer</b> with a passion for crafting seamless digital experiences. Proficient in translating Figma designs into pixel-perfect web pages using <b>HTML5, CSS3, and SASS</b>. Embraced the power of <b>JavaScript</b> and <b>TypeScript</b>, expanding my capabilities to develop dynamic and responsive web applications, particularly enjoying the versatility of <b>ReactJS</b> and its ecosystem, including <b>Redux</b>. With a solid foundation in <b>SQL</b> and <b>Node.js</b>, I excel in building backend systems to complement front-end functionality. My journey as a developer is enriched by my background as a professional musician. Years of honing my craft have instilled in me a keen <b>sense of creativity, attention to detail, and discipline</b> — all of which seamlessly translate into my development work. I understand the importance of harmony, rhythm, and composition — traits that I bring to my coding practice, ensuring elegant solutions that resonate with users. My diverse experiences enable me to approach challenges from multiple perspectives, fostering innovation and <b>out-of-the-box problem-solving</b>. Passionate about leveraging technology to create meaningful experiences, I am committed to continuous learning and growth in the ever-evolving landscape of web development.',
  projects: {
    commercial: [
      {
        title: 'Hematorun',
        role: 'Full Stack',
        description: 'Charity run web application',
        technologies: [
          'ReactJS',
          'TypeScript',
          'HTML5',
          'CSS3',
          'SASS',
          'Node.js',
          'Express',
          'MongoDB',
        ],
        demoUrl: 'https://jolly-island-02c410b1e.5.azurestaticapps.net/',
        img: './images/projects/hematorun.webp',
      },
    ],
    personal: [
      {
        title: 'Portfolio',
        description: 'Personal portfolio fully resposive website',
        technologies: ['ReactJS', 'TypeScript', 'HTML5', 'CSS3', 'SASS'],
        demoUrl: 'https://mareksax.github.io/portfolio/',
        codeUrl: 'https://github.com/MarekSax/portfolio',
        img: './images/projects/portfolio.webp',
      },
      {
        title: '2048',
        description: '2048 game clone',
        technologies: ['HTML5', 'CSS3', 'SASS', 'JavaScript'],
        demoUrl: 'https://mareksax.github.io/js_2048_game/',
        codeUrl: 'https://github.com/MarekSax/js_2048_game/tree/develop',
        img: './images/projects/2048.webp',
      },
      {
        title: 'Secure Auth API',
        description: 'Authentication service',
        technologies: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
        codeUrl: 'https://github.com/MarekSax/node-express-auth-service',
        img: './images/projects/auth.webp',
      },
      {
        title: 'Bose',
        description: 'Responsive landing page',
        technologies: ['HTML5', 'CSS3', 'SASS', 'JavaScript'],
        demoUrl: 'https://mareksax.github.io/layout_miami/',
        codeUrl: 'https://github.com/MarekSax/layout_miami/tree/develop',
        img: './images/projects/bose.webp',
      },
    ],
  },
  skills: [
    {
      name: 'JavaScript',
      progress: 90,
    },
    {
      name: 'TypeScript',
      progress: 70,
    },
    {
      name: 'ReactJS',
      progress: 90,
    },
    {
      name: 'VueJS',
      progress: 40,
    },
    {
      name: 'HTML5',
      progress: 95,
    },
    {
      name: 'CSS3',
      progress: 90,
    },
    {
      name: 'SASS',
      progress: 85,
    },
    {
      name: 'Node.js',
      progress: 70,
    },
    {
      name: 'Express',
      progress: 70,
    },
    {
      name: 'SQL',
      progress: 95,
    },
    {
      name: 'MongoDB',
      progress: 70,
    },
    {
      name: 'PostgreSQL',
      progress: 70,
    },
    {
      name: 'Git',
      progress: 90,
    },
  ],
};
