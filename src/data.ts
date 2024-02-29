import tech4good from "./assets/tech4good.png"
import jlab from "./assets/jlab.svg"
import annota from "./assets/annota.png"
import pantrypal from "./assets/pantrypal.png"
import collectively from "./assets/collectively.png"
import dirtviz from "./assets/dirtviz.png"
export type experience = {
  id: number;
  company: string;
  role: string;
  desc: string;
  link: string;
  icon: string;
  iconBg: string;
  date: string;
};
export type project = {
  id: number;
  name: string;
  context: string;
  desc: string;
  link: string;
  img: string;
};

export const data: { experiences: experience[]; projects: project[] } = {
  experiences: [
    {
      id: 4,
      company: 'Tech4Good',
      role: 'Research Fellow & Software Engineer Lead',
      desc: 'Developing a platform to scale up teaching qualitative anaylsis with learningsouring + AI to generate personalized student feedback',
      link: 'https://tech4good.soe.ucsc.edu/#/',
      icon: tech4good,
      iconBg: "#383E56",
      date: "Sep 2023 - Present",
    },
    {
      id: 3,
      company: 'jLab in Smart Sensing',
      role: 'Full Stack Developer',
      desc: 'Building an open source data visualization app for research conducted with rocket logger sensors in microbial fuel cells',
      link: 'https://sensors.soe.ucsc.edu/',
      icon: jlab,
      iconBg: "#000000",
      date: "Mar 2023 - Present",
    },
    {
      id: 2,
      company: 'Tech4Good',
      role: 'Software Engineer',
      desc: 'Developed Admin dashboard and idea creation pages for an online classroom platform',
      link: 'https://tech4good.soe.ucsc.edu/#/',
      icon: tech4good,
      iconBg: "#383E56",
      date: "Sep 2022 - Jun 2023",
    },
    {
      id: 1,
      company: 'Tech4Good',
      role: 'Software Engineer Intern',
      desc: 'Developed components for a platform to help students find reading groups for collective research exploration',
      link: 'https://tech4good.soe.ucsc.edu/#/',
      icon: tech4good,
      iconBg: "#383E56",
      date: "Jun 2022 - Sep 2022",
    },
  ],
  projects: [
    {
      id: 0,
      name: 'DirtViz',
      context: 'jLab Smart Sensing',
      desc: 'A data visualization platform for microbial fuel cells',
      link: 'https://dirtviz.jlab.ucsc.edu/',
      img: dirtviz,
    },
    {
      id: 1,
      name: 'PantryPal',
      context: 'Demo Product',
      desc: 'A recipe recommender for your leftover ingredients, aimed to help eliminate food waste',
      link: 'https://github.com/orgs/PantryPal-1/repositories',
      img: pantrypal,
    },
    {
      id: 2,
      name: 'Annota',
      context: 'Tech4Good Lab',
      desc: 'A teaching tool for educators to help students learn qualitative anaylsis',
      link: 'https://annota.soe.ucsc.edu/#/',
      img: annota,
    },
    {
      id: 3,
      name: 'Collectively',
      context: 'Tech4Good Lab',
      desc: 'A platform to find reading groups for collective research exploration',
      link: 'https://collectively.soe.ucsc.edu/#/landing',
      img: collectively,
    },
  ],
};
