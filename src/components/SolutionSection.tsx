import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Activity, Smartphone, Watch } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Non-Invasive Technology",
      description: "Uses near-infrared light to detect subtle changes in glucose concentration without piercing the skin.",
      icon: <Zap size={24} className="text-primary-600" />,
      position: { top: "30%", left: "85%" }
    },
    {
      id: 1,
      title: "Trend Monitoring",
      description: "Identifies glucose trends over time to support early lifestyle adjustments.",
      icon: <Activity size={24} className="text-primary-600" />,
      position: { top: "45%", left: "15%" }
    },
    {
      id: 2,
      title: "App Integration",
      description: "Syncs with your smartphone to display daily insights and personalized recommendations.",
      icon: <Smartphone size={24} className="text-primary-600" />,
      position: { top: "60%", left: "85%" }
    },
    {
      id: 3,
      title: "Optimized for Everyday Use",
      description: "We're engineering GlucoSense for comfort, energy efficiency, and extended wear — more details coming as we prototype.",
      icon: <Watch size={24} className="text-primary-600" />,
      position: { top: "75%", left: "15%" }
    }
  ];

  return (
    <section id="solution" className="section bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="container-custom" ref={ref}>
        <motion.div
          className="text-center mb-16 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent leading-tight py-2">
            Introducing GlucoSense
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comfortable wrist-worn device that provides non-invasive glucose trend monitoring for people with prediabetes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          <motion.div 
            className="relative aspect-square"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img 
                src="/GlucoBand.png"
                alt="GlucoSense Wearable"
                className="w-full h-full object-contain"
              />
              
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  className={`absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    activeFeature === index ? 'bg-primary-600 scale-110' : 'bg-white'
                  }`}
                  style={feature.position}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: activeFeature === index ? 1.1 : 1,
                    boxShadow: activeFeature === index 
                      ? '0 0 0 8px rgba(22, 128, 59, 0.2)' 
                      : '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`${activeFeature === index ? 'text-white' : 'text-primary-600'}`}>
                    {feature.icon}
                  </div>
                  <motion.div
                    className="absolute w-full h-full rounded-full border-2 border-primary-600"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ 
                      scale: activeFeature === index ? [1, 1.4, 1] : 1,
                      opacity: activeFeature === index ? [0.5, 0, 0.5] : 0.5 
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: activeFeature === index ? Infinity : 0,
                      repeatType: "reverse"
                    }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-white shadow-lg border border-primary-100' 
                    : 'bg-transparent hover:bg-white/50'
                }`}
                initial={false}
                animate={{
                  scale: activeFeature === index ? 1.05 : 1,
                  opacity: activeFeature === index ? 1 : 0.7
                }}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`p-3 rounded-lg mb-4 inline-block ${
                  activeFeature === index ? 'bg-primary-50' : 'bg-gray-100'
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  activeFeature === index ? 'text-primary-600' : 'text-gray-700'
                }`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 p-6 bg-primary-50 rounded-xl max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-primary-700 font-medium">
            GlucoSense is still in development — but the vision is clear. We're building for comfort, prevention, and peace of mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;