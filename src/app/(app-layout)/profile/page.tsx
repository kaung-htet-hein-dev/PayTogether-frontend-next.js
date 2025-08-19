'use client';

import React, { useState } from 'react';
import {
  User,
  Bell,
  CreditCard,
  Shield,
  HelpCircle,
  LogOut,
  Camera,
  Mail,
  Phone,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

interface ProfileProps {
  onLogout: () => void;
}

export default function Profile({ onLogout }: ProfileProps) {
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    currency: 'USD',
    language: 'en',
  });

  const [notifications, setNotifications] = useState({
    expenseAdded: true,
    balanceUpdates: true,
    reminders: false,
    weeklySummary: true,
  });

  const currencies = [
    { value: 'USD', label: 'US Dollar ($)' },
    { value: 'EUR', label: 'Euro (€)' },
    { value: 'GBP', label: 'British Pound (£)' },
    { value: 'CAD', label: 'Canadian Dollar (C$)' },
    { value: 'AUD', label: 'Australian Dollar (A$)' },
    { value: 'JPY', label: 'Japanese Yen (¥)' },
  ];

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'it', label: 'Italiano' },
    { value: 'pt', label: 'Português' },
  ];

  const handleSave = () => {
    // In a real app, you would save the profile data
    console.log('Saving profile:', profile);
  };

  return (
    <div className="space-y-6 pb-20 lg:pb-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Profile & Settings</h1>
        <p className="mt-2 text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      {/* Profile Info */}
      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="bg-teal-100 text-teal-700 text-xl">
                {profile.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-teal-600 hover:bg-teal-700"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">{profile.name}</h2>
            <p className="text-muted-foreground">{profile.email}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={e => setProfile(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10"
                  value={profile.email}
                  onChange={e => setProfile(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  className="pl-10"
                  value={profile.phone}
                  onChange={e => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="currency">Preferred Currency</Label>
              <Select
                value={profile.currency}
                onValueChange={value => setProfile(prev => ({ ...prev, currency: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map(currency => (
                    <SelectItem key={currency.value} value={currency.value}>
                      {currency.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="language">Language</Label>
            <Select
              value={profile.language}
              onValueChange={value => setProfile(prev => ({ ...prev, language: value }))}
            >
              <SelectTrigger className="w-full md:w-1/2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map(language => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={handleSave} className="bg-teal-600 hover:bg-teal-700">
              Save Changes
            </Button>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-foreground">New Expense Added</h3>
              <p className="text-sm text-muted-foreground">
                Get notified when someone adds a new expense
              </p>
            </div>
            <Switch
              checked={notifications.expenseAdded}
              onCheckedChange={checked =>
                setNotifications(prev => ({ ...prev, expenseAdded: checked }))
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-foreground">Balance Updates</h3>
              <p className="text-sm text-muted-foreground">
                Get notified when your balance changes
              </p>
            </div>
            <Switch
              checked={notifications.balanceUpdates}
              onCheckedChange={checked =>
                setNotifications(prev => ({ ...prev, balanceUpdates: checked }))
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-foreground">Payment Reminders</h3>
              <p className="text-sm text-muted-foreground">Get reminded about pending payments</p>
            </div>
            <Switch
              checked={notifications.reminders}
              onCheckedChange={checked =>
                setNotifications(prev => ({ ...prev, reminders: checked }))
              }
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-foreground">Weekly Summary</h3>
              <p className="text-sm text-muted-foreground">Get a weekly summary of your expenses</p>
            </div>
            <Switch
              checked={notifications.weeklySummary}
              onCheckedChange={checked =>
                setNotifications(prev => ({ ...prev, weeklySummary: checked }))
              }
            />
          </div>
        </div>
      </Card>

      {/* Other Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Payment Methods</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Manage your payment methods for settling expenses
          </p>
          <Button variant="outline" className="w-full">
            Add Payment Method
          </Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-foreground">Privacy & Security</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Manage your privacy settings and account security
          </p>
          <Button variant="outline" className="w-full">
            Security Settings
          </Button>
        </Card>
      </div>

      {/* Help & Support */}
      <Card className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <HelpCircle className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold text-foreground">Help & Support</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
            <HelpCircle className="h-6 w-6" />
            <span>Help Center</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
            <Mail className="h-6 w-6" />
            <span>Contact Support</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
            <User className="h-6 w-6" />
            <span>Send Feedback</span>
          </Button>
        </div>
      </Card>

      {/* Sign Out */}
      <Card className="p-6">
        <Button variant="destructive" className="w-full" onClick={onLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </Card>
    </div>
  );
}
