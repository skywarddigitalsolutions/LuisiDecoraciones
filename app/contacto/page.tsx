"use client";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import Head from "next/head";
export default function Contacto() {
    return (
        <>
             <Head>
                <title>Contáctanos | Luisi Decoraciones</title>
                <meta 
                    name="description" 
                    content="Ponte en contacto con Luisi Decoraciones para consultas sobre restauración de muebles, pedidos y más. Estamos ubicados en Monte Castro, Buenos Aires." 
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <div className="relative my-12 bg-crema py-20 px-4 lg:px-10">
                
                {/* Título de la sección */}
                <div className="text-center mb-12 flex flex-col justify-center items-center">
                    <h2 className="text-4xl lg:text-5xl text-marron font-bold mb-4">Contáctanos</h2>
                    <p className="text-lg text-gray-600 max-w-2xl text-center">
                        Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta o pedido.
                    </p>
                </div>

                {/* Contenedor general con borde redondeado */}
                <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-lg max-w-5xl mx-auto">

                    {/* Información de contacto */}
                    <div className="bg-white p-8 lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-marron mb-12">Información de Contacto</h3>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-2xl text-marron mr-4" />
                            <p>Lascano 5277, Monte Castro, Buenos Aires, Argentina</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-2xl text-marron mr-4" />
                            <p>+541151742249</p> {/* Reemplaza con el número real */}
                        </div>
                        <div className="flex items-center mb-4">
                            <FaInstagram className="text-2xl text-marron mr-4" />
                            <a href="https://instagram.com/luisidecoraciones" target="_blank" rel="noopener noreferrer" className="hover:text-verdeoscuro">
                                @luisidecoraciones
                            </a>
                        </div>
                        <div className="flex items-center">
                            <FaFacebook className="text-2xl text-marron mr-4" />
                            <a href="https://facebook.com/luisidecoraciones" target="_blank" rel="noopener noreferrer" className="hover:text-verdeoscuro">
                                Luisi Decoraciones
                            </a>
                        </div>
                    </div>

                    {/* Imagen del local */}
                    <div className="lg:w-1/2">
                        <img
                            src="./fondo.webp" 
                            alt="Imagen del Local de Luisi Decoraciones"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Mapa embebido */}
                <div className="text-center mt-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2334465585043!2d-58.5209641!3d-34.6158896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7590a2c7709%3A0x62e8de89ffb0d496!2sLascano%205277%2C%20C1417APJ%20CABA%2C%20Argentina!5e0!3m2!1sen!2s!4v1693504165462!5m2!1sen!2s"
                        className="w-full h-[400px] rounded-lg border-none"
                        loading="lazy"
                        title="Mapa de ubicación"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <Footer />       
        </>
    );
}
