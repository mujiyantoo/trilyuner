import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { designConcepts } from '../../data/mockData';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';

const GlobalNav = ({ variant = 'light' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  
  const currentConcept = designConcepts.find(c => c.path === location.pathname);
  
  const isDark = variant === 'dark';
  
  const baseStyles = isDark 
    ? 'bg-gray-950/80 text-white border-gray-800' 
    : 'bg-white/80 text-gray-900 border-gray-200';
  
  const linkStyles = isDark
    ? 'text-gray-300 hover:text-white'
    : 'text-gray-600 hover:text-gray-900';

  const dropdownStyles = isDark
    ? 'bg-gray-900 border-gray-700'
    : 'bg-white border-gray-200';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${baseStyles}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Sparkles className="w-6 h-6" />
            <span>Portfolio Trends</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className={`transition-colors ${linkStyles}`}>Work</a>
            <a href="#about" className={`transition-colors ${linkStyles}`}>About</a>
            <a href="#testimonials" className={`transition-colors ${linkStyles}`}>Testimonials</a>
            <a href="#contact" className={`transition-colors ${linkStyles}`}>Contact</a>
            
            {/* Design Concepts Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${linkStyles} ${isDark ? 'border-gray-700 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'}`}
              >
                <span className="text-sm font-medium">
                  {currentConcept ? currentConcept.name : 'View All Concepts'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-72 rounded-xl border shadow-2xl overflow-hidden ${dropdownStyles}`}>
                  <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-100 bg-gray-50'}`}>
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-60">Design Concepts 2025/26</p>
                  </div>
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {designConcepts.map((concept) => (
                      <Link
                        key={concept.id}
                        to={concept.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className={`block px-4 py-3 transition-colors ${
                          location.pathname === concept.path 
                            ? isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                            : isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <p className="font-medium text-sm">{concept.trend}</p>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {concept.description.slice(0, 60)}...
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-4 space-y-4">
            <a href="#work" className={`block py-2 ${linkStyles}`}>Work</a>
            <a href="#about" className={`block py-2 ${linkStyles}`}>About</a>
            <a href="#testimonials" className={`block py-2 ${linkStyles}`}>Testimonials</a>
            <a href="#contact" className={`block py-2 ${linkStyles}`}>Contact</a>
            
            <div className={`pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-3">Design Concepts</p>
              <div className="space-y-2">
                {designConcepts.map((concept) => (
                  <Link
                    key={concept.id}
                    to={concept.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 text-sm ${linkStyles}`}
                  >
                    {concept.trend}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GlobalNav;
