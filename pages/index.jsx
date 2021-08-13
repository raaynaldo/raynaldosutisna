import Image from 'next/image';
import Link from 'next/link';

import Seo from '@/components/Seo';
import Experience from '@/components/Experience';

import { fontSize } from 'tailwindcss/defaultTheme';
import { BsChevronDoubleDown, BsList } from 'react-icons/bs';
import ProjectList from '@/components/ProjectList';

export default function Home() {
  return (
    <>
      <Seo />
      <header className='sticky top-0 z-10 bg-white shadow-sm'>
        <nav className='flex items-center justify-between h-20 layout'>
          <Link href=''>
            <figure className='w-[30px]'>
              <Image
                src='/images/logo.png'
                priority
                width={100}
                height={123}
                layout='responsive'
              />
            </figure>
          </Link>
          <ul className='flex items-center space-x-4 text-xs font-medium md:space-x-20 md:text-sm font-firaCode'>
            <li>
              <Link href='/#experience'>Experience</Link>
            </li>
            <li>
              <Link href=''>Project</Link>
            </li>
            <li>
              <Link href=''>About</Link>
            </li>
          </ul>
          <a
            href='/resume.pdf'
            target='_blank'
            className='px-3 py-1 text-xs border-2 rounded-lg md:text-sm md:inline border-primary text-primary font-firaCode'
          >
            Resume
          </a>
          {/* <button className='text-4xl text-primary md:hidden'>
            <BsList></BsList>
          </button> */}
        </nav>
      </header>

      <main className='overflow-x-hidden' id=''>
        <section className='relative flex flex-col items-center justify-center space-y-4 md:space-y-6 h-screen-minus-div layout'>
          <h2 className='font-medium text-center md:text-4xl'>
            Hello there! My name is
          </h2>
          <h1 className='text-6xl text-center text-primary md:text-8xl'>
            Raynaldo Sutisna
          </h1>
          <p className='max-w-xs tracking-wide text-center md:max-w-lg'>
            I’m a Silver Spring-based full-stack Web Developer. I'm passionate
            to build scalable application and eager to learn a new technology,
            and I love teach people.
          </p>
          <button className='px-3 py-1 text-base border-2 rounded-lg border-primary font-firaCode'>
            Get In Touch
          </button>
          <p className='absolute text-4xl text-primary bottom-10 animate-bounce'>
            <BsChevronDoubleDown />
          </p>
          <span className='absolute font-bold md:inline -right-20 md:bottom-0 md:right-0 opacity-20 text-primary font-firaCode r-letter'>
            R
          </span>
        </section>

        <Experience />

        <ProjectList />
        {/* <footer></footer> */}
      </main>
    </>
  );
}
