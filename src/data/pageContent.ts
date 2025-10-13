import { PageContent } from '../types';

export const pageContent: PageContent = {
  about:
    "I'm a <strong>Full-Stack Developer</strong> with a focus on building modern web applications using <strong>Next.js, React, Node.js, TypeScript, and Tailwind CSS</strong>. I turn Figma designs into <strong>responsive, accessible, and performant web pages</strong>, and I have experience integrating backends with SQL databases to deliver smooth end-to-end functionality. <br> Before programming, I worked as a <strong>professional musician</strong>, which sharpened my <strong>creativity, discipline, and attention to detail</strong>. Skills I now channel into building <strong>elegant, user-friendly web solutions</strong>. I'm passionate about crafting scalable, maintainable code and constantly exploring new technologies to improve the user experience.",
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
