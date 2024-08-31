import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importa los íconos necesarios
import Logo from '../../public/logo.svg'; // Asegúrate de tener tu logo en esta ruta

export default function Footer() {
    return (
        <footer className="bg-marron text-crema py-8 px-6">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between">
                {/* Sección de logo y descripción */}
                <div className="flex flex-col items-start mb-8 lg:mb-0">
                    <img
                        src={Logo.src}
                        alt="Logo"
                        className="mb-2 h-12 w-auto"
                    />
                    <p>
                        Construimos tus sueños en madera. Escribinos para cotizar tu corte
                    </p>
                </div>

                {/* Menú de navegación */}
                <nav className="flex flex-col lg:flex-row lg:space-x-8 mb-8 gap-5 lg:mb-0">
                    <a href="/" className="hover:text-beige">Inicio</a>
                    <a href="/productos" className="hover:text-beige">Productos</a>
                    <a href="/servicios" className="hover:text-beige">Servicios</a>
                    <a href="/nosotros" className="hover:text-beige">Nosotros</a>
                    <a href="/contacto" className="hover:text-beige">Contacto</a>
                </nav>

                {/* Redes sociales y dirección */}
                <div className="flex flex-col items-start lg:items-end">
                    <div className="flex space-x-4 mb-4 mt-2">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-crema hover:text-beige">
                            <FaInstagram className='h-5 w-auto' />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-crema hover:text-beige">
                            <FaFacebookF className='h-5 w-auto' />
                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-crema hover:text-beige">
                            <FaWhatsapp className='h-5 w-auto' />
                        </a>
                        
                        {/* Agrega otros íconos de redes sociales aquí */}
                    </div>
                    <p className="text-left lg:text-right">
                        Dirección: Calle Ejemplo 123, Ciudad, País
                    </p>
                </div>
            </div>

            {/* Derechos reservados y crédito */}
            <div className="border-t border-crema mt-8 pt-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
                <p>Hecho por <a href="https://sds.com.ar" className="text-crema hover:underline" target="_blank" rel="noopener noreferrer">Skyward Digital Solutions</a></p>
            </div>
        </footer>
    );
}
