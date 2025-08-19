'use client';
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';
import { Button } from './button';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant={'ghost'}
      className="rounded-full"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size={'sm'}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeSwitcher;
