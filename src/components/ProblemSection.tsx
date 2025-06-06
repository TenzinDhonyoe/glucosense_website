import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, MapPin, Droplet, DollarSign, Activity, X, AlertCircle, Zap, BatteryLow } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedRegion, setSelectedRegion] = useState<'na' | 'global'>('na');
  const [animatedStats, setAnimatedStats] = useState({
    prediabetes: 0,
    undiagnosed: 0,
    notTracking: 0
  });

  useEffect(() => {
    if (inView) {
      const targetStats = selectedRegion === 'na' ? {
        prediabetes: 38,
        undiagnosed: 81,
        notTracking: 95
      } : {
        prediabetes: 8.3,
        undiagnosed: 50,
        notTracking: 90
      };

      const steps = 20;
      const increments = {
        prediabetes: targetStats.prediabetes / steps,
        undiagnosed: targetStats.undiagnosed / steps,
        notTracking: targetStats.notTracking / steps
      };

      let step = 0;
      const interval = setInterval(() => {
        if (step >= steps) {
          setAnimatedStats(targetStats);
          clearInterval(interval);
          return;
        }

        step++;
        setAnimatedStats(prev => ({
          prediabetes: step === steps ? targetStats.prediabetes : prev.prediabetes + increments.prediabetes,
          undiagnosed: step === steps ? targetStats.undiagnosed : prev.undiagnosed + increments.undiagnosed,
          notTracking: step === steps ? targetStats.notTracking : prev.notTracking + increments.notTracking
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView, selectedRegion]);

  const stats = [
    {
      label: "Adults with Prediabetes",
      na: {
        value: 38,
        context: "More than 1 in 3 adults affected",
        description: "97.6 million adults in the U.S., with significant numbers in Canada and Mexico"
      },
      global: {
        value: 8.3,
        context: "720 million adults worldwide",
        description: "A growing global health concern affecting millions"
      }
    },
    {
      label: "Undiagnosed Cases",
      na: {
        value: 81,
        context: "4 out of 5 are unaware",
        description: "81% of U.S. adults with prediabetes don't know they have it"
      },
      global: {
        value: 50,
        context: "1 in 2 cases undiagnosed",
        description: "Over 240 million cases worldwide remain undiagnosed"
      }
    },
    {
      label: "Not Tracking Glucose",
      na: {
        value: 95,
        context: "Almost all at-risk adults",
        description: "Limited monitoring due to cost and inconvenience"
      },
      global: {
        value: 90,
        context: "9 out of 10 globally",
        description: "Limited access to monitoring solutions worldwide"
      }
    }
  ];

  const currentTools = [
    {
      icon: <Droplet size={32} className="text-red-600" />,
      title: "Finger Pricks",
      problems: [
        { icon: <AlertCircle size={16} />, text: "Painful and inconvenient" },
        { icon: <Zap size={16} />, text: "Only provides single point-in-time readings" },
        { icon: <DollarSign size={16} />, text: "Requires constant supplies and maintenance" },
        { icon: <X size={16} />, text: "Discourages regular monitoring" }
      ]
    },
    {
      icon: <Activity size={32} className="text-pink-600" />,
      title: "Glucose Monitor Devices",
      problems: [
        { icon: <DollarSign size={16} />, text: "Expensive monthly sensor costs" },
        { icon: <AlertCircle size={16} />, text: "Requires sensor insertion under skin" },
        { icon: <Zap size={16} />, text: "Overkill for prediabetes monitoring" },
        { icon: <X size={16} />, text: "Often not covered by insurance" }
      ]
    },
    {
      icon: <BatteryLow size={32} className="text-purple-600" />,
      title: "Fitness Trackers",
      problems: [
        { icon: <X size={16} />, text: "Don't actually measure glucose" },
        { icon: <AlertCircle size={16} />, text: "Miss critical metabolic changes" },
        { icon: <Zap size={16} />, text: "Create false sense of security" },
        { icon: <BatteryLow size={16} />, text: "Not clinically validated for diabetes prevention" }
      ]
    }
  ];

  return (
    <section id="problem" className="section bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,128,59,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.1),transparent_50%)]" />
      
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            The Silent Epidemic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You're not alone. Millions are unaware they're at risk of developing diabetes, but early detection can make all the difference.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <div className="inline-flex rounded-full border border-gray-200 p-1 bg-white shadow-lg w-full sm:w-auto">
            <button
              onClick={() => {
                setSelectedRegion('na');
                setAnimatedStats({ prediabetes: 0, undiagnosed: 0, notTracking: 0 });
              }}
              className={`flex items-center justify-center flex-1 sm:flex-initial px-6 sm:px-8 py-3 rounded-full transition-all duration-300 ${
                selectedRegion === 'na' 
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MapPin size={18} className="mr-2" />
              North America
            </button>
            <button
              onClick={() => {
                setSelectedRegion('global');
                setAnimatedStats({ prediabetes: 0, undiagnosed: 0, notTracking: 0 });
              }}
              className={`flex items-center justify-center flex-1 sm:flex-initial px-6 sm:px-8 py-3 rounded-full transition-all duration-300 ${
                selectedRegion === 'global' 
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Globe size={18} className="mr-2" />
              Global
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 * index }}
            >
              <h3 className="font-bold text-xl mb-3 text-gray-800">{stat.label}</h3>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-3">
                {selectedRegion === 'na' 
                  ? `${animatedStats[index === 0 ? 'prediabetes' : index === 1 ? 'undiagnosed' : 'notTracking'].toFixed(1)}%`
                  : `${animatedStats[index === 0 ? 'prediabetes' : index === 1 ? 'undiagnosed' : 'notTracking'].toFixed(1)}%`
                }
              </div>
              <p className="text-lg font-medium text-primary-700 mb-4">
                {selectedRegion === 'na' ? stat.na.context : stat.global.context}
              </p>
              <div className="space-y-3">
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${selectedRegion === 'na' ? stat.na.value : stat.global.value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  {selectedRegion === 'na' ? stat.na.description : stat.global.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Why Existing Tools Fail Us
        </motion.h2>

        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          If tracking is this hard, most people just don't. Current solutions create more problems than they solve.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {currentTools.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className="flex items-center mb-4">
                <div className={`bg-${index === 0 ? 'red' : index === 1 ? 'pink' : 'purple'}-100 p-4 rounded-xl mr-4 shadow-sm`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{tool.title}</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {tool.problems.map((problem, pIndex) => (
                  <li key={pIndex} className="flex items-center space-x-3">
                    <div className={`text-${index === 0 ? 'red' : index === 1 ? 'pink' : 'purple'}-500`}>
                      {problem.icon}
                    </div>
                    <span className="text-gray-600">{problem.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;