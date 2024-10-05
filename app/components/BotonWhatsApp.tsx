import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const BotonWhatsApp: React.FC = () => {
  const mensaje = 'Hola Luisi Decoraciones, me gustaría recibir más información sobre sus productos.';
  const numeroWhatsApp: string = "+541139044640";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;


  return (
    <a
      href={urlWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 md:w-16 md:h-16"
    >
      <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
    </a>
  );
};

export default BotonWhatsApp;
