import { nanoid } from 'nanoid';

// HEAD DATA -- I can use this section to override constants in the index.js section
export const headData = {};

// HERO DATA -- I can use this section to override constants in the Hero.jsx section
export const heroData = {};

// ABOUT DATA -- I can use this section to override constants in the About.jsx section
export const aboutData = {
  resume:
    'https://www.canva.com/design/DAD__8vooH4/bm79OR8Oo-wWU3bvX7nK7w/view?utm_content=DAD__8vooH4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'portfolioPic.jpg', // change this pic
    title: 'My Portfolio',
    info: 'Made using Gatsby, CSS, HTML, and React',
    info2: '',
    url: 'https://sydneydenae.com/',
    repo: 'https://github.com/sydneydenae/sydneyPortfolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/sydneydenae',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sydney-stokes-aa164b203/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sydneydenae',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/sydneydenae/?hl=en',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
