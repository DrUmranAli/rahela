import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const exhibitions = [
  {
    id: 'halifax',
    title: 'Everybody Arts Residency, Halifax',
    description: 'A space to present and test the work of Shilpo Shikka and Noora Ruhi in a new setting. This phase concentrated on how the work is experienced, understood, and positioned within various institutional and curatorial contexts.',
    image: '/gallery/exhibitions/halifax/cover.jpg'
  },
  {
    id: 'noora-ruhi',
    title: 'Noora Ruhi Exhibition',
    description: 'Exploring embodied spirituality, the link between place and Muslim female identity through art.',
    image: '/gallery/exhibitions/noora-ruhi/cover.jpg'
  },
  {
    id: 'shilpo-shikka',
    title: 'Shilpo Shikka Exhibition',
    description: 'An exhibition exploring identity, visibility, and representation through textile and print traditions.',
    image: '/gallery/exhibitions/shilpo-shikka/cover.jpg'
  }
];

export default function Exhibitions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-serif text-theme-text mb-16 border-b border-theme-accent pb-8"
      >
        Exhibitions
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {exhibitions.map((exhibition, i) => (
          <motion.div
            key={exhibition.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group block"
          >
            <Link to={`/exhibitions/${exhibition.id}`} className="block">
              <div className="aspect-square bg-theme-accent mb-6 overflow-hidden rounded-sm relative">
                <img 
                  src={exhibition.image} 
                  alt={exhibition.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to background color if image doesn't exist yet
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
                <div className="absolute inset-0 bg-theme-text/0 transition-colors duration-500 group-hover:bg-theme-text/20 z-10" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-white z-20">
                  <span className="opacity-0 translate-y-4 transition-all duration-300 tracking-wide font-sans font-medium uppercase text-sm group-hover:opacity-100 group-hover:translate-y-0">
                    View Exhibition
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-serif text-theme-text mb-2 transition-colors group-hover:text-theme-text/80">
                {exhibition.title}
              </h2>
              <p className="text-theme-muted font-sans leading-relaxed">
                {exhibition.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
