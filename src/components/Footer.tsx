import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-primary-50 via-white to-gray-50">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <img 
                src="/GlucoSense_logo.png" 
                alt="GlucoSense" 
                className="h-8 w-auto"
                onError={(e) => {
                  console.error('Logo failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="ml-2 text-xl font-quicksand font-bold text-gray-800">GlucoSense</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md text-center md:text-left">
              Revolutionizing glucose monitoring with non-invasive, continuous trend tracking for prediabetes prevention.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/company/glucosense/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <Linkedin size={20} className="text-gray-600 hover:text-primary-600 transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/glucosense_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <Instagram size={20} className="text-gray-600 hover:text-primary-600 transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} GlucoSense. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">Privacy</a>
            <a href="#terms" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">Terms</a>
            <a href="#cookies" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;