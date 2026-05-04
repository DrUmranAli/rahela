import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { parseGlobImages } from '../lib/galleryUtils';

const projectContent: Record<string, { title: string; description: string; subsections?: { id: string; title: string }[] }> = {
  'noora-ruhi': {
    title: 'Noora Ruhi',
    description: 'Builds on earlier work by extending research through an exploration of place, geography, and diasporic experience. Artefact creation in this phase is influenced by migration histories and by the relationships among landscape, memory, and identity. This work focuses on embodied spirituality and the link between place and Muslim female identity.',
    subsections: [
      { id: 'a4_on_a3_photo', title: 'A4 on A3 Photo' },
      { id: 'acetate', title: 'Acetate' },
      { id: 'giclee', title: 'Giclee' },
      { id: 'islamic_illumination', title: 'Islamic Illumination and Calligraphy' },
      { id: 'mosque_architecture', title: 'Photography of Mosque Architecture' },
    ]
  },
  'sacred-recursion': {
    title: 'Sacred Recursion',
    description: 'Explores Islamic geometry, illumination, and diasporic spatial memory through photographic studies of interior domes. Circular compositions reimagine each dome as a cosmological diagram.'
  },
  'shilpo-shikka': {
    title: 'Shilpo Shikka',
    description: 'Marks the initial phase of the research, exploring questions about Muslim women\'s visibility, creative agency, and the negotiation between faith and artistic practice. Early artefacts engage with cultural memory, familial textile traditions, and Islamic visual language.'
  }
};

export default function PortfolioProject() {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Use Vite's import.meta.glob to load ALL portfolio images eagerly.
  // We use type casting so TypeScript knows it's a record of strings (urls).
  const globResult = import.meta.glob('/src/assets/gallery/portfolio/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }) as Record<string, string>;
  
  const allImages = useMemo(() => parseGlobImages(globResult), [globResult]);

  if (!projectId || !projectContent[projectId]) {
    return <div className="py-32 text-center">Project not found.</div>;
  }

  const content = projectContent[projectId];

  // Filter images for this project
  const projectImages = allImages.filter(img => img.path.includes(`/portfolio/${projectId}/`));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
      <Link to="/portfolio" className="text-sm font-medium text-theme-muted hover:text-theme-text transition-colors mb-8 inline-block">
        &larr; Back to Portfolio
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl font-serif text-theme-text mb-6">{content.title}</h1>
        <p className="text-lg text-theme-text opacity-80 leading-relaxed font-sans">
          {content.description}
        </p>
      </motion.div>

      {content.subsections ? (
        <div className="space-y-24">
          {content.subsections.map((sub, i) => {
            const subImages = projectImages.filter(img => img.path.includes(`/${sub.id}/`));
            return (
              <motion.div 
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <h3 className="text-2xl font-serif text-theme-text mb-8 border-b border-theme-accent pb-4">{sub.title}</h3>
                <GalleryGrid images={subImages} />
              </motion.div>
            );
          })}
        </div>
      ) : (
        <GalleryGrid images={projectImages} />
      )}
    </div>
  );
}
