import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed w-full bg-black/95 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-xl font-bold">Solithea</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-baseline space-x-4">
              <a href="#home" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#services" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#testimonials" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
              <a href="#gallery" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#contact" className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                Contact Us
              </a>
            </div>
            <LanguageSwitcher />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#services" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#testimonials" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="#gallery" className="hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#contact" className="bg-green-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}