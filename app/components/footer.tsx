import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-marron text-crema py-8 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-center space-y-8 lg:space-y-0">
        {/* Sección de logo y descripción */}
        <div className="flex flex-col items-center lg:items-center  gap-2 w-full lg:w-1/3">
          <Image src={Logo} alt="Logo" className="mb-2 h-12 lg:h-16 w-auto" />
          <p className="text-sm lg:text-lg text-center">
            Construimos tus sueños en madera. Escríbenos para cotizar tu corte
          </p>
        </div>

        {/* Menú de navegación */}
        <div className="flex flex-col">
          <h5 className="text-left mb-5 text-lg">Menú de Navegación</h5>
          <nav className="flex flex-col items-center gap-1 w-full ">
            <a href="/" className="hover:text-beige text-md">
              Inicio
            </a>
            <a href="/productos" className="hover:text-beige text-md">
              Productos
            </a>
            <a href="/servicios" className="hover:text-beige text-md">
              Servicios
            </a>
            <a href="/nosotros" className="hover:text-beige text-md">
              Nosotros
            </a>
            <a href="/contacto" className="hover:text-beige text-md">
              Contacto
            </a>
          </nav>
        </div>

        {/* Redes sociales y dirección */}
        <div className="flex flex-col items-center lg:items-end w-full lg:gap-12 lg:w-1/3">
          <div className="flex space-x-4 mb-4 lg:gap-2">
            <a
              href="https://instagram.com/luisidecoraciones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crema hover:text-beige"
            >
              <FaInstagram className="h-5 w-5 lg:h-7 lg:w-7" />
            </a>
            <a
              href="https://facebook.com/luisidecoraciones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crema hover:text-beige"
            >
              <FaFacebookF className="h-5 w-5 lg:h-7 lg:w-7" />
            </a>
            <a
              href="https://wa.me/+541139044640"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crema hover:text-beige"
            >
              <FaWhatsapp className="h-5 w-5 lg:h-7 lg:w-7" />
            </a>
          </div>
          <div className="flex ">
            <FaMapMarkerAlt className="text-2xl text-crema mr-4" />
            <p className="text-sm lg:text-base">
              Lascano 5277 - Monte Castro
            </p>
          </div>
        </div>
      </div>

      {/* Derechos reservados y crédito */}
      <div className="border-t border-crema mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p>
          Hecho por{" "}
          <a
            href="https://sds.com.ar"
            className="text-crema hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skyward Digital Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
