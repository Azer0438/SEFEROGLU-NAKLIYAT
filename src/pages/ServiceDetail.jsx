import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, MapPin, Truck, Box, ShieldCheck, Clock, Award, Building2, Home } from 'lucide-react';

// --- 1. YARDIMCI FONKSİYON ---
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, '-');
};

// --- 2. BÜTÜN SEO VERİSİ BURADA (Dosya yolu hatası olmasın diye buraya koydum) ---
const allServices = [
  // ÖZEL HİZMETLER
  {
    id: 'asansorlu-nakliye',
    path: '/asansorlu-nakliye',
    title: 'Asansörlü Nakliye',
    description: 'Kayseri yüksek katlı binalarda asansörlü ev taşıma hizmeti.',
    content: 'Seferoğlu Nakliyat olarak, teknolojinin getirdiği en büyük kolaylıklardan biri olan modüler asansör sistemlerini kullanıyoruz. Özellikle Kayseri\'nin yüksek katlı site yaşantısında, bina merdivenlerini ve asansörlerini meşgul etmeden taşınıyoruz.',
    features: [
      { title: 'Hasarsız Taşıma', desc: 'Çizilmelere son.', icon: ShieldCheck },
      { title: 'Hızlı Kurulum', desc: '15 dakikada hazır.', icon: Clock },
      { title: 'Yüksek Erişim', desc: '25. kata kadar ulaşım.', icon: Building2 },
      { title: 'Sessiz', desc: 'Çevreye duyarlı.', icon: Award }
    ]
  },
  {
    id: 'parca-esya-tasima',
    path: '/parca-esya-tasima',
    title: 'Parça Eşya Taşıma',
    description: 'Kayseri parça eşya taşıma ve öğrenci evi nakliyesi.',
    content: 'Tüm evi taşıtmak zorunda değilsiniz. Az miktardaki yükleriniz için ekonomik çözümler üretiyoruz. Öğrenci eşyası, çeyiz veya tek parça mobilyalarınız güvenle taşınır.',
    features: [
      { title: 'Ekonomik', desc: 'Uygun fiyat.', icon: Box },
      { title: 'Sigortalı', desc: 'Tam güvence.', icon: ShieldCheck },
      { title: 'Hızlı', desc: 'Aynı gün teslimat.', icon: Clock },
      { title: 'Paketleme', desc: 'Özel ambalaj.', icon: Box }
    ]
  },
  
  // İLÇELERİ OTOMATİK OLUŞTURUYORUZ
  ...['Talas', 'Melikgazi', 'Kocasinan', 'Develi', 'Akkışla', 'Felahiye', 'Hacılar', 'İncesu', 'Özvatan', 'Pınarbaşı', 'Sarıoğlan', 'Sarız', 'Tomarza', 'Yahyalı', 'Yeşilhisar', 'Bünyan'].map(district => ({
    id: `${createSlug(district)}-evden-eve-nakliyat`,
    path: `/${createSlug(district)}-evden-eve-nakliyat`,
    title: `${district} Evden Eve Nakliyat`,
    description: `Kayseri ${district} ilçesine özel asansörlü, sigortalı evden eve nakliyat hizmeti.`,
    content: `Seferoğlu Nakliyat olarak Kayseri'nin ${district} bölgesinde profesyonel hizmet veriyoruz. Uzman ekibimiz, ${district} ilçesinin yol ve yapı durumuna hakimdir. İster şehir içi ister şehirler arası taşınmalarda, eşyalarınız sigortalı ve ambalajlı olarak yeni adresinize ulaştırılır.`,
    features: [
      { title: `${district} Uzmanı`, desc: 'Bölgeyi bilen ekip.', icon: MapPin },
      { title: 'Asansörlü', desc: 'Yüksek kat çözümü.', icon: Truck },
      { title: 'Sigortalı', desc: 'Güvenli taşıma.', icon: ShieldCheck },
      { title: 'Uygun Fiyat', desc: 'Bölgeye özel tarife.', icon: Award }
    ]
  }))
];

// --- 3. SAYFA TASARIMI ---
const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // URL'den gelen isme göre veriyi buluyoruz
  const service = allServices.find(s => s.path === `/${slug}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Eğer link yanlışsa veya veri yoksa
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white pt-20">
        <h2 className="text-2xl font-bold mb-4">Aradığınız sayfa bulunamadı.</h2>
        <button onClick={() => navigate('/')} className="bg-[#FF6B35] px-6 py-3 rounded-lg font-bold">Anasayfaya Dön</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <Helmet>
        <title>{service.title} - Seferoğlu Nakliyat</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Görsel Alanı */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img src="https://r.resimlink.com/x52yovx52yovx52y.png" alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-[#FF6B35] font-bold uppercase tracking-wider">Seferoğlu Güvencesiyle</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* İçerik */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Hizmet Detayları</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{service.content}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => {
                const IconComp = feature.icon; // İkonu değişkene atadık (Hata vermemesi için)
                return (
                  <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#FF6B35] transition-colors group">
                    <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FF6B35] transition-colors">
                      <IconComp className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Yan Menü (Diğer İlçeler) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gradient-to-br from-[#FF6B35] to-red-600 rounded-2xl p-8 text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-2">Hemen Fiyat Al</h3>
                <a href="tel:05528819812" className="bg-white text-[#FF6B35] font-bold py-3 px-6 rounded-full block mt-4 hover:scale-105 transition-transform">
                  0552 881 98 12
                </a>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FF6B35]" /> Diğer Bölgeler
                </h3>
                <ul className="space-y-2">
                  {allServices.filter(s => s.id !== service.id && s.id.includes('nakliyat')).slice(0, 6).map(other => (
                    <li key={other.id}>
                      <Link to={other.path} className="flex items-center justify-between text-gray-400 hover:text-[#FF6B35] p-2 rounded-lg transition-all hover:bg-gray-700/50">
                        <span>{other.title.replace(' Evden Eve Nakliyat', '')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;