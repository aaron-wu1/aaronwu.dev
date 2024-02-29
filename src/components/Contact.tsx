import { data } from '../data.ts';

function Links() {
  const links = data.links;
  return (
    <div className='flex flex-row gap-5 z-50 text-right right-5  text-slate-400'>
      <a className='hover:text-slate-200' href={links.resume} target='_blank'>
        Resume
      </a>
      <a className='hover:text-slate-200' href={links.github} target='_blank'>
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
      <a className='hover:text-slate-200' href={links.linkedin} target='_blank'>
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

const Contact = () => {
  return (
    <div className='min-h-screen flex md:flex-col flex-wrap content-center justify-center p-5'>
      <h2 className='text-3xl font-bold pb-6'>
        If you'd like to chat please feel free to email me!
      </h2>
      <a
        className='text-slate-200'
        href='mailto: aaronwu234@gmail.com'
        target='_blank'
      >
        aaronwu234@gmail.com
      </a>
      <p className='text-xl font-bold pt-6 pb-6'>Other links: </p>
      <Links></Links>
    </div>
  );
};

export default Contact;
