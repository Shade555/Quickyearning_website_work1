'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe, User } from 'lucide-react';
import Image from 'next/image';
import Products from './Products';
import Platform from './Platform';
import Solutions from './Solutions';
import Global from './Global';
import Resources from './Resources';
import styles from './Navbar.module.css';

type DropdownType = 'products' | 'platform' | 'solutions' | 'global' | 'resources' | null;

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [navHovered, setNavHovered] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, top: 0, height: 0 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navLinksRef = useRef<HTMLDivElement>(null);

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
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Handle hover for dropdowns
  const handleDropdownEnter = (dropdown: DropdownType) => {
    setActiveDropdown(dropdown);
  };
  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Pill border animation logic
  const handleButtonHover = (idx: number) => {
    setHoveredIdx(idx);
    const btn = btnRefs.current[idx];
    if (btn && navLinksRef.current) {
      // Find the text span inside the button
      const textSpan = btn.querySelector('span,button');
      if (textSpan) {
        const linksRect = navLinksRef.current.getBoundingClientRect();
        const spanRect = textSpan.getBoundingClientRect();
        setPillStyle({
          left: spanRect.left - linksRect.left - 12, // 12px horizontal padding
          width: spanRect.width + 24, // 12px padding on each side
          top: spanRect.top - linksRect.top - 4, // 4px vertical padding
          height: spanRect.height + 8, // 4px padding top/bottom
        });
        return;
      }
      // fallback to button rect
      const linksRect = navLinksRef.current.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - linksRect.left,
        width: btnRect.width,
        top: btnRect.top - linksRect.top,
        height: btnRect.height,
      });
    }
  };

  // Reset pill on mouse leave
  const handleNavLeave = () => {
    setNavHovered(false);
    setPillStyle({ left: 0, width: 0, top: 0, height: 0 });
    setActiveDropdown(null);
    setHoveredIdx(null);
  };

  return (
    <div
      ref={navRef}
      className="relative w-full"
      onMouseEnter={() => setNavHovered(true)}
      onMouseLeave={handleNavLeave}
    >
      <nav
        className={`px-6 py-4 shadow-md relative z-50 transition-colors duration-300 ${navHovered ? 'bg-white text-black' : 'bg-[#3a212a] text-white'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo + Links */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image src="/Logo.png" alt="Logo" width={28} height={28} />
              <span className="font-bold text-lg">Diamondrock</span>
            </div>

            {/* Nav Links */}
            <div ref={navLinksRef} className="flex gap-6 text-sm font-medium relative" style={{ minHeight: 36 }}>
              {/* Pill border */}
              {navHovered && (
                <div
                  className={styles['pill-border']}
                  style={{
                    left: pillStyle.left,
                    width: pillStyle.width,
                    top: pillStyle.top,
                    height: pillStyle.height,
                    opacity: pillStyle.width > 0 ? 1 : 0,
                  }}
                />
              )}
              <div
                ref={el => { btnRefs.current[0] = el; }}
                onMouseEnter={() => { handleDropdownEnter('products'); handleButtonHover(0); }}
                className="relative group overflow-hidden"
              >
                <Products
                  isOpen={activeDropdown === 'products'}
                  onToggle={() => toggleDropdown('products')}
                  onClose={closeDropdown}
                  textColor={hoveredIdx === 0 ? 'text-white' : navHovered ? 'text-black' : 'text-white'}
                  labelAnimation
                />
              </div>
              <div
                ref={el => { btnRefs.current[1] = el; }}
                onMouseEnter={() => { handleDropdownEnter('platform'); handleButtonHover(1); }}
                className="relative group overflow-hidden"
              >
                <Platform
                  isOpen={activeDropdown === 'platform'}
                  onToggle={() => toggleDropdown('platform')}
                  onClose={closeDropdown}
                  textColor={hoveredIdx === 1 ? 'text-white' : navHovered ? 'text-black' : 'text-white'}
                  labelAnimation
                />
              </div>
              <div
                ref={el => { btnRefs.current[2] = el; }}
                onMouseEnter={() => { handleDropdownEnter('solutions'); handleButtonHover(2); }}
                className="relative group overflow-hidden"
              >
                <Solutions
                  isOpen={activeDropdown === 'solutions'}
                  onToggle={() => toggleDropdown('solutions')}
                  onClose={closeDropdown}
                  textColor={hoveredIdx === 2 ? 'text-white' : navHovered ? 'text-black' : 'text-white'}
                  labelAnimation
                />
              </div>
              <div
                ref={el => { btnRefs.current[3] = el; }}
                onMouseEnter={() => { handleDropdownEnter('global'); handleButtonHover(3); }}
                className="relative group overflow-hidden"
              >
                <Global
                  isOpen={activeDropdown === 'global'}
                  onToggle={() => toggleDropdown('global')}
                  onClose={closeDropdown}
                  textColor={hoveredIdx === 3 ? 'text-white' : navHovered ? 'text-black' : 'text-white'}
                  labelAnimation
                />
              </div>
              <div
                ref={el => { btnRefs.current[4] = el; }}
                onMouseEnter={() => { handleDropdownEnter('resources'); handleButtonHover(4); }}
                className="relative group overflow-hidden"
              >
                <Resources
                  isOpen={activeDropdown === 'resources'}
                  onToggle={() => toggleDropdown('resources')}
                  onClose={closeDropdown}
                  textColor={hoveredIdx === 4 ? 'text-white' : navHovered ? 'text-black' : 'text-white'}
                  labelAnimation
                />
              </div>
              <div
                ref={el => { btnRefs.current[5] = el; }}
                onMouseEnter={() => handleButtonHover(5)}
                className="relative group overflow-hidden"
              >
                <button className={`hover:text-yellow-400 transition-colors duration-200 ${hoveredIdx === 5 ? 'text-white' : navHovered ? 'text-black' : 'text-white'}`}>Pricing</button>
              </div>
            </div>
          </div>

          {/* Right: Lang + Login + CTA */}
          <div className="flex items-center gap-6">
            {/* Language */}
            <button className="flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors duration-200">
              <Image src="/flag.png" alt="LN Flag" width={20} height={20} />
              EN
            </button>

            <div className="h-6 w-px bg-white opacity-30" />

            {/* Login */}
            <button className="flex items-center gap-1 text-sm hover:text-yellow-400 transition-colors duration-200">
              <User size={16} /> Login
            </button>

            {/* CTA */}
            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-colors duration-200">
              See Diamondrock
            </button>
          </div>
        </div>
      </nav>

      {/* Full-width overlay for dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-white bg-opacity-80 z-40"
          onClick={closeDropdown}
        />
      )}
    </div>
  );
}
