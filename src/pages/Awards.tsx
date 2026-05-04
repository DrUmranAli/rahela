import { motion } from 'motion/react';
import { useMemo } from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { parseGlobImages } from '../lib/galleryUtils';

export default function Awards() {
  const globResult = import.meta.glob('/src/assets/gallery/awards/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }) as Record<string, string>;
  const images = useMemo(() => parseGlobImages(globResult), [globResult]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl font-serif text-theme-text mb-6">Awards &amp; Recognition</h1>
        <div className="text-lg text-theme-text opacity-80 leading-relaxed font-sans mt-8">
          <p>
            A collection of accolades and recognitions received throughout the artistic and research journey.
          </p>
        </div>
      </motion.div>

      <GalleryGrid images={images} />
    </div>
  );
}
