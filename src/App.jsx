
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Users, Clock, Award, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Blog from '@/pages/Blog';
import ServicePage from '@/pages/ServicePage';
import AllServices from '@/pages/AllServices';
import GalleryPage from '@/pages/GalleryPage';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';
import { serviceData } from '@/data/serviceData';

// --- HAKKIMIZDA BÖLÜMÜ (AboutSection) ---
const stats = [{
  id: 1,
  label: 'Yıllık Tecrübe',
  value: '15+',
  icon: Clock
}, {
  id: 2,
  label: 'Mutlu Müşteri',
  value: '2500+',
  icon: Users
}, {
  id: 3,
  label: 'Tamamlanan Transfer',
  value: '3000+',
  icon: Truck
}, {
  id: 4,
  label: 'Sigortalı Taşıma',
  value: '%100',
  icon: ShieldCheck
}];
const features = ["Ücretsiz Ekspertiz ve Fiyatlandırma", "Sözleşmeli ve Sigortalı Hizmet", "Mobilya Montaj ve Demontaj", "Kırılacak Eşyalar İçin Özel Ambalaj", "Geniş Araç Filosu", "Uzman ve Kadrolu Personel"];
const AboutSection = () => {
  return <section className="py-12 md:py-16 lg:py-20 bg-gray-900 text-white overflow-hidden relative w-full" id="hakkimizda">
      {/* Arka Plan Dekoru */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF6B35]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          
          {/* Görsel Alanı */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 aspect-[4/3] group">
              {/* Mavi tişörtlü ekip görseli */}
              <img src="https://r.resimlink.com/K8SVUgiD0.png" alt="Seferoğlu Nakliyat Profesyonel Ekip" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              
              {/* Görsel Üzeri Rozet */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-xl flex items-center gap-3">
                <div className="bg-[#FF6B35] p-2 rounded-full">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-300">Kayseri'de</p>
                  <p className="font-bold text-white text-sm md:text-base">En İyi Nakliyat Firması</p>
                </div>
              </div>
            </div>
            {/* Arka Dekor Kutu */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-[#FF6B35]/30 rounded-2xl hidden md:block"></div>
          </motion.div>

          {/* Metin Alanı */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="order-1 lg:order-2">
            <h2 className="text-[#FF6B35] font-bold tracking-wider uppercase mb-2 text-sm md:text-base">Hakkımızda</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
              Kayseri'de Evden Eve Nakliyatın <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Güvenilir Adresi
              </span>
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">Seferoğlu Nakliyat olarak, sadece eşya taşımıyor; anılarınızı, hayallerinizi ve yeni başlangıçlarınızı taşıyoruz. Kayseri'nin Talas'ından Melikgazi'sine, yüksek katlı binalardan müstakil evlere kadar her türlü taşınma ihtiyacınızda, Teknolojinin son imkanlarını (Asansörlü Taşıma) ve geleneksel esnaf güvenini birleştiriyoruz.</p>
            
            {/* Özellik Listesi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              {features.map((feature, index) => <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B35] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>)}
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-800 pt-6 md:pt-8">
              {stats.map(stat => <div key={stat.id} className="text-center">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-[#FF6B35] mx-auto mb-2" />
                  <div className="font-bold text-lg md:text-xl lg:text-2xl text-white">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-gray-500">{stat.label}</div>
                </div>)}
            </div>

          </motion.div>
        </div>
      </div>
    </section>;
};

// Home Component - Landing Page Sections
const Home = () => {
  return <main className="overflow-x-hidden w-full">
      <Hero />
      <AboutSection /> 
      <Gallery /> 
      <Services />
      <Statistics />
      <Testimonials />
      <Contact />
    </main>;
};

// ScrollToTop Component
const ScrollToTop = () => {
  const {
    pathname
  } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main App Component
function App() {
  return <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-gray-100 selection:bg-[#FF6B35] selection:text-white overflow-x-hidden">
        <ScrollToTop />
        <Helmet>
          <title>Seferoğlu Evden Eve Taşımacılık - Kayseri'nin Güvenilir Nakliyatçısı</title>
          <meta name="description" content="Kayseri evden eve nakliyat, asansörlü taşıma ve ofis taşımacılığında Seferoğlu güvencesi. 15+ yıl deneyim, sigortalı ve ambalajlı hizmet." />
          <meta name="keywords" content="kayseri nakliyat, evden eve, asansörlü taşıma, seferoğlu nakliyat" />
        </Helmet>
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/gallery" element={<GalleryPage />} />
          
          {/* Dynamic Service Routes */}
          {serviceData.map(service => <Route key={service.id} path={service.path} element={<ServicePage data={service} />} />)}
        </Routes>
       
        <WhatsAppButton />
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>;
}
export default App;
