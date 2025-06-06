import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/QAxlHsQhvGCBm7Ht/scene.splinecode" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent" />
      
      <div className="relative z-10 h-screen flex items-end">
        <div className="container-custom pb-32">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block mb-2">Know Your</span>
              <span className="block mb-4">Glucose Trends</span>
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                No Needles, No Hassle
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              The first non-invasive wearable for prediabetes prevention, 
helping you track glucose trends without the pain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#waitlist" className="btn-primary">
                Join Waitlist
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                Learn How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-primary-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;