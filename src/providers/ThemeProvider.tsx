'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

import React from 'react';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system">
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
