import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Watch, Zap, Activity, Smartphone } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: <Watch size={32} className="text-primary-600" />,
      title: "Wear GlucoSense",
      description: "Put on the comfortable wrist device like a regular watch"
    },
    {
      icon: <Zap size={32} className="text-primary-600" />,
      title: "NIR Technology",
      description: "Safe light waves penetrate skin to detect glucose changes"
    },
    {
      icon: <Activity size={32} className="text-primary-600" />,
      title: "AI Analysis",
      description: "Advanced algorithms identify glucose patterns"
    },
    {
      icon: <Smartphone size={32} className="text-primary-600" />,
      title: "Smart Insights",
      description: "Get personalized recommendations in real-time"
    }
  ];

  const getLineProgress = () => {
    if (hoveredStep === null) return "0%";
    return `${((hoveredStep + 1) / steps.length) * 100}%`;
  };

  return (
    <section id="how-it-works" className="section bg-gradient-to-br from-white to-primary-50 overflow-hidden">
      <div className="container-custom" ref={ref}>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          From Light to Insight: The GlucoSense Flow
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experience seamless glucose monitoring through our innovative approach
        </motion.p>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2" />
            
            <motion.div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 transform -translate-y-1/2 origin-left transition-all duration-300 ease-in-out"
              style={{ width: getLineProgress() }}
            />
            
            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <motion.div 
                    className={`bg-white rounded-2xl p-6 shadow-lg border transition-all duration-300 ${
                      hoveredStep === index 
                        ? 'border-primary-500 shadow-xl transform -translate-y-2' 
                        : hoveredStep !== null && hoveredStep < index
                          ? 'border-gray-200 opacity-50'
                          : 'border-primary-100'
                    }`}
                  >
                    <motion.div 
                      className={`rounded-full p-4 mb-4 inline-block transition-colors duration-300 ${
                        hoveredStep === index ? 'bg-primary-100' : 'bg-primary-50'
                      }`}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
                
                <motion.div 
                  className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"
                  style={{ 
                    height: hoveredStep !== null && hoveredStep >= index ? '100%' : '0%',
                    transition: 'height 0.3s ease-in-out'
                  }}
                />
                
                <div className={`bg-white rounded-2xl p-6 shadow-lg border ml-16 transition-all duration-300 ${
                  hoveredStep === index 
                    ? 'border-primary-500 shadow-xl transform -translate-x-2' 
                    : hoveredStep !== null && hoveredStep < index
                      ? 'border-gray-200 opacity-50'
                      : 'border-primary-100'
                }`}>
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className={`rounded-full p-4 transition-colors duration-300 ${
                        hoveredStep === index ? 'bg-primary-100' : 'bg-primary-50'
                      }`}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                    >
                      {step.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Science Behind It</h3>
              <p className="text-gray-600 mb-4">
                Our NIR (Near-Infrared) technology uses safe light waves to measure glucose levels in your tissue without breaking the skin. 
                The reflected light is analyzed by our advanced algorithms to detect trends in your glucose levels.
              </p>
              <a 
                href="https://www.mdpi.com/1424-8220/22/13/4855" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center"
              >
                Learn more about the technology →
              </a>
            </div>
            <div className="relative">
              <img 
                src="/how_it_works.png"
                alt="NIR Technology Visualization" 
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-8 -right-4 bg-primary-50 p-4 rounded-xl shadow-lg">
                <p className="text-sm font-semibold text-primary-600">FDA-Compliant Technology</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;