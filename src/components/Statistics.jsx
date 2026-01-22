
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '3000+',
      label: 'Tamamlanan Taşıma',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      value: '2500+',
      label: 'Mutlu Müşteri',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Yıllık Deneyim',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      value: '%100',
      label: 'Sigortalı Hizmet',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-900 overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-800 rounded-xl p-6 md:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-[#FF6B35] group"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
