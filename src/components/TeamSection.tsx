import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter } from 'lucide-react';

const TeamSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Sarah Johnson, PhD",
      title: "Co-Founder & CEO",
      bio: "Biomedical engineer with 10+ years of experience in medical device development. Previously led R&D at MedTech Innovations.",
      image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "David Chen, MSc",
      title: "Co-Founder & CTO",
      bio: "Electrical engineer specializing in sensor technology. Former senior engineer at Dexcom with multiple patents in glucose monitoring.",
      image: "https://images.pexels.com/photos/8441851/pexels-photo-8441851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Maya Patel, MBA",
      title: "Co-Founder & COO",
      bio: "Healthcare operations expert with experience scaling digital health startups. Personal connection to diabetes through family history.",
      image: "https://images.pexels.com/photos/10050537/pexels-photo-10050537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="team" className="section bg-gradient-to-br from-white to-primary-50">
      <div className="container-custom" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our team combines expertise in biomedical engineering, sensor technology, and healthcare operations with a personal connection to diabetes prevention.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-custom overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-white p-8 rounded-lg shadow-custom text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            GlucoSense was born from a personal connection to diabetes. When our founder's father was diagnosed with type 2 diabetes after years of undetected prediabetes, she realized there was a critical gap in monitoring options. As biomedical engineers, we knew there had to be a better way to track glucose trends without the pain and hassle of traditional methods.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We've spent three years developing our proprietary NIR technology to create a solution that's comfortable, convenient, and effective for the millions of people with prediabetes who want to take control of their health before it's too late.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;