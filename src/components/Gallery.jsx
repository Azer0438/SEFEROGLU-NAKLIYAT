import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    'https://r.resimlink.com/69zigM.webp',
    'https://r.resimlink.com/iIJESra.jpeg',
    'https://r.resimlink.com/N1Z8BnSK.jpg',
    'https://r.resimlink.com/QkOncta87.jpeg',
    'https://r.resimlink.com/PAQOlCIW8Kg.jpg',
    'https://r.resimlink.com/jFvsiTqK-9U.jpg'
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-900 overflow-hidden w-full" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Çalışma Görüntülerimiz
          </h2>
          <div className="w-20 h-1 md:w-24 bg-[#FF6B35] mx-auto rounded-full"></div>
          <p className="text-sm md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto px-4">
            Sahadan en güncel çalışma ve operasyon görsellerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] cursor-pointer"
            >
              <img
                src={src}
                alt={`Çalışma Görüntüsü ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-[#ff5514] transition-all duration-300 shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 transform hover:-translate-y-1 min-h-[44px] min-w-[200px] justify-center text-sm md:text-base"
          >
            Daha Fazla Görsel İçin Tıklayın
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;