import { motion, AnimatePresence } from 'motion/react';
import { Palette, X, Check } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../../lib/ThemeContext';
import clsx from 'clsx';

const themes = [
  { id: 'stone', name: 'Stone (Default)', colors: { bg: '#FAFAF9', text: '#1C1917', accent: '#E7E5E4' } },
  { id: 'sahara', name: 'Sahara', colors: { bg: '#F4EBE1', text: '#4A3E38', accent: '#E2D2C6' } },
  { id: 'monochrome', name: 'Monochrome', colors: { bg: '#FFFFFF', text: '#000000', accent: '#E5E5E5' } },
  { id: 'midnight', name: 'Midnight', colors: { bg: '#0F172A', text: '#F8FAFC', accent: '#1E293B' } },
] as const;

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="absolute bottom-16 right-0 mb-2 w-64 bg-white shadow-xl border border-stone-200 rounded-lg p-2 overflow-hidden text-stone-900"
          >
            <div className="px-3 py-2 flex items-center justify-between border-b border-stone-100 mb-2">
              <h4 className="text-sm font-semibold select-none">Theme Preview</h4>
              <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-900 transition-colors">
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-col space-y-1">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setTheme(t.id as any); }}
                  className={clsx(
                    'w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors',
                    theme === t.id ? 'bg-stone-100 font-medium' : 'hover:bg-stone-50'
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-1 outline outline-1 outline-stone-200 rounded-full shadow-sm">
                      <div className="w-4 h-4 rounded-full border border-stone-900/10" style={{ backgroundColor: t.colors.bg }} />
                      <div className="w-4 h-4 rounded-full border border-stone-900/10" style={{ backgroundColor: t.colors.text }} />
                    </div>
                    <span>{t.name}</span>
                  </div>
                  {theme === t.id && <Check size={16} className="text-stone-900" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex items-center justify-center p-3 rounded-full shadow-lg transition-all duration-300",
          isOpen ? "bg-stone-900 text-white" : "bg-white text-stone-900 border border-stone-200 hover:bg-stone-50"
        )}
        aria-label="Toggle Theme Options"
      >
        <Palette size={20} />
      </button>
    </div>
  );
}
