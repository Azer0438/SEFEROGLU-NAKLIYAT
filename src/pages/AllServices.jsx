
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { serviceData } from '@/data/serviceData';

const AllServices = () => {
  const districts = serviceData.filter(service => service.category === 'district');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12 md:pt-24 md:pb-20">
      <Helmet>
        <title>Tüm Hizmet Bölgelerimiz - Kayseri Seferoğlu Nakliyat</title>
        <meta name="description" content="Kayseri'nin tüm ilçelerine ve mahallelerine profesyonel evden eve nakliyat hizmeti. Talas, Melikgazi, Kocasinan ve diğer tüm bölgeler." />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Başlık Bölümü */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-[#FF6B35] mb-3 md:mb-4">
            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Geniş Hizmet Ağı</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Kayseri'nin Her Noktasındayız
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-2">
            Kayseri'nin merkez ilçelerinden en uzak köylerine kadar, Seferoğlu Nakliyat kalitesini ve güvenini taşıyoruz.
          </p>
        </motion.div>

        {/* İlçe Listesi Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {districts.map((district, index) => (
            <motion.div
              key={district.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={district.path} className="block h-full group">
                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B35]/20 hover:border-[#FF6B35] relative">
                  
                  {/* Dekoratif Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#FF6B35]/5 group-hover:to-[#FF6B35]/10 transition-colors" />

                  <div className="p-5 md:p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-gray-900 p-3 rounded-lg group-hover:bg-[#FF6B35] transition-colors duration-300">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B35] group-hover:text-white" />
                      </div>
                      <ShieldCheck className="w-5 h-5 text-green-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF6B35] transition-colors">
                      {district.title}
                    </h2>
                    
                    <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                      {district.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors mt-auto">
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
