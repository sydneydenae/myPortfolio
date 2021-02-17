import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Syd's Portfolio", // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Sydney Stokes',
  subtitle: "and I'm a Software Developer",
  cta: '',
};

// ABOUT DATA -- I can use this section to override values in the About.jsx section such as img, resume, or paragraphOne
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
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Great!',
  btn: "Let's Talk",
  email: 'sydney@sydneydenae.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
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
