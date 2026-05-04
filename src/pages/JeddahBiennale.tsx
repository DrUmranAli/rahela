import { motion } from 'motion/react';
import { useMemo } from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { parseGlobImages } from '../lib/galleryUtils';

export default function JeddahBiennale() {
  const globResult = import.meta.glob('/src/assets/gallery/jeddah-biennale/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }) as Record<string, string>;
  const images = useMemo(() => parseGlobImages(globResult), [globResult]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl font-serif text-theme-text mb-6">Jeddah Biennale Reflections</h1>
        <div className="space-y-4 text-lg text-theme-text opacity-80 leading-relaxed font-sans mt-8">
          <p>
            These reflections are based on engagement with the Jeddah Biennale (2025), part of practice-based doctoral research. The Biennale serves as a critical tool for analysing curatorial frameworks and the representation of Islamic art within a contemporary non-Western setting.
          </p>
          <p>
            Experiencing it alongside a spiritual pilgrimage, the Biennale emphasised Islamic art as a living practice instead of a static historical artefact, connecting faith and artistic inquiry directly.
          </p>
          <p>
            A significant insight was the lack of translation or explanation of Muslim identity, which created space to consider issues of visibility, belonging, and the portrayal of Muslim women artists in contemporary art.
          </p>
        </div>
      </motion.div>

      <GalleryGrid images={images} />
    </div>
  );
}
