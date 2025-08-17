import ThemeSwitcher from '@/components/ui/themeSwitcher';
import React from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeSwitcher />
      {children}
    </div>
  );
};

export default AppLayout;
