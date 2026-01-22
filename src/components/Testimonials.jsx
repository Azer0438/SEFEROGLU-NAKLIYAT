
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      title: 'Ev Sahibi',
      review: 'Seferoğlu Taşımacılık ile çalışmak harikaydı. Eşyalarımızı çok özenli bir şekilde taşıdılar. Kesinlikle tavsiye ediyorum!',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Ahmet+Yilmaz&background=FF6B35&color=fff'
    },
    {
      name: 'Ayşe Demir',
      title: 'İşletme Sahibi',
      review: 'Ofis taşımamızı profesyonel bir şekilde gerçekleştirdiler. Zamanında ve eksiksiz teslimat. Çok memnun kaldık.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Ayse+Demir&background=FFA500&color=fff'
    },
    {
      name: 'Mehmet Kaya',
      title: 'Müşteri',
      review: 'Şehir dışına taşınmamda büyük yardımcı oldular. Eşyalarım güvenle ve hasarsız bir şekilde teslim edildi.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Mehmet+Kaya&background=FF6B35&color=fff'
    },
    {
      name: 'Fatma Özkan',
      title: 'Ev Sahibi',
      review: 'Depolama hizmeti çok kaliteli. Eşyalarımı aylarca güvenle sakladılar. Fiyat performans açısından mükemmel!',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Fatma+Ozkan&background=FFA500&color=fff'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-800 overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Müşteri Görüşleri
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Memnun müşterilerimizin yorumları
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-[#FF6B35] relative"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 text-[#FF6B35]/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#FFA500] fill-current" />
                ))}
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                "{testimonial.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
