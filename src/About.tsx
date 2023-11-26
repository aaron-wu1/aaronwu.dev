function About() {
  return (
    <div className='flex md:flex-row flex-col content-center justify-around'>
      <div className='flex flex-col space-y-4 p-10 content-center '>
        <div className='text-5xl font-bold text-left max-w-sm pb-2'>
          Aaron Wu
        </div>
        <div className='flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400'>
          <div className='self-center'>
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
              <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
            </svg>{' '}
          </div>
          <div>Exploring new technologies and engineering to help others!</div>
        </div>
        <div className='flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400'>
          <div className='self-center'>
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
              <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
              <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
              <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
            </svg>
          </div>
          <div>
            Studying Computer Science at University of California, Santa Cruz.
          </div>
        </div>
        <div className='flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400'>
          <div className='self-center'>
            {' '}
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
              <rect x='2' y='7' width='20' height='14' rx='2' ry='2'></rect>
              <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'></path>
            </svg>
          </div>
          <div>
            Working as a Full Stack Developer at jLab in Smart Sensing and
            Reserach Fellow at Tech4Good lab
          </div>
        </div>
        <div className='flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400'>
          <div className='self-center'>
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
              <rect x='4' y='4' width='16' height='16' rx='2' ry='2'></rect>
              <rect x='9' y='9' width='6' height='6'></rect>
              <line x1='9' y1='1' x2='9' y2='4'></line>
              <line x1='15' y1='1' x2='15' y2='4'></line>
              <line x1='9' y1='20' x2='9' y2='23'></line>
              <line x1='15' y1='20' x2='15' y2='23'></line>
              <line x1='20' y1='9' x2='23' y2='9'></line>
              <line x1='20' y1='14' x2='23' y2='14'></line>
              <line x1='1' y1='9' x2='4' y2='9'></line>
              <line x1='1' y1='14' x2='4' y2='14'></line>
            </svg>
          </div>
          <div>Learning more about Distributed Systems and Systems Design.</div>
        </div>
        <div className='flex flex-row gap-x-5 max-w-sm text-l text-left text-slate-400'>
          <div className='self-center'>
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
              <circle cx='12' cy='12' r='10'></circle>
              <polygon points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'></polygon>
            </svg>
          </div>
          <div>Currently coding XD</div>
        </div>
      </div>
    </div>
  );
}

export default About;
