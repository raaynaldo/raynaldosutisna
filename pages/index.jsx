import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';

export default function Home() {
  return (
    <>
      <Seo />

      <header>
        <nav className='flex items-center justify-between h-20'>
          <img src='/images/logo.png' alt='logo' width='50px' />
          <ul className='flex items-center space-x-5'>
            <li>About</li>
            <li>Experience</li>
            <li>Project</li>
          </ul>
          <button className='px-3 py-1 border-2 rounded-lg border-primary'>
            Resume
          </button>
        </nav>
      </header>
      {/* <main>
        <section className='bg-dark'></section>
      </main>
      <footer></footer> */}
    </>
  );
}
