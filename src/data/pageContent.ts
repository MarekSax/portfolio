import { PageContent } from '../types';

export const pageContent: PageContent = {
  about: `Hi, I'm Marek, a Full-Stack Developer skilled in building web applications using React, Node.js, and TypeScript. I specialize in translating Figma designs into responsive and accessible web pages with HTML5, CSS3, and SASS. My expertise extends to creating dynamic frontends, integrating backends with SQL databases, and ensuring smooth functionality across the stack. Before programming, I worked as a professional musician, which honed my creativity, attention to detail, and discipline—skills I now bring to development. I'm passionate about using technology to create user-friendly solutions and constantly improving my craft in web development.

`,
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
        demoUrl: 'https://hematobieg.org',
        img: './images/projects/hematorun.webp',
      },
      {
        title: 'erecepta.info.pl',
        role: 'Frontend',
        description: 'Online prescription service',
        technologies: [
          'Next.js',
          'Tailwind CSS',
          'React Hook Form',
          'Zod',
          'Framer Motion',
        ],
        demoUrl: 'https://erecepta.info.pl/',
        img: './images/projects/erecepta-info-pl.webp',
      },
      {
        title: 'slimai.app',
        role: 'Full Stack',
        description: 'Landing page for an AI-powered nutrition app',
        technologies: [
          'Next.js',
          'Tailwind CSS',
          'React Hook Form',
          'Zod',
          'Framer Motion',
        ],
        demoUrl: 'https://slimai.app',
        img: './images/projects/slimai-app.webp',
      },
      {
        title: 'receptaonline.net',
        role: 'Frontend',
        description: 'Online prescription service',
        technologies: [
          'Next.js',
          'Tailwind CSS',
          'React Hook Form',
          'Zod',
          'Framer Motion',
        ],
        demoUrl: 'https://receptaonline.net/',
        img: './images/projects/receptaonline-net.webp',
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
      progress: 90,
    },
    {
      name: 'ReactJS',
      progress: 100,
    },
    {
      name: 'Next.js',
      progress: 100,
    },
    {
      name: 'VueJS',
      progress: 40,
    },
    {
      name: 'HTML5',
      progress: 100,
    },
    {
      name: 'CSS3',
      progress: 100,
    },
    {
      name: 'SASS',
      progress: 90,
    },
    {
      name: 'Tailwind CSS',
      progress: 95,
    },
    {
      name: 'shadcn/ui',
      progress: 90,
    },
    {
      name: 'React Hook Form',
      progress: 90,
    },
    {
      name: 'Zod',
      progress: 85,
    },
    {
      name: 'Node.js',
      progress: 85,
    },
    {
      name: 'Express',
      progress: 85,
    },
    {
      name: 'SQL',
      progress: 95,
    },
    {
      name: 'MongoDB',
      progress: 80,
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
