'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, Download, Code, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/', icon: Heart },
  { name: 'All Emojis', href: '/all-tiktok-emojis', icon: Heart },
  { name: 'Download PNG', href: '/tiktok-emojis-download', icon: Download },
  { name: 'Emoji Codes', href: '/tiktok-emoji-codes', icon: Code },
  { name: 'How to Use', href: '/how-to-use-tiktok-emojis', icon: BookOpen },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md dark:bg-black/90 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.png" 
              alt="TikTok Emojis Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-[#FE2C55] to-[#25F4EE] text-transparent bg-clip-text">
              TikTok Emojis.cc
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors dark:hover:text-[#25F4EE] ${
                  isActive(item.href)
                    ? 'text-[#FE2C55] dark:text-[#25F4EE]'
                    : 'text-gray-700 hover:text-[#FE2C55] dark:text-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-[#FE2C55] dark:text-gray-200 dark:hover:text-[#25F4EE]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-[#121212] border-l border-gray-100 dark:border-gray-800">
              <div className="flex flex-col space-y-4 mt-6">
                <div className="flex items-center space-x-2 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <Image 
                    src="/images/logo.png" 
                    alt="TikTok Emojis Logo" 
                    width={32} 
                    height={32} 
                    className="h-8 w-auto"
                  />
                  <span className="text-xl font-bold bg-gradient-to-r from-[#FE2C55] to-[#25F4EE] text-transparent bg-clip-text">TikTok Emojis</span>
                </div>
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-3 text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-[#FE2C55] dark:text-[#25F4EE]'
                          : 'text-gray-700 hover:text-[#FE2C55] dark:text-gray-200 dark:hover:text-[#25F4EE]'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 