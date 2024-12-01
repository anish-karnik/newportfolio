import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Anish Karnik. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}