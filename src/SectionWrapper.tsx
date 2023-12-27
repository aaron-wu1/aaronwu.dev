import { motion } from 'framer-motion';
import { FC } from 'react';

const SectionWrapper = (Component: FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='w-screen h-full relative'
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
