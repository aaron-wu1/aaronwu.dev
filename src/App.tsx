import Summary from './components/Summary';
import About from './components/About';
import Nav from './Nav';
import './App.css';
import Background from './components/Background';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div
        className='relative z-0 flex flex-col w-screen bg-gradient-to-r from-sky-950 to-black
      animate-gradient-x text-sky-100 animate-fadeIn flex flex-col justify-evenly'
      >
        <Background>
          <Nav />
          <About />
          <Summary />
          <Experience />
          <Project />
          <Contact />
        </Background>

        {/* <div
          className='max-h-screen overflow-y-scroll snap snap-y snap-mandatory bg-gradient-to-r 
  from-sky-950 to-black
  animate-gradient-x text-sky-100 animate-fadeIn '
        >
          <div className='w-full h-screen snap-start  relative snap-y flex flex-col justify-around'>
            <Background className='flex flex-col self-center gap-10'>
              <About></About>
              <img
                className='self-center bottom-20'
                src='https://icongr.am/feather/chevron-down.svg?size=32&color=ffffff'
              ></img>
            </Background>
          </div>

          <div
            className='w-full h-screen snap-start relative bg-gradient-to-r 
  from-sky-950 to-black
  animate-gradient-x text-sky-100 animate-fadeIn snap-y flex flex-col justify-around'
          >
            <Background className='flex flex-col self-center gap-10'>
              <Summary></Summary>
              <img
                className='self-center bottom-20'
                src='https://icongr.am/feather/chevron-down.svg?size=32&color=ffffff'
              ></img>
            </Background>
          </div>

          <div
            className='w-full h-screen snap-start relative bg-gradient-to-r 
  from-sky-950 to-black
  animate-gradient-x text-sky-100 animate-fadeIn snap-y flex flex-col justify-evenly'
          >
            <Background className='flex flex-col self-center gap-10'>
              <Experience />
            </Background>
          </div>
          <div
            className='w-full h-screen snap-start relative bg-gradient-to-r 
  from-sky-950 to-black
  animate-gradient-x text-sky-100 animate-fadeIn snap-y flex flex-col justify-evenly'
          >
            <Background>
              <Project />
            </Background>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
