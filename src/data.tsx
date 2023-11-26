type experience = {
  id: number;
  company: string;
  role: string;
  desc: string;
  link: string;
  img: string;
};
type project = {
  id: number;
  name: string;
  context: string;
  desc: string;
  link: string;
};

export const data: { experiences: experience[]; projects: project[] } = {
  experiences: [
    {
      id: 1,
      company: 'jLab in Smart Sensing',
      role: 'Full Stack Developer',
      desc: 'Building an open source data visualization app for research conducted with rocket logger sensors in microbial fuel cells',
      link: 'https://sensors.soe.ucsc.edu/',
      img: './assets/jlab.svg',
    },
    {
      id: 2,
      company: 'Tech4Good',
      role: 'Web Development Lead',
      desc: 'Developing a web app for the classroom that collects data from a collaborative qualitative analysis of text or speech transcripts',
      link: 'https://tech4good.soe.ucsc.edu/#/',
      img: '',
    },
  ],
  projects: [
    {
      id: 1,
      name: 'PantryPal',
      context: '',
      desc: 'A search engine to help eliminate food waste by finding recipes for your leftover ingredients',
      link: 'https://github.com/orgs/PantryPal-1/repositories',
    },
    {
      id: 2,
      name: 'Annota',
      context: 'Tech4Good Lab',
      desc: 'A teaching tool for educators to help students to collectively annotate and learn literature',
      link: 'https://annota.soe.ucsc.edu/#/',
    },
    {
      id: 3,
      name: 'Collectively',
      context: 'Tech4Good Lab',
      desc: 'A platform to find reading groups for collective research exploration',
      link: 'https://collectively.soe.ucsc.edu/#/landing',
    },
  ],
};
