import { data } from "./data.tsx";

function About() {
  // const setStars = (count: number)=> {
  //   let content = [];
  //   for (let i = 0; i < count; i++) {
  //     content.push(<img className={"w-2 h-2 animate-pulse-star " + "delay-" + i*10 + "top-" + Math.random()} src={star} alt="star" />);
  //   }
  //   return content;
  // };

  return (
    <div
      className="relative h-screen w-screen bg-gradient-to-r 
    from-sky-950 to-black
    animate-gradient-x text-sky-100 animate-fadeIn"
    >
      {/* {setStars(10)} */}
      {/* <img className={"w-2 h-2 animate-pulse-star absolute bottom-0 left-0"} src={star} alt="star" /> */}
      {/* {starData.map(({top, bot}) => (
           "w-2 h-2 animate-pulse-star relative " +  "top-" + top + " bot-" + bot
          ))} */}
      {/* {starData.map((src) => (
           <img className={src} src={star} alt="star" />
          ))} */}

      <div className="flex flex-row space-x-4 h-screen w-screen justify-evenly snap-y snap-mandatory snap-always overflow-scroll">
        <div className="relative top-1/4 flex flex-col space-y-4">
          <p className="text-5xl font-bold text-left pb-2 ">Aaron Wu</p>
          <div className="flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400">
            <div className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-zap"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>{" "}
            </div>
            <div>
              Exploring new technologies and engineering to help others!
            </div>
          </div>
          <div className="flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400">
            <div className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-database"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <div>
              Studying Computer Science at University of California, Santa Cruz.
            </div>
          </div>
          <div className="flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400">
            <div className="self-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-briefcase"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div>Working as a Full Stack Developer at Jlab smart sensing.</div>
          </div>
          <div className="flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400">
            <div className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-cpu"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            <div>
              Learning more about Distributed Systesms and Systems Design.
            </div>
          </div>
          <div className="flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400">
            <div className="self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-compass"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </div>
            <div>
              Currently I'm looking for a software enginering internship or a
              new grad role
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex snap-start h-screen snap-always">
            <div className="relative top-1/4">
              <div className="text-2xl font-bold pb-5">Hi there!</div>
              <div className="max-w-2xl text-slate-400 flex-col item-start space-y-4 self-center gap-5">
                <p>
                  I am an upcoming fourth-year undergraduate student at UC Santa
                  Cruz, pursuing Computer Science.{" "}
                </p>
                <p>
                  Currently, I'm part of{" "}
                  <a
                    className="text-stone-50 hover:text-stone-300"
                    href="https://sensors.soe.ucsc.edu/"
                  >
                    Jlab Smart Sensing
                  </a>
                  , where I am building a web application that streams live data
                  from microbial fuel cells. I am also a part of the{" "}
                  <a
                    className="text-stone-50 hover:text-stone-300"
                    href="https://tech4good.soe.ucsc.edu/#/"
                  >
                    Tech4Good Lab
                  </a>
                  , where I help lead a project to help facilitate understanding
                  written works.
                </p>
                <p>
                  I have been particularly interested exploring new technologies
                  and engineering to help others!
                </p>
              </div>
            </div>
            <img
              className="animate-bounce absolute bottom-20"
              src="https://icongr.am/feather/chevron-down.svg?size=32&color=ffffff"
            ></img>
          </div>
          <div className="snap-start h-screen snap-always space-y-5">
            <div className="text-3xl font-bold pb-2">Experiences</div>
            {data.experiences.map(({ company, role, desc }) => (
              <div className="text-left max-w-sm space-y-2">
                <p className="text-2xl text-left ">{company}</p>
                <p className="text-l text-left text-slate-300 pb-2">{role}</p>
                <p className="text-l text-left text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
          <div className="snap-start h-screen snap-always">
            <div className="text-3xl font-bold pb-5">Projects</div>
            {data.projects.map(({ name, desc }) => (
              <div className="text-slate-400">
                <p className="text-2xl text-left font-bold">{name}</p>
                <p className="text-l text-left">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
