import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const InvestorSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const marketStats = [
    {
      icon: <Users size={32} className="text-primary-600" />,
      value: "88M",
      label: "Adults with Prediabetes",
      detail: "In the US alone (CDC, 2022)"
    },
    {
      icon: <DollarSign size={32} className="text-primary-600" />,
      value: "$200M",
      label: "Global Market Size",
      detail: "Expected by 2025"
    },
    {
      icon: <TrendingUp size={32} className="text-primary-600" />,
      value: "15%",
      label: "Annual Growth Rate",
      detail: "In preventative health tech"
    },
    {
      icon: <Target size={32} className="text-primary-600" />,
      value: "80%",
      label: "Undiagnosed Rate",
      detail: "Representing massive opportunity"
    }
  ];

  const timeline = [
    {
      year: "2023",
      quarter: "Q4",
      milestone: "Prototype Development",
      status: "Completed"
    },
    {
      year: "2024",
      quarter: "Q2",
      milestone: "Clinical Validation",
      status: "In Progress"
    },
    {
      year: "2024",
      quarter: "Q4",
      milestone: "FDA Registration",
      status: "Planned"
    },
    {
      year: "2025",
      quarter: "Q2",
      milestone: "Market Launch",
      status: "Planned"
    }
  ];

  return (
    <section id="investors" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Investment Opportunity
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join us in revolutionizing prediabetes prevention with breakthrough non-invasive monitoring technology
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-custom p-8">
              <h3 className="text-2xl font-bold mb-6">Market Opportunity</h3>
              <div className="grid grid-cols-2 gap-6">
                {marketStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="flex justify-center mb-3">{stat.icon}</div>
                    <div className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
                    <div className="font-medium mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.detail}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-custom p-8">
              <h3 className="text-2xl font-bold mb-6">Development Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="w-24 text-sm font-medium">
                      {item.year} {item.quarter}
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className={`h-full rounded-full ${
                            item.status === 'Completed' ? 'bg-green-500' :
                            item.status === 'In Progress' ? 'bg-primary-500' :
                            'bg-gray-300'
                          }`}
                          style={{ width: item.status === 'Completed' ? '100%' : 
                                         item.status === 'In Progress' ? '50%' : '0%' }}
                        />
                      </div>
                    </div>
                    <div className="w-32">
                      <div className="font-medium">{item.milestone}</div>
                      <div className={`text-sm ${
                        item.status === 'Completed' ? 'text-green-500' :
                        item.status === 'In Progress' ? 'text-primary-500' :
                        'text-gray-500'
                      }`}>{item.status}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 bg-primary-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Download our investor brief or schedule a call with our team to discuss this unique opportunity.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#download-brief" className="btn-primary">
              Download Investor Brief
            </a>
            <a href="#schedule-call" className="btn-secondary">
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorSection;