
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicePage = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20 pb-12 md:pt-24 md:pb-20">
      <Helmet>
        <title>{data.title} - Seferoğlu Nakliyat Kayseri</title>
        <meta name="description" content={data.description} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#FF6B35]/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-[#FF6B35] font-bold tracking-wider uppercase mb-3 md:mb-4 inline-block bg-[#FF6B35]/10 px-3 py-1 rounded-full text-xs md:text-sm">
              Profesyonel Hizmet
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto px-2">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content & Features */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-blue-600/20"></div>
                
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">Hizmet Detayları</h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6 md:mb-8">
                  {data.content}
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold text-[#FF6B35]">Neden Bizi Seçmelisiniz?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Alanında uzman kadrolu personel</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Son model kapalı kasa araç filosu</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>%100 Müşteri memnuniyeti garantisi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Features Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {data.features.map((feature, idx) => (
                <div key={idx} className="bg-gray-900/50 border border-gray-800 hover:border-[#FF6B35]/50 p-5 md:p-6 rounded-xl transition-all duration-300 group hover:-translate-y-1">
                  <div className="bg-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#FF6B35] transition-colors duration-300">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B35] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 md:p-12 text-center relative overflow-hidden">
             {/* Decorative Circles */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
             </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                Hemen Fiyat Teklifi Alın
              </h2>
              <p className="text-blue-100 text-base md:text-lg mb-6 md:mb-8">
                {data.title} hizmetimiz için size özel en uygun fiyatı sunalım. 
                Ekspertiz hizmetimiz tamamen ücretsizdir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.open('tel:05528819812', '_self')}
                  className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white text-base md:text-lg px-6 py-4 md:px-8 md:py-6 h-auto rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-3 min-h-[50px]"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  Hemen Ara: (0552) 881 98 12
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 text-base md:text-lg px-6 py-4 md:px-8 md:py-6 h-auto rounded-xl flex items-center justify-center gap-3 min-h-[50px]"
                >
                  İletişim Formu
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
