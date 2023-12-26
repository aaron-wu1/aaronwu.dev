import Summary from './Summary';
import About from './About';
import Nav from './Nav';
import './App.css';
import ExProj from './ExProj';
import Background from './components/Background';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  return (
    <>
      <Nav />

      <div
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
          <Summary></Summary>
          <img
            className='self-center bottom-20'
            src='https://icongr.am/feather/chevron-down.svg?size=32&color=ffffff'
          ></img>
        </div>

        <div
          className='w-full snap-start relative bg-gradient-to-r 
from-sky-950 to-black
animate-gradient-x text-sky-100 animate-fadeIn snap-y flex flex-col justify-evenly'
        >
          {/* <Background> */}
          <Experience />
          {/* <ExProj /> */}
          {/* </Background> */}
        </div>
        <div
          className='w-full h-screen snap-start relative bg-gradient-to-r 
from-sky-950 to-black
animate-gradient-x text-sky-100 animate-fadeIn snap-y flex flex-col justify-evenly'
        >
          <Background>
            {/* <Experience /> */}
            <Project />
          </Background>
        </div>
      </div>
    </>
  );
}

export default App;
