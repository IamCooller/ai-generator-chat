import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { _siteUrl } from './constants';

export interface PageMeta {
  title: string;
  description: string;
  openGraph?: OpenGraph;
}

const defaultMeta = {
  locale: 'en_CA',
  type: 'website'
};

type Slug = '/';

const pagesMeta: Record<Slug, { title: string; description: string; imageUrl: string }> = {
  '/': {
    title: 'CyberFoxes - Futuristic Design and Development',
    description:
      'Welcome to CyberFoxes, your gateway to the future of web design and development. Specializing in neon-style portfolios, immersive 3D interactions, and captivating animations, we bring creativity and innovation to life.',
    imageUrl: `${_siteUrl}/img/triangle.png` // Replace with the path to your OG image
  }
};

export const getPageMeta = (slug: string): PageMeta => {
  const defaultPageMeta = pagesMeta['/'];
  const meta = pagesMeta[slug as Slug] || {};

  const finalMeta = {
    title: meta.title || defaultPageMeta.title,
    description: meta.description || defaultPageMeta.description,
    imageUrl: meta.imageUrl || defaultPageMeta.imageUrl
  };

  const openGraph: OpenGraph = {
    title: finalMeta.title,
    description: finalMeta.description,
    url: `${_siteUrl}${slug === '/' ? '' : slug}`,
    siteName: finalMeta.title,
    images: [
      {
        url: finalMeta.imageUrl,
        type: finalMeta.imageUrl.endsWith('.svg') ? 'image/svg' : 'image/png'
      }
    ],
    ...defaultMeta
  };

  return {
    title: finalMeta.title,
    description: finalMeta.description,
    openGraph
  };
};
