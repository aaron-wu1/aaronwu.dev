import { data } from "./data.tsx";
import star from "./assets/star.svg";
import { starData } from "./starData.tsx";

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
          <p className="text-5xl font-bold text-left pb-2 ">🧑🏻‍💻 Aaron Wu</p>
          <div className="flex flex-row gap-x-4 max-w-sm text-l text-left text-slate-400">
            <div>🔭</div>
            <div>
              Exploring new technologies and engineering to help others!
            </div>
          </div>
          <div className="flex flex-row gap-x-4 max-w-sm text-l text-left text-slate-400">
            <div>🎓</div>
            <div>
              Studying Computer Science at University of California, Santa Cruz.
            </div>
          </div>
          <div className="flex flex-row gap-x-4 max-w-sm text-l text-left text-slate-400">
            <div>💼</div>
            <div>Working as a Full Stack Developer at Jlab smart sensing.</div>
          </div>
          <div className="flex flex-row gap-x-4 max-w-sm text-l text-left text-slate-400">
            <div>🌱</div>
            <div>
              Learning more about Distributed Systesms and Systems Design.
            </div>
          </div>
          <div className="flex flex-row gap-x-4 max-w-sm text-l text-left text-slate-400">
            <div>👯</div>
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
