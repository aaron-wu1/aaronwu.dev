function Summary() {
  return (
    <div className="flex md:flex-row flex-col content-center justify-around p-10 gap-10">
      {/* About blurb */}
      {/* <div className="flex snap-start h-screen snap-always"> */}
      <div className="max-w-xl flex flex-col justify-center">
        <div className="text-4xl font-bold pb-6">Hi there!</div>
        <div className="max-w-xl text-slate-400 flex-col item-start space-y-4 self-center gap-5">
          <p>
            I am an upcoming fourth-year undergraduate student at UC Santa Cruz,
            pursuing Computer Science.{" "}
          </p>
          <p>
            Currently, I'm part of{" "}
            <a
              className="text-stone-50 hover:text-stone-300"
              href="https://sensors.soe.ucsc.edu/"
              target="_blank"
            >
              Jlab Smart Sensing
            </a>
            , where I am building a web application that streams live data from
            microbial fuel cells. I am also a part of the{" "}
            <a
              className="text-stone-50 hover:text-stone-300"
              href="https://tech4good.soe.ucsc.edu/#/"
              target="_blank"
            >
              Tech4Good Lab
            </a>
            , where I help lead a project to help facilitate understanding
            written works.
          </p>
          <p>
            I have been particularly interested exploring new technologies and
            engineering to help others!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;