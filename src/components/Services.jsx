
import React from 'react';
import { motion } from 'framer-motion';
import { Home, MapPin, Package, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Evden Eve Taşıma',
      description: 'Kayseri de Seferoğlu evden eve nakliyat firması olarak eşyalarınızı güvenle yeni evinize taşıyoruz. Profesyonel ekibimiz ve modern araçlarımızla hizmetinizdeyiz.'
    },
    {
      icon: MapPin,
      title: 'Şehir İçi Taşıma',
      description: 'Kayseri de Seferoğlu evden eve nakliyat firması olarak Şehir merkezinde ve ilçelerinde hızlı ve güvenilir taşımacılık hizmeti sunuyoruz. Aynı gün teslimat imkanı.'
    },
    {
      icon: Package,
      title: 'Eşya Depolama',
      description: 'Kayseri evden eve nakliyat firmlarının çoğunun sunamadığı bu hizmeti Seferoğlu evden eve nakliyat olarak  Güvenli depolama alanlarımızda eşyalarınızı istediğiniz süre boyunca saklayabilirsiniz.'
    },
    {
      icon: Truck,
      title: 'Şehir Dışı Ev Taşıma',
      description: 'Kayseri merkezli Seferoğlu evden eve nakliyat firması olarak Türkiye\'nin her yerine profesyonel taşımacılık hizmeti. Kapıdan kapıya teslimat garantisi.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-gray-900 overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Profesyonel ekibimizle sunduğumuz kaliteli taşımacılık hizmetleri
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-[#FF6B35] group flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FF6B35] to-[#FFA500] rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#FF6B35] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
