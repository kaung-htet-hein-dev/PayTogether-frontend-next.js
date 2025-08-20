import React from 'react';
import ThemeSwitcher from '../atoms/themeSwitcher';
import { NavLink } from '../atoms/navLink';

export const SideBar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card pb-4 shadow-sm border-r border-border">
        <div className="flex h-16 shrink-0 items-center justify-between pr-3">
          <h1 className="text-xl font-semibold text-foreground pl-6">SplitEasy</h1>
          <ThemeSwitcher />
        </div>
        <nav className="flex flex-1 flex-col px-6">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                <NavLink />
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
