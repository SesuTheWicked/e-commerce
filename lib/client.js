import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const Client = sanityClient({
  projectId: '64hj1qwz',
  dataset: 'production',
  apiVersion: '2023-07-13',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(Client);

export const urlFor = (source) => builder.image(source);