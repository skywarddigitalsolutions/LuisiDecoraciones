"use client";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Contacto() {
    return (
        <>
        <Navbar />
        <div className="bg-crema py-32 px-6">
            <h2 className="text-marron text-4xl md:text-5xl font-bold text-center mb-12">Contacto</h2>
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
                {/* Datos de contacto */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h3 className="text-marron text-2xl font-semibold mb-4">Información de Contacto</h3>
                    <p className="text-marron mb-4">
                        <strong>Dirección:</strong> Av. Ejemplo 123, Monte Castro, CABA, Argentina
                    </p>
                    <p className="text-marron mb-4">
                        <strong>Teléfono:</strong> +54 11 1234-5678
                    </p>
                    <p className="text-marron mb-4">
                        <strong>Email:</strong> contacto@luisidecoraciones.com
                    </p>
                    <h3 className="text-marron text-2xl font-semibold mt-8 mb-4">Horarios de Atención</h3>
                    <p className="text-marron mb-2">Lunes a Viernes: 9:00 AM - 6:30 PM</p>
                    <p className="text-marron">Sábados: 9:00 AM - 1:00 PM</p>
                    
                    {/* Redes Sociales */}
                    <div className="mt-8 flex justify-center md:justify-start">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-marron mx-3 text-xl hover:text-gray-700">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-marron mx-3 text-xl hover:text-gray-700">
                            <FaInstagram />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-marron mx-3 text-xl hover:text-gray-700">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-marron mx-3 text-xl hover:text-gray-700">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Imagen del local */}
                <div className="md:w-1/2">
                    <img
                        src="/path/to/store-image.jpg"  // Reemplaza con la ruta correcta de la imagen
                        alt="Imagen del Local"
                        className="w-full h-auto object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}
