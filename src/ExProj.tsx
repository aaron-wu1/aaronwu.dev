import { data } from "./data.tsx";
import jlab from "./assets/jlab.svg";

function ExProj() {
  return (
    <div
      className="w-full min-h-screen snap-start snap-mandatory snap-always bg-gradient-to-r 
from-sky-950 to-black
animate-gradient-x text-sky-100 animate-fadeIn flex flex-col justify-around"
    >
      <div className="flex flex-col md:flex-row overflow-y-auto justify-around p-10">
        <div className="max-w-xl">
          <p className="text-3xl font-bold pb-5">Experiences</p>
          {data.experiences.map(({ id, company, role, desc, link, _ }) => (
            <div
              className="flex flex-row text-left max-w-sm space-y-2 text-slate-400"
              key={id}
            >
              <div>
                <a
                  className="text-2xl text-left font-bold text-stone-50 hover:text-stone-300"
                  href={link}
                  target="_blank"
                >
                  {company}
                </a>
                <p className="text-l text-left text-slate-300 pb-2">{role}</p>
                <p className="text-l text-left text-slate-400 pb-5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-xl">
          <p className="text-3xl font-bold pb-5">Projects</p>
          {data.projects.map(({ id, name, context, desc }) => (
            <div className="text-slate-400" key={id}>
              <p className="text-2xl text-left font-bold">{name}</p>
              <p className="text-l text-left text-slate-300 pb-2">{context}</p>
              <p className="text-l text-left text-slate-400 pb-5">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExProj;
