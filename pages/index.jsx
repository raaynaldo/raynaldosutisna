import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import { fontSize } from 'tailwindcss/defaultTheme';
import { BsChevronDoubleDown, BsList } from 'react-icons/bs';

export default function Home() {
  return (
    <>
      <Seo />

      <header className='layout'>
        <nav className='flex items-center justify-between h-20'>
          <img src='/images/logo.png' alt='logo' width='50px' />
          <ul className='hidden space-x-20 md:flex md:items-center font-firaCode'>
            <li>About</li>
            <li>Experience</li>
            <li>Project</li>
          </ul>
          <button className='hidden px-3 py-1 border-2 rounded-lg md:inline border-primary text-primary font-firaCode'>
            Resume
          </button>
          <button className='text-5xl text-primary md:hidden'>
            <BsList></BsList>
          </button>
        </nav>
      </header>
      <main className='layout'>
        <section className='relative flex flex-col items-center justify-center space-y-6 h-screen-minus-div'>
          <h2 className='font-medium text-center md:text-5xl'>
            Hello there! My name is
          </h2>
          <h1 className='text-6xl text-center text-primary md:text-8xl'>
            Raynaldo Sutisna
          </h1>
          <p className='text-center md:w-1/2'>
            I’m a Silver Spring-based full-stack Web Developer. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Na quis tempor enim.
            Pellentesque eget malesuada arcu.
          </p>
          <button className='px-3 py-1 text-base border-2 rounded-lg border-primary font-firaCode'>
            Get In Touch
          </button>
          <h2 className='text-primary'>
            <BsChevronDoubleDown></BsChevronDoubleDown>
          </h2>
          <span
            className='absolute bottom-0 right-0 font-bold opacity-30 text-primary font-firaCode text-9xl'
            // style={{ fontSize: '50rem', lineHeight: 1 }}
          >
            R
          </span>
        </section>
      </main>
      {/* <footer></footer> */}
    </>
  );
}
