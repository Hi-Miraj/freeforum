
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Logo />
          <span className="text-sm md:text-base font-serif">The Free Forum</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="rounded-full hover:bg-gray-100 transition-colors">
            Subscribe
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
