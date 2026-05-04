import { motion } from 'motion/react';
import { useMemo } from 'react';
import { ExternalLink, PlayCircle } from 'lucide-react';
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
        className="mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-serif text-theme-text mb-6">Awards &amp; Recognition</h1>
        
        {/* Featured Award Article */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-theme-bg border border-theme-accent p-8 rounded-sm">
          <div>
            <span className="text-theme-muted uppercase tracking-wider text-sm font-medium mb-4 block">Asian Image Feature</span>
            <h2 className="text-3xl font-serif text-theme-text mb-6">Diversity Award for Inspiring Muslim Women</h2>
            <div className="text-lg text-theme-text opacity-80 leading-relaxed font-sans space-y-4">
              <p>
                Honoured for her work helping to showcase the art and experiences of Muslim women. This recognition highlights her continued dedication to expanding representation and creative visibility within the community.
              </p>
            </div>
            <div className="mt-8">
              <a 
                href="https://www.asianimage.co.uk/news/education/23626545.rahela-wins-diversity-award-inspiring-muslim-women-art/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-theme-text border-b border-theme-text pb-1 hover:opacity-70 transition-opacity"
              >
                <span>Read Full Article on Asian Image</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="aspect-[4/3] bg-theme-accent rounded-sm overflow-hidden relative">
              <img 
                src="/src/assets/gallery/awards/16950306.jpg" 
                alt="Rahela receiving the diversity award" 
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-theme-muted text-sm px-4 text-center -z-10">
                Image: 16950306.jpg
              </div>
            </div>
            
            {/* YouTube Video Link */}
            <a 
              href="https://www.youtube.com/watch?v=orTGMTo1q5g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block relative aspect-video bg-theme-accent rounded-sm overflow-hidden"
            >
              <img 
                src="/src/assets/gallery/awards/youtube_shot.jpg" 
                alt="Award Ceremony Video" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-theme-bg/40 transition-colors group-hover:bg-theme-bg/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <PlayCircle size={48} className="mb-3 opacity-90 group-hover:scale-110 transition-transform" />
                <span className="font-medium tracking-wide uppercase text-sm opacity-90">Watch Video</span>
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-20">
        <h3 className="text-2xl font-serif text-theme-text mb-8 border-b border-theme-accent pb-4">Gallery</h3>
        <GalleryGrid images={images} />
      </div>
    </div>
  );
}
