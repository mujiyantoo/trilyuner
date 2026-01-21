import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioOwner, designConcepts } from '../../data/mockData';
import { Sparkles, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = ({ variant = 'light' }) => {
  const isDark = variant === 'dark';
  
  const baseStyles = isDark 
    ? 'bg-gray-950 text-white border-gray-800' 
    : 'bg-gray-50 text-gray-900 border-gray-200';
  
  const mutedText = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';

  return (
    <footer className={`${baseStyles} border-t`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Sparkles className="w-6 h-6" />
              <span>Portfolio Trends</span>
            </Link>
            <p className={`${mutedText} max-w-md mb-6`}>
              Showcasing 9 cutting-edge web design trends for 2025/2026. Each portfolio concept demonstrates modern approaches to digital presence.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={portfolioOwner.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border ${borderColor} ${mutedText} hover:text-current transition-colors`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={portfolioOwner.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border ${borderColor} ${mutedText} hover:text-current transition-colors`}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${portfolioOwner.email}`}
                className={`p-2 rounded-full border ${borderColor} ${mutedText} hover:text-current transition-colors`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#work" className={`${mutedText} hover:text-current transition-colors`}>Work</a>
              </li>
              <li>
                <a href="#about" className={`${mutedText} hover:text-current transition-colors`}>About</a>
              </li>
              <li>
                <a href="#testimonials" className={`${mutedText} hover:text-current transition-colors`}>Testimonials</a>
              </li>
              <li>
                <a href="#contact" className={`${mutedText} hover:text-current transition-colors`}>Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Design Concepts */}
          <div>
            <h4 className="font-semibold mb-4">Design Concepts</h4>
            <ul className="space-y-3">
              {designConcepts.slice(0, 5).map((concept) => (
                <li key={concept.id}>
                  <Link 
                    to={concept.path}
                    className={`${mutedText} hover:text-current transition-colors flex items-center gap-1 group`}
                  >
                    {concept.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={`mt-16 pt-8 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className={`text-sm ${mutedText}`}>
            © {new Date().getFullYear()} {portfolioOwner.name}. All rights reserved.
          </p>
          <p className={`text-sm ${mutedText}`}>
            9 Portfolio Concepts • 2025/2026 Design Trends
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
