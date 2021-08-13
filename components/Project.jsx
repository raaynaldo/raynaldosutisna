import Image from 'next/image';

export default function Project({ title, description, image }) {
  return (
    <div className='p-5 space-y-2 border shadow-sm'>
      <h4>{title}</h4>
      <p className='text-xs'>{description}</p>
      <figure className='w-full shadow-sm'>
        <Image
          src='/images/love4heroes.png'
          priority
          width={200}
          height={100}
          layout='responsive'
        />
      </figure>
    </div>
  );
}
