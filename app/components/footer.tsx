import Logo from '../../public/logo.svg'; // Asegúrate de tener tu logo en esta ruta

export default function Footer() {
    return (
        <footer className="bg-marron text-crema py-8 px-6">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between ">
                {/* Sección de logo y descripción */}
                <div className="flex flex-col items-start mb-8 lg:mb-0">
                    <img
                        src="./logo.svg"
                        alt="Logo"
                        className="mb-2 h-12 w-auto"
                    />
                    <p className=" ">
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
                <div className="flex flex-col items-center lg:items-end">
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-crema hover:text-beige">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-crema hover:text-beige">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-crema hover:text-beige">
                            <i className="fab fa-instagram"></i>
                        </a>
                        {/* Agrega otros íconos de redes sociales aquí */}
                    </div>
                    <p className="text-center lg:text-right">
                        Dirección: Calle Ejemplo 123, Ciudad, País
                    </p>
                </div>
            </div>
        </footer>
    );
}
