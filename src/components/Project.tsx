import { data } from '../data';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion';

function Project() {
  return (
    <div className='min-h-screen mt-5'>
      <motion.div variants={fadeIn('up', 'tween', 0.1, 1)}>
        <h2 className={`text-5xl font-bold mt-10 p-20 pb-5 text-center`}>
          Projects
        </h2>
        <div className='max-w-screen p-10 grid  sm:grid-cols-3 grid-cols-1 gap-10 '>
          {data.projects.map(({ id, name, context, desc, link, img }) => (
            <div className='text-slate-400 flex flex-col' key={id}>
              <img className='rounded' src={img} />
              <a
                className='text-2xl font-bold text-stone-50 hover:text-stone-400 text-center pt-2'
                href={link}
                target='_blank'
              >
                {name}
              </a>
              <p className='text-l text-center text-slate-300 pb-2'>
                {context}
              </p>
              <p className='text-l text-center p-2 text-slate-400 pb-5'>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
export default SectionWrapper(Project, 'project');
