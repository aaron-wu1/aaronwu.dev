import { data } from '../data';

export default function Project() {
  return (
    <div>
      <h2 className={`text-5xl font-bold pb-5 text-center`}>Projects</h2>
      <div className='max-w-xl'>
        {data.projects.map(({ id, name, context, desc, link }) => (
          <div className='text-slate-400' key={id}>
            <a
              className='text-2xl text-left font-bold text-stone-50 hover:text-stone-400'
              href={link}
              target='_blank'
            >
              {name}
            </a>
            <p className='text-l text-left text-slate-300 pb-2'>{context}</p>
            <p className='text-l text-left text-slate-400 pb-5'>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
