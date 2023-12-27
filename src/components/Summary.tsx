import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { textVariant } from '../motion';

function Links() {
  return (
    <div className='flex flex-row gap-5 z-50 text-right right-5  text-slate-400'>
      <a
        className='hover:text-slate-200'
        href='https://drive.google.com/file/d/1HHmsudfMJKng_To7TAgHS5jekYZjRWXC/view?usp=sharing'
        target='_blank'
      >
        Resume
      </a>
      <a
        className='hover:text-slate-200'
        href='https://github.com/Aaron-Wu1'
        target='_blank'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
        </svg>
      </a>
      <a
        className='hover:text-slate-200'
        href='https://www.linkedin.com/in/aaron-wu1/'
        target='_blank'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
          <rect x='2' y='9' width='4' height='12'></rect>
          <circle cx='4' cy='4' r='2'></circle>
        </svg>
      </a>
    </div>
  );
}

function Summary() {
  return (
    <div className='min-h-screen flex md:flex-col flex-wrap content-center justify-evenly p-5'>
      {/* About blurb */}
      {/* <div className="flex snap-start h-screen snap-always"> */}
      <motion.div variants={textVariant(0.15)}>
        <div className='max-w-xl flex flex-col justify-center'>
          <div className='text-4xl font-bold pb-6'>Hi there!</div>
          <div className='max-w-xl text-slate-400 flex-col item-start space-y-4 self-center gap-5'>
            <p>
              I am an upcoming fourth-year undergraduate student at UC Santa
              Cruz, pursuing Computer Science.{' '}
            </p>
            <p>
              Currently, I'm part of{' '}
              <a
                className='text-stone-50 hover:text-stone-300'
                href='https://sensors.soe.ucsc.edu/'
                target='_blank'
              >
                jLab in Smart Sensing
              </a>
              , where I am building a web application that streams live data
              from microbial fuel cells. I am also a part of the{' '}
              <a
                className='text-stone-50 hover:text-stone-300'
                href='https://tech4good.soe.ucsc.edu/#/'
                target='_blank'
              >
                Tech4Good Lab
              </a>
              , where I'm conducting research on a project to help facilitate
              teaching qualitative analysis.
            </p>
            <p>
              I'm interested exploring how people interact with technology, both
              in the present and past, with a dream to create tech to help
              others!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Summary, 'summary');
