import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { parseGlobImages } from '../lib/galleryUtils';

const exhibitionContent: Record<string, { title: string; description: string }> = {
  'halifax': {
    title: 'Everybody Arts Residency, Halifax',
    description: 'The Everybody Arts Residency created a space to present and test the work of Shilpo Shikka and Noora Ruhi in a new setting. This phase concentrated on how the work is experienced, understood, and positioned within various institutional and curatorial contexts. Observations focused on visibility, representation, and the underrepresentation of Muslim women artists in contemporary art spaces.',
  },
  'noora-ruhi': {
    title: 'Noora Ruhi Exhibition',
    description: 'Building on earlier work, Noora Ruhi extended research into place, geography, and diasporic experience. The exhibition showcased experimental and materially-grounded practice linking Muslim female identity to sacred spaces and cultural memory.',
  },
  'shilpo-shikka': {
    title: 'Shilpo Shikka Exhibition',
    description: 'Shilpo Shikka marks the initial phase of the research, engaging with cultural memory, familial textile traditions, and Islamic visual language. The exhibition revealed tensions between institutional expectations and the desire to showcase spiritually rooted narratives.',
  }
};

export default function ExhibitionSection() {
  const { exhibitionId } = useParams<{ exhibitionId: string }>();
  
  const globResult = import.meta.glob('/src/assets/gallery/exhibitions/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' }) as Record<string, string>;
  
  const allImages = useMemo(() => parseGlobImages(globResult), [globResult]);

  if (!exhibitionId || !exhibitionContent[exhibitionId]) {
    return <div className="py-32 text-center">Exhibition not found.</div>;
  }

  const content = exhibitionContent[exhibitionId];
  const exhibitionImages = allImages.filter(img => img.path.includes(`/exhibitions/${exhibitionId.replace(/-/g, '_')}/`) || img.path.includes(`/exhibitions/${exhibitionId}/`));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
      <Link to="/exhibitions" className="text-sm font-medium text-theme-muted hover:text-theme-text transition-colors mb-8 inline-block">
        &larr; Back to Exhibitions
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

      <GalleryGrid images={exhibitionImages} />
    </div>
  );
}
