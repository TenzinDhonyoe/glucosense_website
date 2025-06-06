import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, ArrowRight, Send } from 'lucide-react';

const CtaSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="waitlist" className="section bg-gradient-to-br from-primary-600 to-secondary-700 text-white">
      <div className="container-custom" ref={ref}>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Join the GlucoSense Waitlist
        </motion.h2>
        
        <motion.p 
          className="text-xl text-primary-50 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Be among the first to experience painless glucose trend monitoring and get early access to GlucoSense.
        </motion.p>
        
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isSubmitted ? (
            <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Send size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
              <p className="text-gray-600">
                Thank you for joining our waitlist. We'll keep you updated on our progress and let you know when GlucoSense is ready for early access.
              </p>
            </div>
          ) : (
            <form 
              action="https://submit-form.com/eWeU2Geuk"
              method="POST"
              className="bg-white p-6 rounded-lg shadow-lg"
              onSubmit={() => setIsSubmitted(true)}
            >
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                Join Waitlist
                <ArrowRight size={18} className="ml-2" />
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By joining, you agree to receive updates about GlucoSense. We respect your privacy and will never share your information.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;