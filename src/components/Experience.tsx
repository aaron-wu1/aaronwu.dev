import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import { data, experience } from '../data.ts';
import SectionWrapper from '../SectionWrapper.tsx';

import { motion } from 'framer-motion';
import { fadeIn } from '../motion';

function ExperienceCard({ experience }: IExperienceCard) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#000000',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.role}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company}
        </p>
      </div>

      <p>{experience.desc}</p>
    </VerticalTimelineElement>
  );
}

function Experience() {
  return (
    <div>
      <motion.div variants={fadeIn('up', 'tween', 0.1, 1)}>
        <h2 className='text-5xl font-bold p-20 text-center'>Work Experience</h2>

        <div className='flex flex-col'>
          <VerticalTimeline>
            {data.experiences.map((experience: experience, index: number) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </div>
  );
}

interface IExperienceCard {
  key: string;
  experience: experience;
}

export default SectionWrapper(Experience, 'work');
