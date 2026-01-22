import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, CheckCircle, Code2 } from 'lucide-react'; // Code2 ikonunu ekledim (İmza için şık durur)
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const districts = [
    { name: 'Talas Nakliyat', slug: '/talas-evden-eve-nakliyat' },
    { name: 'Melikgazi Nakliyat', slug: '/melikgazi-evden-eve-nakliyat' },
    { name: 'Kocasinan Nakliyat', slug: '/kocasinan-evden-eve-nakliyat' },
    { name: 'Develi Nakliyat', slug: '/develi-evden-eve-nakliyat' },
    { name: 'Hacılar Nakliyat', slug: '/hacilar-evden-eve-nakliyat' },
    { name: 'Bünyan Nakliyat', slug: '/bunyan-evden-eve-nakliyat' },
    { name: 'İncesu Nakliyat', slug: '/incesu-evden-eve-nakliyat' },
    { name: 'Yahyalı Nakliyat', slug: '/yahyali-evden-eve-nakliyat' }
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 md:py-16 border-t border-gray-900">
      <div className="container mx-auto px-4">
        {/* ÜST KISIM: Logo ve Açıklama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">

          {/* 1. Sütun: Marka Bilgisi (Geniş alan) */}
          <div className="lg:col-span-2 text-center md:text-left">
            <Link to="/">
              <img
                src="https://horizons-cdn.hostinger.com/8892c284-e4f2-48b1-909e-fc10ffa7628e/gemini_generated_image_oksqszoksqszoksq-fvY96.png"
                alt="Seferoğlu Nakliyat Logo"
                className="h-16 md:h-20 w-auto mb-6 mx-auto md:mx-0 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-0 lg:pr-10">
              Kayseri Seferoğlu Evden Eve Nakliyat, 15 yılı aşkın tecrübesiyle Kayseri ve çevresinde profesyonel taşımacılık hizmetleri sunmaktadır.
              Asansörlü taşımacılık, sigortalı nakliye ve uzman kadromuzla eşyalarınız güvende.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. Sütun: Hızlı Linkler */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Hızlı Erişim
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FF6B35] rounded-full hidden md:block"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-[#FF6B35] transition-colors p-1 block md:inline">Anasayfa</Link></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-[#FF6B35] transition-colors p-1 block md:inline w-full md:w-auto">Hizmetlerimiz</button></li>
              <li><Link to="/blog" className="hover:text-[#FF6B35] transition-colors p-1 block md:inline">Blog & Haberler</Link></li>
              <li><a href="tel:05528819812" className="hover:text-[#FF6B35] transition-colors p-1 block md:inline">İletişim</a></li>
            </ul>
          </div>

          {/* 3. Sütun: HİZMET BÖLGELERİ */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Hizmet Bölgeleri
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FF6B35] rounded-full hidden md:block"></span>
            </h3>
            <ul className="space-y-2">
              {districts.map((district, index) => (
                <li key={index}>
                  <Link
                    to={district.slug}
                    className="text-gray-400 hover:text-[#FF6B35] text-sm transition-colors flex items-center justify-center md:justify-start gap-2 p-1"
                  >
                    <span className="w-1 h-1 bg-[#FF6B35] rounded-full hidden md:block"></span>
                    {district.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/all-services" className="text-[#FF6B35] text-sm font-semibold hover:underline mt-2 inline-block p-1">
                  Tüm Bölgeleri Gör →
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Sütun: İletişim */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Bize Ulaşın
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FF6B35] rounded-full hidden md:block"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2 text-[#FF6B35] font-semibold">
                  <MapPin className="w-5 h-5" />
                  Merkez Ofis
                </div>
                <span className="text-sm text-gray-400">Kocasinan Bulvarı No:12<br />Kayseri, Türkiye</span>
              </li>
              <li className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2 text-[#FF6B35] font-semibold">
                  <Phone className="w-5 h-5" />
                  Telefon
                </div>
                <a href="tel:05528819812" className="text-sm hover:text-white transition-colors p-1 block">0552 881 98 12</a>
                <a href="tel:05416186304" className="text-sm hover:text-white transition-colors p-1 block">0541 618 63 04</a>
              </li>
              <li className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2 text-[#FF6B35] font-semibold">
                  <Mail className="w-5 h-5" />
                  E-Posta
                </div>
                <a href="mailto:info@seferoglunakliyat.com" className="text-sm hover:text-white transition-colors p-1 block">info@seferoglunakliyat.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ALT KISIM: Telif Hakkı, Linkler ve İMZA */}
        <div className="border-t border-gray-900 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            
            {/* SOL: Copyright */}
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Seferoğlu Evden Eve Nakliyat.
            </p>
            
            {/* ORTA: Gizlilik Linkleri */}
            <div className="flex gap-4 md:gap-6 text-sm flex-wrap justify-center text-gray-500">
              <Link to="/gizlilik-politikasi" className="hover:text-[#FF6B35] transition-colors p-1">Gizlilik Politikası</Link>
              <Link to="/kullanim-kosullari" className="hover:text-[#FF6B35] transition-colors p-1">Kullanım Koşulları</Link>
              <Link to="/sitemap.xml" className="hover:text-[#FF6B35] transition-colors p-1">Site Haritası</Link>
            </div>

            {/* SAĞ: BARBAROSSOFT İMZA */}
            <div className="flex items-center gap-2 text-sm bg-gray-900/50 px-3 py-1 rounded-full border border-gray-800/50 hover:border-[#FF6B35]/30 transition-colors">
               <Code2 size={16} className="text-gray-500" />
               <span className="text-gray-500">Software:</span>
               <a 
                 href="#" 
                 className="font-bold text-[#FF6B35] hover:text-white transition-all tracking-wide shadow-orange-500/20"
                 title="Web Yazılım & Tasarım"
               >
                 BarbarosSoft
               </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
