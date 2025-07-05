'use client';

import { ChevronDown, Globe, User } from 'lucide-react';
import Image from 'next/image';
import Products from './Products';

export default function Navbar() {
  return (
    <nav className="bg-[#3a212a] text-white px-6 py-4 shadow-md">
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
            <Products />
            <button className="flex items-center gap-1 hover:text-yellow-400">
              Platform <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1 hover:text-yellow-400">
              Solutions <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1 hover:text-yellow-400">
              Global <ChevronDown size={16} />
            </button>
            <button className="flex items-center gap-1 hover:text-yellow-400">
              Resources <ChevronDown size={16} />
            </button>
            <button className="hover:text-yellow-400">Pricing</button>
          </div>
        </div>

        {/* Right: Lang + Login + CTA */}
        <div className="flex items-center gap-6">
          {/* Language */}
          <button className="flex items-center gap-2 text-sm hover:text-yellow-400">
            <Image src="/us.svg" alt="US Flag" width={20} height={20} />
            EN
          </button>

          <div className="h-6 w-px bg-white opacity-30" />

          {/* Login */}
          <button className="flex items-center gap-1 text-sm hover:text-yellow-400">
            <User size={16} /> Login
          </button>

          {/* CTA */}
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition">
            See Rippling
          </button>
        </div>
      </div>
    </nav>
  );
}
