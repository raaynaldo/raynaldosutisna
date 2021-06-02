import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import { fontSize } from 'tailwindcss/defaultTheme';
import { BsChevronDoubleDown, BsList } from 'react-icons/bs';
import Image from 'next/image';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <>
      <Seo />
      <header className='sticky top-0 z-10 bg-white shadow-sm'>
        <nav className='flex items-center justify-between h-20 layout'>
          <figure className='w-[30px]'>
            <Image
              src='/images/logo.png'
              priority
              width={100}
              height={123}
              layout='responsive'
            />
          </figure>
          <ul className='flex items-center space-x-4 text-sm font-medium md:space-x-20 md:text-base font-firaCode'>
            <li>Experience</li>
            <li>Project</li>
            <li>About</li>
          </ul>
          <button className='px-3 py-1 border-2 rounded-lg md:inline border-primary text-primary font-firaCode'>
            Resume
          </button>
          {/* <button className='text-4xl text-primary md:hidden'>
            <BsList></BsList>
          </button> */}
        </nav>
      </header>

      <main className='overflow-x-hidden'>
        <section className='relative flex flex-col items-center justify-center space-y-4 md:space-y-6 h-screen-minus-div layout'>
          <h2 className='font-medium text-center md:text-4xl'>
            Hello there! My name is
          </h2>
          <h1 className='text-6xl text-center text-primary md:text-8xl'>
            Raynaldo Sutisna
          </h1>
          <p className='max-w-xs tracking-wide text-center md:max-w-lg'>
            I’m a Silver Spring-based full-stack Web Developer. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Na quis tempor enim.
            Pellentesque eget malesuada arcu.
          </p>
          <button className='px-3 py-1 text-base border-2 rounded-lg border-primary font-firaCode'>
            Get In Touch
          </button>
          <h2 className='text-primary'>
            <BsChevronDoubleDown />
          </h2>
          <span
            // className='r-letter'
            className='absolute font-bold md:inline -right-20 md:bottom-0 md:right-0 opacity-20 text-primary font-firaCode r-letter'
            // style={{ fontSize: '50rem', marginBottom: '-8.25rem' }}
          >
            R
          </span>
        </section>

        <Experience />
        {/* <section className='flex flex-col items-center justify-center h-screen layout'>
          <h1 className='text-primary'>Where I've Worked</h1>
          <select className='mx-5 mt-5 mb-3 border rounded-md md:hidden'>
            <option>VitusVet</option>
            <option>Code The Dream</option>
            <option>Emerio Indonesia</option>
            <option>Mitra Integrasi Informatika</option>
            <option>Neurosot Indonesia</option>
          </select>
          <div className='p-5 mx-5 border rounded-lg shadow-md'>
            <p className='text-base font-bold'>
              Full Stack Web Developer{' '}
              <span className='text-primary'>@Emerio Indonesia</span>
            </p>
            <p>November 2018 - August 2019</p>
            <ul className='mt-4 list-disc list-inside'>
              <li>
                Was part of the implementation team of the Regla IFRS 9 system
                for two of the top five banks in Indonesia.
              </li>
              <li>
                Designed and built user interface IFRS9 application requirements
                using ASP.NET Web Form.
              </li>
              <li>
                Involved in software architecture design by leveraging the most
                efficient and effective frameworks.
              </li>
              <li>
                Maintained version control system (git) and mentored an
                internship student to understand project structure.
              </li>
            </ul>
          </div>
        </section> */}
        {/* <footer></footer> */}
      </main>
    </>
  );
}
