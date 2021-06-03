import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Seo(props) {
  const router = useRouter();
  const meta = {
    title: "Raynaldo Sutisna's Portolio - raynaldosutisna.vercel.app",
    description:
      'Hey there 👋! Click here to know more about my experiences, projects, and blogs',
    image: 'https://raynaldosutisna.vercel.app/favicon/large-og.jpg',
    type: 'website',
    robots: 'follow, index',
    ...props,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta
        property='og:url'
        content={`https://raynaldosutisna.vercel.app${router.asPath}`}
      />
      <link
        rel='canonical'
        href={`https://raynaldosutisna.vercel.app${router.asPath}`}
      />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Raynaldo Sutisna' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@raaynaldo' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Theodorus Clarence'
          />
        </>
      )}
    </Head>
  );
}
