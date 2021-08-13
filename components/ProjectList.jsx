import { projects } from '@/data/projects';
import Project from './Project';

export default function ProjectList() {
  return (
    <section
      className='flex flex-col items-center h-screen pt-32 md:pt-52 layout'
      id='project'
    >
      <h1 className='text-2xl text-center md:text-5xl text-primary'>
        Some Things I've Built
      </h1>

      <div className='flex flex-col gap-8 mt-8 md:gap-12 md:mt-16 md:flex-row'>
        {projects.map((project) => (
          <Project key={Project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
