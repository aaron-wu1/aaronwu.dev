import tech4good from "./assets/tech4good.png"
import jlab from "./assets/jlab.svg"
import annota from "./assets/annota.png"
import pantrypal from "./assets/pantrypal.png"
import collectively from "./assets/collectively.png"
import dirtviz from "./assets/dirtviz.png"
import resume from './assets/resume/Aaron_Wu_Resume.pdf';

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
export type link = {
  resume: string;
  linkedin: string;
  github: string;
}

export const data: { experiences: experience[]; projects: project[], links: link } = {
  experiences: [
    {
      id: 4,
      company: 'jLab in Smart Sensing',
      role: 'Full Stack Developer',
      desc: 'Building open source data visualization platform using React and Flask to monitor power data from microbial fuel cells, used in data analysis for 30+ researchers across multiple universities',
      link: 'https://sensors.soe.ucsc.edu/',
      icon: jlab,
      iconBg: "#000000",
      date: "Mar 2023 - Present",
    },
    {
      id: 3,
      company: 'Tech4Good',
      role: 'Undergraduate Research Fellow',
      desc: 'Developing a platform to scale up teaching qualitative anaylsis with learningsouring + AI to generate personalized student feedback',
      link: 'https://tech4good.soe.ucsc.edu/#/',
      icon: tech4good,
      iconBg: "#383E56",
      date: "Sep 2023 - Jun 2024",
    },
    {
      id: 2,
      company: 'Tech4Good',
      role: 'Software Engineer Intern',
      desc: 'Developed an admin dashboard for Annota, using Angular and Firebase, allowing educators to directly manage students, reducing administrative tasks',
      link: 'https://tech4good.soe.ucsc.edu/#/',
      icon: tech4good,
      iconBg: "#383E56",
      date: "Sep 2022 - Jun 2023",
    },
    {
      id: 1,
      company: 'Tech4Good',
      role: 'Software Engineer Intern',
      desc: 'Built out Angular components for Collectively, a platform for research exploration',
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
  links: {
    resume: resume,
    linkedin: "https://www.linkedin.com/in/aaron-wu1/",
    github: "https://github.com/aaron-wu1",
  }
};
