type experience = { company: string; role: string; desc: string };
type project = { name: string; desc: string };

export const data: { experiences: experience[]; projects: project[] } = {
  experiences: [
    {
      company: "Jlab Smart Sensing",
      role: "Full Stack Developer",
      desc: "Building an open source data visualization app for research conducted with rocket logger sensors in microbial fuel cells",
    },
    {
      company: "Tech4Good",
      role: "Web Development Lead",
      desc: "Developing a web app for the classroom that collects data from a collaborative qualitative analysis of text or speech transcripts",
    },
  ],
  projects: [
    {
      name: "test prokect",
      desc: "A working test project",
    },
  ],
};
