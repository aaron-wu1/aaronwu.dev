import Summary from './Summary';
import About from './About';
import Nav from './Nav';
import './App.css';
import ExProj from './ExProj';
import Background from './components/Background';

function App() {
  return (
    <>
      <Nav />

      <div
        className='max-h-screen overflow-y-scroll snap snap-y snap-mandatory bg-gradient-to-r 
from-sky-950 to-black
animate-gradient-x text-sky-100 animate-fadeIn '
      >
        <div className='w-full h-screen snap-start snap-mandatory snap-always relative snap-y flex flex-col justify-around'>
          <Background>
            <About></About>
            <img
              className='self-center bottom-20'
              src='https://icongr.am/feather/chevron-down.svg?size=32&color=ffffff'
            ></img>
          </Background>
        </div>

        <div
          className='w-full h-screen snap-start snap-mandatory snap-always relative bg-gradient-to-r 
from-sky-950 to-black
animate-gradient-x text-sky-100 animate-fadeIn snap-y flex flex-col justify-around'
        >
          <Summary></Summary>
          <img
            className='self-center bottom-20'
            src='https://icongr.am/feather/chevron-down.svg?size=32&color=ffffff'
          ></img>
        </div>
        <ExProj />
      </div>
    </>
  );
}

export default App;
