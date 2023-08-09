import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  clover,
  pronto,
  twentyThree,
  twentyThreeLogo,
  prontoLogo,
  cloverLogo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Clover Network',
    icon: cloverLogo,
    iconBg: '#333333',
    date: 'May 2021 - Present',
  },
  {
    title: 'Software Engineer',
    company_name: 'Pronto AI',
    icon: prontoLogo,
    iconBg: '#333333',
    date: 'Mar 2020 - April 2021',
  },
  {
    title: 'Software Engineer',
    company_name: '23AndMe',
    icon: twentyThreeLogo,
    iconBg: '#333333',
    date: 'February 2018 - February 2020',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Sales Report',
    description:
      'Clover Network is a company that provides a POS cloud platform for restaurants and retail stores. Sales Tracking and Reporting uses Clover’s powerful analytics tools to gain real-time insights into the sales trends and data.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: clover,
    repo: '',
    demo: 'https://www.clover.com/',
  },
  {
    id: 'project-2',
    name: 'Pronto',
    description: `The Pronto Mobile App was developed as part of Pronto AI's self-driving truck technology. It aimed to provide a user-friendly interface for truck drivers and fleet managers to interact with the autonomous driving system`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: pronto,
    repo: '',
    demo: 'https://pronto.ai/',
  },
  {
    id: 'project-3',
    name: '23andMe',
    description:
      'The 23andMe Mobile App aimed to provide users with a personalized and interactive experience for accessing and exploring their genetic and health-related information.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: twentyThree,
    repo: '',
    demo: 'https://apps.apple.com/us/app/23andme-dna-testing/id952516687',
  },
];

export { services, technologies, experiences, projects };
