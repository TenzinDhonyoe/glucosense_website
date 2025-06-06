import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      category: "Development Stage",
      questions: [
        {
          question: "Is GlucoSense available to purchase yet?",
          answer: "Not yet — we're currently developing our first proof of concept. Join our waitlist to stay updated and be among the first to try it."
        },
        {
          question: "What stage is the technology at right now?",
          answer: "We're in the pre-prototype phase, validating our sensor design and data pipeline. Hardware testing and signal calibration are actively in progress."
        }
      ]
    },
    {
      category: "Technology & Accuracy",
      questions: [
        {
          question: "How does GlucoSense work without drawing blood?",
          answer: "We use near-infrared (NIR) light to detect how your body reflects light at the molecular level. Subtle changes help us estimate glucose trend patterns over time."
        },
        {
          question: "Will it give real-time glucose values like a CGM?",
          answer: "No — GlucoSense focuses on trend detection, not moment-by-moment glucose readings. It's designed for preventative care, not insulin management."
        },
        {
          question: "How accurate is it?",
          answer: "We're still gathering data to evaluate signal consistency and trend correlation. Accuracy benchmarks will be shared once our prototype testing begins."
        }
      ]
    },
    {
      category: "User Experience & Wearability",
      questions: [
        {
          question: "Will it feel like wearing a smartwatch?",
          answer: "The final design is being explored, but comfort and discretion are top priorities. Our current vision is a lightweight wristband that integrates seamlessly into daily life."
        },
        {
          question: "How long will the battery last?",
          answer: "Battery performance will depend on final hardware choices. We're aiming for multi-day use with energy-efficient components."
        }
      ]
    },
    {
      category: "App & Data",
      questions: [
        {
          question: "What will the app do?",
          answer: "The companion app will show your glucose trend data, lifestyle insights, and recommendations to help you stay proactive."
        },
        {
          question: "Will my data be secure?",
          answer: "Absolutely. We're building with security and privacy in mind from day one — full compliance with data protection standards will be a core feature."
        }
      ]
    },
    {
      category: "Vision & Use Cases",
      questions: [
        {
          question: "Who is GlucoSense for?",
          answer: "People with prediabetes or those looking to monitor their metabolic health non-invasively. It's meant to empower early lifestyle changes."
        },
        {
          question: "Will this replace CGMs or finger pricks?",
          answer: "Not exactly — our focus is prevention, not treatment. GlucoSense is a complement, not a replacement, for tools used in diabetes management."
        },
        {
          question: "How can I get involved or support GlucoSense?",
          answer: "You can join our waitlist, follow our progress on LinkedIn, or contact us if you're interested in research partnerships or piloting opportunities."
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gradient-to-br from-white to-primary-50">
      <div className="container-custom" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent py-4">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Get answers about our technology, development progress, and future plans
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-primary-600 mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  return (
                    <motion.div 
                      key={questionIndex}
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-primary-200 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.2 + (questionIndex * 0.05) }}
                    >
                      <button
                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                        onClick={() => toggleFaq(globalIndex)}
                        aria-expanded={openIndex === globalIndex}
                      >
                        <span className="font-bold text-lg text-gray-800 pr-8">{faq.question}</span>
                        <motion.div
                          animate={{ rotate: openIndex === globalIndex ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {openIndex === globalIndex ? 
                            <ChevronUp className="text-primary-600 flex-shrink-0\" size={20} /> : 
                            <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                          }
                        </motion.div>
                      </button>
                      <motion.div 
                        initial={false}
                        animate={{ 
                          height: openIndex === globalIndex ? "auto" : 0,
                          opacity: openIndex === globalIndex ? 1 : 0
                        }}
                        transition={{ 
                          duration: 0.3,
                          ease: "easeInOut"
                        }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-gray-600 mb-4">Have more questions about GlucoSense?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Contact Our Team
            <ChevronDown className="ml-2" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;