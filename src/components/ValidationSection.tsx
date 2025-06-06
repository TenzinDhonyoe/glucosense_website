import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Star } from 'lucide-react';

const ValidationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "As someone with a family history of diabetes, GlucoSense gives me peace of mind knowing I can track my glucose trends without painful finger pricks.",
      name: "Sarah K.",
      title: "Early Tester"
    },
    {
      quote: "The ability to see how different foods affect my glucose levels over time has been eye-opening. I've made simple changes that have already improved my health.",
      name: "Michael T.",
      title: "Prediabetes Patient"
    },
    {
      quote: "GlucoSense fills an important gap between basic fitness trackers and medical CGMs. It's exactly what my prediabetic patients need for preventative care.",
      name: "Dr. Jennifer L.",
      title: "Endocrinologist"
    }
  ];

  const achievements = [
    {
      icon: <Users size={24} className="text-primary-600" />,
      title: "20+ User Interviews",
      description: "Validated with real users with prediabetes"
    },
    {
      icon: <Award size={24} className="text-primary-600" />,
      title: "Hult Prize Semifinalist",
      description: "Recognized for innovation in healthcare"
    },
    {
      icon: <Star size={24} className="text-primary-600" />,
      title: "MAKO Award Semifinalist",
      description: "Acknowledged for design excellence"
    },
    {
      icon: <Users size={24} className="text-primary-600" />,
      title: "500+ Waitlist Signups",
      description: "Growing interest in our solution"
    }
  ];

  return (
    <section id="validation" className="section bg-white">
      <div className="container-custom" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Early Validation & Social Proof
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our solution has been validated by users, healthcare professionals, and industry experts.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">What People Are Saying</h3>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-custom"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-600 font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Our Achievements</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="bg-white border border-gray-200 p-5 rounded-lg flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <div>{achievement.icon}</div>
                  <div>
                    <h4 className="font-bold">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 bg-gradient-to-r from-primary-600 to-secondary-600 p-6 rounded-lg text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-xl font-bold mb-3">Physician Endorsed</h3>
              <p className="mb-3">
                GlucoSense has been reviewed by leading endocrinologists and diabetes specialists who see its potential for preventative care.
              </p>
              <p className="italic">
                "This technology could bridge a critical gap in prediabetes management, potentially preventing thousands of cases of type 2 diabetes."
              </p>
              <p className="mt-2 font-bold text-sm">
                – Dr. Robert Chen, MD, Diabetes Prevention Specialist
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;