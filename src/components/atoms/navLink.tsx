'use client';

import { NAVIGATION_ITEMS } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const NavLink = () => {
  const pathName = usePathname();

  return NAVIGATION_ITEMS.map(item => (
    <Link
      key={item.id}
      href={item.path}
      className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 w-full transition-colors ${
        pathName === item.path
          ? 'bg-teal-50 text-teal-700'
          : 'text-foreground hover:text-teal-700 hover:bg-muted'
      }`}
    >
      <item.icon className="h-6 w-6 shrink-0" />
      {item.label}
    </Link>
  ));
};
