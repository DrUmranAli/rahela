import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-theme-accent/30 py-32 sm:py-40">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="gridPattern" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#gridPattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-7xl font-serif text-theme-text leading-[1.1] mb-8"
            >
              Navigating Faith <br/>
              <span className="italic font-light text-theme-muted">&amp; Practice</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl text-theme-text opacity-80 leading-relaxed font-sans"
            >
              Rahela Khan is a visual artist and practice-based PhD researcher based in the north-west of England. Working across photography, textiles, painting, and printmaking, her practice investigates Muslim identity, Islamic visual culture, and diasporic experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif text-theme-text mb-6">About the Research</h2>
              <div className="space-y-4 text-theme-text opacity-80 font-sans leading-relaxed">
                <p>
                  Her research focuses on the representation of Muslim women artists and underrepresented communities within the arts and cultural sectors, with a special focus on non-figurative visual languages such as pattern, geometry, and illumination.
                </p>
                <p>
                  Photography remains a key part of her practice, often exploring light as both subject and medium, alongside socially engaged projects with community groups. 
                </p>
                <p>
                  Khan's work combines traditional Islamic aesthetics with contemporary approaches, including digital and AI-driven processes, exploring how visual cultures are shared and reinterpreted across time and place.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  to="/phd-thesis"
                  className="inline-flex items-center text-sm font-semibold tracking-widest uppercase text-theme-text hover:text-theme-muted transition-colors border-b border-theme-text pb-1"
                >
                  Read the Thesis
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-theme-accent p-8 rounded-sm flex flex-col justify-end relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-theme-text/10 mix-blend-multiply"></div>
              {/* This acts as a placeholder for a featured image. Since images will be added by the user, we structure it to look beautiful even empty. */}
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-serif mb-2 drop-shadow-md">The Creative Journey</h3>
                <Link to="/portfolio" className="text-white hover:text-theme-accent transition-colors underline underline-offset-4 decoration-white/50">
                  Explore the Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
