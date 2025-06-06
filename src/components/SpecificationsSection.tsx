import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Battery, Bluetooth, Shield, Smartphone, Ruler, Clock } from 'lucide-react';

const SpecificationsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specifications = [
    {
      icon: <Ruler size={24} className="text-primary-600" />,
      title: "Dimensions",
      value: "44mm × 38mm × 10.5mm",
      detail: "Comfortable, watch-like form factor"
    },
    {
      icon: <Battery size={24} className="text-primary-600" />,
      title: "Battery Life",
      value: "5+ Days",
      detail: "Continuous monitoring enabled"
    },
    {
      icon: <Bluetooth size={24} className="text-primary-600" />,
      title: "Connectivity",
      value: "Bluetooth 5.0",
      detail: "Seamless data sync"
    },
    {
      icon: <Shield size={24} className="text-primary-600" />,
      title: "Water Resistance",
      value: "IP67",
      detail: "Splash and sweat proof"
    },
    {
      icon: <Clock size={24} className="text-primary-600" />,
      title: "Reading Interval",
      value: "Every 5 minutes",
      detail: "Continuous trend monitoring"
    },
    {
      icon: <Smartphone size={24} className="text-primary-600" />,
      title: "App Compatibility",
      value: "iOS 14+ / Android 10+",
      detail: "Broad device support"
    }
  ];

  return (
    <section id="specifications" className="section bg-white">
      <div className="container-custom" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Technical Specifications
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Engineered for comfort, accuracy, and reliability
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {specifications.map((spec, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                  {spec.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-600">{spec.title}</h3>
                  <p className="text-lg font-bold">{spec.value}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{spec.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-primary-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Mobile App Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>Real-time trend visualization</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>Personalized insights and recommendations</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>Meal and activity logging</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>Progress tracking and reports</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>Optional healthcare provider sharing</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Data Security</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>HIPAA-compliant data storage</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>End-to-end encryption</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>User-controlled data sharing</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>Regular security audits</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                <span>Compliance with global privacy standards</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecificationsSection;