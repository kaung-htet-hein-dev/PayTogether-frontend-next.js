'use client';

import ThemeSwitcher from '@/components/ui/themeSwitcher';
import React from 'react';
import { Users, Home, Activity, User } from 'lucide-react';
import Link from 'next/link';

const navigationItems = [
  { id: 'dashboard' as const, label: 'Home', icon: Home, path: '/home' },
  { id: 'groups' as const, label: 'Groups', icon: Users, path: '/group' },
  { id: 'activity' as const, label: 'Activity', icon: Activity, path: '/activity' },
  { id: 'profile' as const, label: 'Profile', icon: User, path: '/profile' },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
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
                  {navigationItems.map(item => (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 w-full transition-colors ${
                          false
                            ? 'bg-teal-50 text-teal-700'
                            : 'text-foreground hover:text-teal-700 hover:bg-muted'
                        }`}
                      >
                        <item.icon className="h-6 w-6 shrink-0" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Mobile header */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-card px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:hidden">
          <h1 className="text-xl font-semibold text-foreground">SplitEasy</h1>
        </div>

        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border lg:hidden">
        <div className="grid grid-cols-4 py-2">
          {navigationItems.map(item => (
            <Link
              key={item.id}
              href={item.path}
              className={`flex flex-col items-center justify-center p-2 transition-colors ${
                false ? 'text-teal-600' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Floating Action Button for Adding Expenses */}
    </div>
  );
};

export default AppLayout;
