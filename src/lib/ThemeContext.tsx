import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'stone' | 'monochrome' | 'sahara' | 'midnight';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('stone');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-stone', 'theme-monochrome', 'theme-sahara', 'theme-midnight');
    
    if (theme !== 'stone') {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  // Expose it globally so we could save it to local storage if desired
  useEffect(() => {
    const stored = localStorage.getItem('theme-preference') as Theme;
    if (stored) {
      setTheme(stored);
    }
  }, []);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme-preference', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
