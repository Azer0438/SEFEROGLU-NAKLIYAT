import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allImages = [
    // Construction & Moving
    'https://r.resimlink.com/69zigM.webp',
    'https://r.resimlink.com/iIJESra.jpeg',
    'https://r.resimlink.com/N1Z8BnSK.jpg',
    'https://r.resimlink.com/QkOncta87.jpeg',
    'https://r.resimlink.com/PAQOlCIW8Kg.jpg',
    'https://r.resimlink.com/jFvsiTqK-9U.jpg',
    // Logistics & Warehouse
    'https://r.resimlink.com/eHc8OG.jpg',
    'https://r.resimlink.com/_eX4KaQVn.jpg',
    'https://r.resimlink.com/n0K2eNkFbC.jpeg',
    'https://r.resimlink.com/OBMsH65TUV.webp',
    'https://r.resimlink.com/azCFS.jpg',
    'https://r.resimlink.com/_nB6vuay7.jpeg'
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20 pb-12 md:pt-24 md:pb-16 px-4">
      <Helmet>
        <title>Tüm Çalışmalarımız - Seferoğlu Nakliyat</title>
        <meta name="description" content="Seferoğlu Nakliyat olarak gerçekleştirdiğimiz evden eve nakliyat, ofis taşıma ve lojistik operasyonlarımızdan kareler." />
      </Helmet>

      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Tüm Çalışmalarımız
          </h1>
          <div className="w-20 h-1 md:w-24 bg-[#FF6B35] mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            Profesyonel ekibimizle gerçekleştirdiğimiz taşımacılık operasyonlarından, modern araç filomuzdan ve depolama alanlarımızdan seçkin kareler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {allImages.map((src, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-gray-800 aspect-square border border-gray-800 hover:border-[#FF6B35]/30 transition-colors duration-300"
            >
              <img
                src={src}
                alt={`Referans Çalışma ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;