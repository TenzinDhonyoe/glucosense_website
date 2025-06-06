import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Lightbulb, DollarSign, Smile } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Smile size={32} className="text-primary-600" />,
      title: "Painless & Skin-friendly",
      description: "No needles, no sensors, no discomfort. GlucoSense sits comfortably on your wrist without irritating your skin.",
      before: "Enduring painful finger pricks or inserting sensors under your skin",
      after: "Simply wearing a comfortable device on your wrist like a normal watch"
    },
    {
      icon: <Lightbulb size={32} className="text-primary-600" />,
      title: "Lifestyle Trend Insights",
      description: "Understand how your diet, sleep, and activity affect your glucose levels over time.",
      before: "Guessing which foods or activities might be causing glucose spikes",
      after: "Receiving data-driven insights about how specific lifestyle choices affect your body"
    },
    {
      icon: <Heart size={32} className="text-primary-600" />,
      title: "Preventative Approach",
      description: "Identify concerning glucose trends early and make informed lifestyle changes before health issues develop.",
      before: "Reacting to health problems after they've already developed",
      after: "Taking proactive steps based on early warning signs from your body"
    },
    {
      icon: <DollarSign size={32} className="text-primary-600" />,
      title: "No Ongoing Costs",
      description: "One-time purchase with no disposable sensors or supplies to replace regularly.",
      before: "Spending hundreds monthly on replacement sensors and supplies",
      after: "Making a single investment in a device that lasts for years"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="benefits" className="section bg-white">
      <div className="container-custom" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Benefits for Users
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          GlucoSense transforms the way people with prediabetes monitor their health, making it simpler, more comfortable, and more insightful.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-custom overflow-hidden"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-red-500 mb-2">Before GlucoSense:</h4>
                      <p className="text-sm text-gray-600">{benefit.before}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-green-500 mb-2">With GlucoSense:</h4>
                      <p className="text-sm text-gray-600">{benefit.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-primary-50 p-8 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to take control of your health?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of others who are using GlucoSense to make informed decisions about their health and prevent diabetes.
          </p>
          <a href="#waitlist" className="btn-primary">
            Join the Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;