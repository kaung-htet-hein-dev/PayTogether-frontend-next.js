import { Activity, Home, User, Users } from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { id: 'dashboard', label: 'Home', icon: Home, path: '/home' },
  { id: 'groups', label: 'Groups', icon: Users, path: '/group' },
  { id: 'activity', label: 'Activity', icon: Activity, path: '/activity' },
  { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
];
