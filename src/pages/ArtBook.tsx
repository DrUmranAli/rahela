import { motion } from 'motion/react';

export default function ArtBook() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 h-[calc(100vh-80px)] flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-serif text-theme-text mb-4">Art Book</h1>
        <p className="text-theme-text opacity-80 font-sans">
          A curated portfolio of practice-based work as a material form of documentation and dissemination.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex-grow w-full bg-theme-accent rounded-sm overflow-hidden shadow-inner border border-theme-accent/50 relative"
      >
        {/* We use an object tag for robust cross-site native PDF viewing, falling back to iframe/embed */}
        <object
          data="/data/Print.pdf"
          type="application/pdf"
          className="w-full h-full"
        >
          <iframe
            src="/data/Print.pdf"
            className="w-full h-full border-none"
            title="Art Book PDF"
          >
            <div className="flex items-center justify-center h-full p-8 text-center text-theme-text opacity-80">
              <p>Your browser does not support viewing PDFs directly. <br />
                <a href="/data/Print.pdf" className="underline mt-2 inline-block text-theme-text" target="_blank" rel="noreferrer">
                  Download the PDF to view it.
                </a>
              </p>
            </div>
          </iframe>
        </object>
      </motion.div>
    </div>
  );
}
