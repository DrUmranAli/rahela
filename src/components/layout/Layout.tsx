import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/exhibitions', label: 'Exhibitions' },
  { path: '/jeddah-biennale', label: 'Jeddah Biennale' },
  { path: '/awards', label: 'Awards' },
  { path: '/phd-thesis', label: 'PhD Research' },
  { path: '/art-book', label: 'Art Book' },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-theme-nav backdrop-blur-md border-b border-theme-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <NavLink to="/" className="text-2xl font-serif tracking-wide text-theme-text font-medium">
              Rahela Khan
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    clsx(
                      'text-sm font-medium transition-colors hover:text-theme-text',
                      isActive ? 'text-theme-text border-b-2 border-theme-text' : 'text-theme-muted'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-theme-text opacity-80 hover:text-theme-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-theme-bg border-b border-theme-accent"
            >
              <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      clsx(
                        'block text-lg font-medium transition-colors',
                        isActive ? 'text-theme-text' : 'text-theme-muted'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <ThemeSwitcher />

      <footer className="bg-theme-bg border-t border-theme-accent py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-theme-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Rahela Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
