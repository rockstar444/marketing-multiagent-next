"use client";

import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  setActiveSection: (section: string) => void;
}

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Technologies', path: '/#technologies' },
  { name: 'Contact', path: '/contact' },
];

const Navigation = ({ setActiveSection }: NavigationProps) => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Theme Toggle */}
      <Button 
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold"
          >
            AIMarketer
          </Link>
          <div className="space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  transition-colors hover:text-primary
                  ${pathname === item.path ? 'font-semibold text-primary' : 'text-muted-foreground'}
                `}
                onClick={() => {
                  if (item.path.startsWith('/#')) {
                    setActiveSection(item.name.toLowerCase());
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation; 