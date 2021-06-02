import { useState } from 'react';

import { experiences } from '@/data/experience';

export default function Experience() {
  const [experience, setExperience] = useState(experiences[0]);

  const changeExperienceHandler = (id) => {
    const exp = experiences.find(
      (experience) => experience.id === parseInt(id)
    );
    setExperience(exp);
  };

  return (
    <section
      className='flex flex-col items-center h-screen pt-32 md:pt-52 layout'
      id='experience'
    >
      <div className='grid grid-cols-none md:w-3/4 md:gap-8 md:grid-cols-3'>
        {/* <div className='hidden md:block'></div> */}
        <h1 className='col-span-2 mb-5 text-center md:col-start-2 md:mb-0 text-primary md:text-left'>
          Where I've Worked
        </h1>

        <select
          className='mx-5 mb-3 border rounded-md md:hidden'
          onChange={(e) => changeExperienceHandler(e.target.value)}
        >
          {experiences.map(({ id, companyName }) => (
            <option key={`experience-${id}`} value={id}>
              {companyName}
            </option>
          ))}
        </select>

        <div className='hidden md:space-y-4 md:block'>
          {experiences.map(({ id, companyName }) => (
            <div
              key={`experience-${id}`}
              value={id}
              className='text-right border-b cursor-pointer border-primary'
              onClick={() => changeExperienceHandler(id)}
            >
              {companyName}
            </div>
          ))}
        </div>

        <div className='col-span-2 p-5 border rounded-lg shadow-md'>
          <p className='text-base font-bold'>
            {experience?.title}{' '}
            <span className='text-primary'>@{experience?.companyName}</span>
          </p>
          <p>{experience?.timeline}</p>
          <ul className='mt-4 list-disc list-inside'>
            {experience?.descriptions.map((description) => (
              <li>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
