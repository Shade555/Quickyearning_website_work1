'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductsProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function Products({ isOpen, onToggle, onClose }: ProductsProps) {
  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
        onClick={onToggle}
        role="button"
        tabIndex={0}
      >
        <span>Products</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Simple Test Dropdown */}
      {isOpen && (
        <div 
          className="absolute top-full left-0 bg-white border border-gray-300 shadow-lg z-50 p-4 min-w-[300px]"
          style={{ marginTop: '8px' }}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-2">Products Menu</h3>
          <p className="text-gray-600">Dropdown is working! ✅</p>
          <div className="mt-4 space-y-2">
            <a href="#" className="block text-blue-600 hover:underline">HCM</a>
            <a href="#" className="block text-blue-600 hover:underline">IT</a>
            <a href="#" className="block text-blue-600 hover:underline">Finance</a>
            <a href="#" className="block text-blue-600 hover:underline">Spend Management</a>
          </div>
        </div>
      )}
    </div>
  );
}
