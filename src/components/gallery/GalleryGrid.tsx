import { motion } from 'motion/react';
import type { GalleryImage } from '../../lib/galleryUtils';
import clsx from 'clsx';
import { useState } from 'react';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (images.length === 0) {
    return (
      <div className="py-20 text-center text-theme-muted italic">
        Images will be added here soon.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[250px]">
        {images.map((img, i) => (
          <motion.div
            key={img.path}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 8) * 0.1 }}
            className={clsx(
              'group relative overflow-hidden rounded-sm bg-theme-accent cursor-pointer',
              img.isStar ? 'sm:col-span-2 sm:row-span-2' : ''
            )}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.url}
              alt={img.filename}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-theme-text/0 transition-colors duration-500 group-hover:bg-theme-text/10" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-theme-text/90 backdrop-blur-sm p-4 sm:p-8 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            src={selectedImage.url}
            alt={selectedImage.filename}
            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
