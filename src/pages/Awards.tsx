import { motion } from 'motion/react';
import { useMemo } from 'react';
import { ExternalLink, PlayCircle, Award, Quote } from 'lucide-react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { parseGlobImages } from '../lib/galleryUtils';
import awardImage from '../assets/gallery/awards/16950306.jpg';
import youtubeThumb from '../assets/gallery/awards/youtube_shot.jpg';

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
        <div className="mt-12 bg-theme-bg border border-theme-accent p-8 sm:p-12 rounded-sm shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center space-x-2 text-theme-muted uppercase tracking-wider text-sm font-medium mb-4">
                <Award size={18} />
                <span>Asian Image Feature</span>
              </div>
              <h2 className="text-3xl font-serif text-theme-text mb-6 leading-tight">
                Equality, Diversity, and Inclusivity Engagement Award
              </h2>
              
              <div className="space-y-6 text-theme-text opacity-90 leading-relaxed font-sans">
                <p>
                  Rahela Khan was presented with the <strong>'Equality, Diversity, and Inclusivity Engagement Award'</strong> at the University of Salford’s Create Student Awards held at the Lowry Theatre, which honours achievements in arts, media, and creative technologies.
                </p>
                <p>
                  Presented by Qaisra Shahraz (Founder and Executive Director of MACFEST), the award recognises Rahela's dedication to breaking down barriers and empowering underrepresented groups, most notably Muslim women. As a Postgraduate Researcher and student rep for well-being, her work also extends to engaging disadvantaged groups, such as school-age children and adults over 55.
                </p>
                
                <blockquote className="border-l-4 border-theme-accent pl-6 py-2 my-8 italic text-theme-muted relative">
                  <Quote size={24} className="absolute -left-3 -top-3 opacity-20 text-theme-text bg-theme-bg" />
                  "With a special focus on Muslim women, I wanted to encourage them to embrace their creativity, challenge societal expectations, and reclaim their narratives. The aim was to break free from restrictive stereotypes and empower Muslim women to express their unique perspectives and share their stories with the world."
                </blockquote>
              </div>
              
              <div className="mt-8 pt-6 border-t border-theme-accent/50">
                <a 
                  href="https://www.asianimage.co.uk/news/education/23626545.rahela-wins-diversity-award-inspiring-muslim-women-art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-theme-text font-medium border-b border-theme-text pb-1 hover:opacity-70 transition-opacity"
                >
                  <ExternalLink size={16} />
                  <span>Read the Full Article on Asian Image</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Featured Image */}
              <div className="aspect-[4/3] bg-theme-accent rounded-sm overflow-hidden relative shadow-sm border border-theme-accent">
                <img 
                  src={awardImage} 
                  alt="Rahela receiving the Create Student Award at the Lowry Theatre" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* YouTube Video Link */}
              <a 
                href="https://www.youtube.com/watch?v=orTGMTo1q5g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block relative aspect-video bg-theme-accent rounded-sm overflow-hidden shadow-sm border border-theme-accent"
              >
                <img 
                  src={youtubeThumb} 
                  alt="Rahela Diversity Award Ceremony Video" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#D4C3B3]/20 transition-colors group-hover:bg-[#D4C3B3]/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="bg-black/30 p-4 rounded-full backdrop-blur-sm group-hover:bg-black/50 transition-colors">
                    <PlayCircle size={48} className="opacity-90 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium tracking-wider uppercase text-sm mt-4 opacity-90 drop-shadow-md">Watch Video</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-20">
        <h3 className="text-2xl font-serif text-theme-text mb-8 border-b border-theme-accent pb-4">Gallery</h3>
        <GalleryGrid images={images.filter(img => !img.src.includes('16950306.jpg') && !img.src.includes('youtube_shot.jpg'))} />
      </div>
    </div>
  );
}
