'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, User } from 'lucide-react';
import Image from 'next/image';
import Products from './Products';
import Platform from './Platform';
import Solutions from './Solutions';
import Global from './Global';
import Resources from './Resources';

type DropdownType = 'products' | 'platform' | 'solutions' | 'global' | 'resources' | null;

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleDropdown = (dropdown: DropdownType) => {
    console.log('Toggling dropdown:', dropdown, 'Current:', activeDropdown);
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div ref={navRef} className="relative w-full">
      <nav className="bg-[#3a212a] text-white px-6 py-4 shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo + Links */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* Replace with your own logo if needed */}
              <Image src="/logo.svg" alt="Logo" width={28} height={28} />
              <span className="font-bold text-lg">RIPPLING</span>
            </div>

            {/* Nav Links */}
            <div className="flex gap-6 text-sm font-medium">
              <Products 
                isOpen={activeDropdown === 'products'}
                onToggle={() => toggleDropdown('products')}
                onClose={closeDropdown}
              />
              <Platform 
                isOpen={activeDropdown === 'platform'}
                onToggle={() => toggleDropdown('platform')}
                onClose={closeDropdown}
              />
              <Solutions 
                isOpen={activeDropdown === 'solutions'}
                onToggle={() => toggleDropdown('solutions')}
                onClose={closeDropdown}
              />
              <Global 
                isOpen={activeDropdown === 'global'}
                onToggle={() => toggleDropdown('global')}
                onClose={closeDropdown}
              />
              <Resources 
                isOpen={activeDropdown === 'resources'}
                onToggle={() => toggleDropdown('resources')}
                onClose={closeDropdown}
              />
              <button className="hover:text-yellow-400 transition-colors duration-200">Pricing</button>
            </div>
          </div>

          {/* Right: Lang + Login + CTA */}
          <div className="flex items-center gap-6">
            {/* Language */}
            <button className="flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors duration-200">
              <Image src="/us.svg" alt="US Flag" width={20} height={20} />
              EN
            </button>

            <div className="h-6 w-px bg-white opacity-30" />

            {/* Login */}
            <button className="flex items-center gap-1 text-sm hover:text-yellow-400 transition-colors duration-200">
              <User size={16} /> Login
            </button>

            {/* CTA */}
            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-colors duration-200">
              See Rippling
            </button>
          </div>
        </div>
      </nav>

      {/* Full-width overlay for dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={closeDropdown}
        />
      )}
    </div>
  );
}
