
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Search, Truck, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { serviceData } from '@/data/serviceData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // For mobile dropdowns
  
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // Close mobile menu
    setIsMobileMenuOpen(false);

    if (id === 'home' && location.pathname !== '/') {
      navigate('/');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 90;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleSearchClick = () => {
    toast({
      title: "Arama Özelliği",
      description: "Arama özelliği yakında eklenecektir."
    });
  };

  // Group services
  const mainServices = serviceData.filter(s => s.category === 'service');
  const districtServices = serviceData.filter(s => s.category === 'district');

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-950 shadow-lg`}
    >
      <div className={`container mx-auto py-2 md:py-4 px-4`}>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer relative z-50"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="https://horizons-cdn.hostinger.com/8892c284-e4f2-48b1-909e-fc10ffa7628e/gemini_generated_image_oksqszoksqszoksq-2Re7C.png" 
              alt="Seferoğlu Logo" 
              className="h-10 md:h-16 lg:h-20 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center justify-center gap-1">
            <button onClick={() => scrollToSection('home')} className="px-3 py-2 text-sm text-gray-300 hover:text-white font-medium hover:bg-white/5 rounded-lg transition-colors">
              Anasayfa
            </button>

            {/* Hizmetler Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-gray-300 hover:text-white font-medium hover:bg-white/5 rounded-lg transition-colors flex items-center gap-1 group-hover:text-[#FF6B35]">
                Hizmetler <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-2 overflow-hidden">
                  {mainServices.map((service) => (
                    <Link 
                      key={service.id} 
                      to={service.path}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <Truck className="w-4 h-4 text-[#FF6B35]" />
                      {service.title}
                    </Link>
                  ))}
                  <button onClick={() => scrollToSection('services')} className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                    <Truck className="w-4 h-4 text-[#FF6B35]" />
                    Diğer Hizmetler
                  </button>
                </div>
              </div>
            </div>

            {/* Bölgeler Dropdown (Mega Menu) */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm text-gray-300 hover:text-white font-medium hover:bg-white/5 rounded-lg transition-colors flex items-center gap-1 group-hover:text-[#FF6B35]">
                Hizmet Bölgeleri <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {districtServices.map((service) => (
                      <Link 
                        key={service.id} 
                        to={service.path}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <MapPin className="w-3 h-3 text-[#FF6B35]" />
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button onClick={() => scrollToSection('gallery')} className="px-3 py-2 text-sm text-gray-300 hover:text-white font-medium hover:bg-white/5 rounded-lg transition-colors">
              Galeri
            </button>
            <Link to="/blog" className={`px-3 py-2 text-sm font-medium hover:bg-white/5 rounded-lg transition-colors ${location.pathname.includes('/blog') ? 'text-[#FF6B35]' : 'text-gray-300 hover:text-white'}`}>
              Blog
            </Link>
            <button onClick={() => scrollToSection('hakkimizda')} className="px-3 py-2 text-sm text-gray-300 hover:text-white font-medium hover:bg-white/5 rounded-lg transition-colors">
              Hakkımızda
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-3 py-2 text-sm text-gray-300 hover:text-white font-medium hover:bg-white/5 rounded-lg transition-colors">
              İletişim
            </button>
          </nav>

          {/* Right Section: Phone & Search */}
          <div className="hidden xl:flex items-center gap-3">
            <Button className="bg-gray-100 hover:bg-white text-gray-900 font-semibold rounded-lg px-4 py-2 flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 h-11" onClick={() => window.open('tel:0552 881 98 12', '_self')}>
              <Phone className="w-4 h-4 text-[#FF6B35]" />
              <span>0552 881 98 12</span>
            </Button>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSearchClick}
              className="w-11 h-11 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-gray-700"
            >
              <Search className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü Aç/Kapa"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden overflow-hidden bg-gray-950 border-t border-gray-800 mt-4 rounded-xl"
            >
              <nav className="flex flex-col py-4 max-h-[85vh] overflow-y-auto">
                <button onClick={() => scrollToSection('home')} className="px-5 py-4 text-gray-300 text-left hover:bg-gray-800 hover:text-white font-medium text-lg">
                  Anasayfa
                </button>

                {/* Mobile Services Accordion */}
                <div>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                    className="w-full px-5 py-4 text-gray-300 text-left hover:bg-gray-800 hover:text-white font-medium flex justify-between items-center text-lg"
                  >
                    <span>Hizmetler</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'services' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-900 overflow-hidden"
                      >
                        {mainServices.map((service) => (
                          <Link 
                            key={service.id}
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-8 py-4 text-base text-gray-400 hover:text-white hover:bg-gray-800 border-l-2 border-transparent hover:border-[#FF6B35]"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                 {/* Mobile Districts Accordion */}
                 <div>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'districts' ? null : 'districts')}
                    className="w-full px-5 py-4 text-gray-300 text-left hover:bg-gray-800 hover:text-white font-medium flex justify-between items-center text-lg"
                  >
                    <span>Hizmet Bölgeleri</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'districts' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'districts' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-900 overflow-hidden"
                      >
                        {districtServices.map((service) => (
                          <Link 
                            key={service.id}
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-8 py-4 text-base text-gray-400 hover:text-white hover:bg-gray-800 border-l-2 border-transparent hover:border-[#FF6B35]"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button onClick={() => scrollToSection('gallery')} className="px-5 py-4 text-gray-300 text-left hover:bg-gray-800 hover:text-white font-medium text-lg">
                  Galeri
                </button>
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="px-5 py-4 text-gray-300 text-left hover:bg-gray-800 hover:text-white font-medium text-lg">
                  Blog
                </Link>
                <button onClick={() => scrollToSection('contact')} className="px-5 py-4 text-gray-300 text-left hover:bg-gray-800 hover:text-white font-medium text-lg">
                  İletişim
                </button>

                <div className="p-5 space-y-4 mt-2 border-t border-gray-800">
                  <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold justify-center h-14 text-lg" onClick={() => window.open('tel:0552 881 98 12', '_self')}>
                    <Phone className="w-5 h-5 text-[#FF6B35] mr-2" />
                    0552 881 98 12
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
