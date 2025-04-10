import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'light' && <Sun className="h-5 w-5 text-secondary-800" />}
      {theme === 'dark' && <Moon className="h-5 w-5 text-secondary-200" />}
      {theme === 'system' && <Monitor className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />}
    </button>
  );
}
