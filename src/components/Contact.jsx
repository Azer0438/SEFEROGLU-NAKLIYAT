import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Hata!",
        description: "Lütfen zorunlu alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Başarılı!",
      description: "Mesajınız alındı. En kısa sürede size dönüş yapacağız.",
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gray-800 overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Taşıma İhtiyaçlarınız İçin Bize Ulaşın
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Ücretsiz fiyat teklifi almak için formu doldurun
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm md:text-base">Ad Soyad *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="Adınız ve soyadınız"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm md:text-base">Telefon *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="0532 XXX XX XX"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm md:text-base">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="email@ornek.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium text-sm md:text-base">Taşıma Tarihi</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 md:py-4 text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-gray-300 mb-2 font-medium text-sm md:text-base">Hizmet Türü</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 md:py-4 text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                >
                  <option value="">Seçiniz</option>
                  <option value="evden-eve">Evden Eve Taşıma</option>
                  <option value="sehir-ici">Şehir İçi Taşıma</option>
                  <option value="depolama">Eşya Depolama</option>
                  <option value="sehir-disi">Şehir Dışı Taşıma</option>
                </select>
              </div>

              <div className="mb-6 md:mb-8">
                <label className="block text-gray-300 mb-2 font-medium text-sm md:text-base">Mesajınız</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 md:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
                  placeholder="Detayları buraya yazabilirsiniz..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#E74C3C] text-white py-4 md:py-6 text-base md:text-lg h-auto"
              >
                <Send className="w-5 h-5 mr-2" />
                Gönder
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-gray-900 rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFA500] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Telefon</h4>
                    <p className="text-gray-400 text-sm md:text-base">0552 881 98 12 </p>
                    <p className="text-gray-400 text-sm md:text-base">0541 618 63 04 </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFA500] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Email</h4>
                    <p className="text-gray-400 text-sm md:text-base">azerbarbaros38@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF6B35] to-[#FFA500] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Adres</h4>
                    <p className="text-gray-400 text-sm md:text-base">Kayseri, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FF6B35] to-[#E74C3C] rounded-xl p-6 md:p-8 shadow-lg text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                7/24 Müşteri Hizmeti
              </h3>
              <p className="text-white/90 mb-6 text-sm md:text-base">
                Acil taşıma ihtiyaçlarınız için her zaman ulaşabilirsiniz
              </p>
              <Button
                size="lg"
                className="w-full md:w-auto h-12 md:h-14 text-base bg-white text-[#FF6B35] hover:bg-gray-100 font-bold border-2 border-transparent"
                onClick={() => window.open('tel:05528819812', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;