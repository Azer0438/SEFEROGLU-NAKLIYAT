import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://r.resimlink.com/RIWF8jDoZP.png', // Beyaz Kamyon
    title: 'Kayseri’nin Güvenilir Nakliyatçısı',
    subtitle: 'Seferoğlu Nakliyat ile eviniz emin ellerde. Sigortalı, sözleşmeli ve zamanında teslimat.'
  },
  {
    id: 2,
    image: 'https://r.resimlink.com/3WtTCR0M4O.png', // Paketleme
    title: 'Eşyalarınız Bize Emanet',
    subtitle: 'Özel ambalajlama tekniklerimizle eşyalarınız çizilmeden, kırılmadan yeni evinize taşınır.'
  },
  {
    id: 3,
    image: 'https://r.resimlink.com/D3BUF59.png', // Asansörlü Araç
    title: 'Yüksek Katlar Sorun Değil',
    subtitle: 'Kayseri’nin her yerine asansörlü taşımacılık hizmetimizle hızlı ve güvenli çözüm sunuyoruz.'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Otomatik slayt geçişi (5 saniye)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const actionButtons = [
    {
      icon: Phone,
      text: "Telefon: (0552) 881 98 12",
      href: "tel:05528819812",
      delay: 0.6
    },
    {
      icon: MessageCircle,
      text: "7/24 Whatsapp",
      href: "https://wa.me/905528819812",
      delay: 0.7
    },
    {
      icon: MapPin,
      text: "Harita",
      href: "https://maps.app.goo.gl/tM4AAao9gW7FTUHy9",
      delay: 0.8
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[80px] pb-10 md:pt-[90px] md:pb-16 lg:py-24" id="home">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='wait'>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={slides[current].image} 
              alt={slides[current].title} 
              className="w-full h-full object-cover" 
            />
            {/* Karartma efekti */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-[#FF6B35]/20"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="px-2 md:px-0"
        >
          {/* Başlık */}
          <motion.h1 
            key={`title-${current}`}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {current === 0 ? (
              <>
                Seferoğlu Evden Eve 
                <br />
                <span className="text-[#FF6B35]">Taşımacılık</span>
              </>
            ) : (
              slides[current].title
            )}
          </motion.h1>

          {/* Alt Başlık */}
          <motion.p 
            key={`sub-${current}`}
            className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-10 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
             {current === 0 ? "Güvenilir, Profesyonel ve Hızlı Taşıma Hizmetleri" : slides[current].subtitle}
          </motion.p>

          {/* Butonlar */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 w-full max-w-4xl mx-auto">
            {actionButtons.map((btn, index) => (
              <motion.a 
                key={index} 
                href={btn.href} 
                target={btn.href.startsWith('http') ? "_blank" : "_self"} 
                rel={btn.href.startsWith('http') ? "noopener noreferrer" : ""} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: btn.delay, duration: 0.5 }} 
                whileHover={{ scale: 1.05, y: -5 }} 
                whileTap={{ scale: 0.95 }} 
                className="flex items-center justify-center gap-3 bg-[#EF4444] text-white py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg w-full md:w-auto min-w-[200px] min-h-[48px] hover:shadow-2xl transition-all cursor-pointer border border-red-400/20 hover:bg-[#DC2626]"
              >
                <btn.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-semibold text-sm md:text-base whitespace-nowrap">{btn.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;