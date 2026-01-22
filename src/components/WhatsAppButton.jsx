
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/905528819812"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-green-500/50 transition-all duration-300 md:bottom-8 md:right-8 border border-white/20"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" />
      <span className="font-bold hidden md:inline-block">WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
