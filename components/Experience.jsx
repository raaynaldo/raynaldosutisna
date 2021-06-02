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
    <section className='flex flex-col items-center justify-center h-screen layout'>
      <h1 className='mb-5 text-primary'>Where I've Worked</h1>

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

      <div class='md:flex w-full md:items-start'>
        <div className='hidden md:w-1/4 md:space-y-4 md:block'>
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

        <div className='p-5 mx-5 border rounded-lg shadow-md md:w-3/4'>
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
