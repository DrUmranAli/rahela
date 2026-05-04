import { motion } from 'motion/react';

export default function PhDThesis() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-serif text-theme-text mb-8 border-b border-theme-accent pb-8">
          Navigating Faith and Practice: <br/>
          <span className="text-2xl sm:text-3xl font-light text-theme-muted mt-4 block">A Practice-Based and Autoethnographic Study of British Muslim Womanhood in Contemporary Art</span>
        </h1>
        
        <div className="prose prose-theme prose-lg max-w-none prose-headings:font-serif prose-a:text-theme-text">
          <p className="lead text-xl text-theme-text opacity-90 italic">
            This doctoral research investigates how British Muslim women artists of South Asian descent navigate identity, representation, and visibility within the contemporary UK art scene.
          </p>

          <h2 className="text-3xl mt-12 mb-6">Abstract</h2>
          <p>
            Positioned at the intersection of faith, gender, and cultural heritage, these artists engage with mainstream institutions that often marginalise or stereotype Muslim women, while also negotiating expectations within their own communities.
          </p>
          <p>
            Grounded in the practice-based projects <em>Shilpo Shikka</em> (Art Education) and <em>Noora Ruhi</em> (Spiritual Light), the study adopts an autoethnographic and practice-based approach that integrates creative experimentation with critical reflection. It draws on traditional Islamic art forms such as Tezhip (illumination) alongside contemporary media, including photography and artificial intelligence, to show how artistic practice can produce new forms of knowledge.
          </p>
          <p>
            By combining traditional and digital techniques, the research challenges established artistic hierarchies and affirms lived experience as a rigorous form of inquiry. By framing creative practice as both a method and an outcome, the study provides original insights into representation, practice-based research, and the intersections of Islam, womanhood, and contemporary art.
          </p>

          <h2 className="text-3xl mt-16 mb-6">The Khan &amp; Rahela Frameworks</h2>
          <p>
            A key contribution of this study is the development of two related analytical frameworks: the <strong>Rahela Framework</strong> and the <strong>Khan Framework</strong>. Developed through a combination of literature review, artistic practice, and participant insights, these frameworks explore both the individual and institutional aspects of Muslim women's artistic endeavours.
          </p>

          <h3 className="text-2xl mt-8 mb-4">The Khan Framework</h3>
          <p>
            The Khan Framework guides arts institutions and commissioners on more culturally sensitive and accountable engagement with Muslim women artists. It emphasises questions of institutional representation, authorship, and culturally situated practice, highlighting the role of insider knowledge, ethical positioning, and community engagement. 
          </p>
          <p>
            It proposes clear, actionable strategies that institutions can implement to promote meaningful change, such as developing inclusive policies, establishing mentorship programmes, and ensuring equitable access to funding and professional networks.
          </p>

          <h3 className="text-2xl mt-8 mb-4">The Rahela Framework</h3>
          <p>
            The Rahela Framework highlights the personal, reflective, and faith-based experiences of the artist. The name 'Rahela' translates as 'traveller', and the framework situates creative practice, travel, and spiritual reflection within a cyclical, iterative process. 
          </p>
          <p>
            It centres on movement, journeying, and iterative processes, exploring how meaning is generated through cycles of making, reflection, and relational experience across time and space. The core signifies the spiritual and creative journey (<em>rahela</em>), including faith, devotion, personal transformation, and engagement with Islamic heritage.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
