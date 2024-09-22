"use client";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Head from "next/head";
export default function Nosotros() {
    return (
        <>
             <Head>
                <title>Nosotros | Luisi Decoraciones</title>
                <meta 
                    name="description" 
                    content="Luisi Decoraciones es una empresa familiar con más de 80 años de experiencia, ofreciendo productos de carpintería de la mejor calidad en el barrio de Monte Castro." 
                />                
            </Head>
            <Navbar />
            <div className="relative mt-12 bg-crema py-20 px-4 lg:px-10">
                
                {/* Título de la sección */}
                <div className="text-center mb-12 flex flex-col justify-center items-center">
                    <h2 className="text-4xl lg:text-5xl text-marron font-bold mb-4">Nuestra Historia</h2>
                    <p className="text-lg text-gray-600 max-w-2xl text-center">
                        Luisi Decoraciones es una empresa familiar con más de 80 años de experiencia, ofreciendo productos de carpintería de la mejor calidad en el barrio de Monte Castro.
                    </p>
                </div>

                {/* Contenedor principal */}
                <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto">
                    {/* Imagen y fondo */}
                    <div className="relative lg:w-1/2">
                        <div className="bg-marron rounded-2xl p-4 flex items-center justify-center h-full">
                            <img
                                src="./fondo.webp" 
                                alt="Foto del fundador de Luisi Decoraciones"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Texto descriptivo e historia */}
                    <div className="p-8 lg:w-1/2">
                        <h3 className="text-2xl font-semibold text-marron mb-4">Sobre Nosotros</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Fundada en 1936 por Luis Luisi, nuestra empresa ha pasado de generación en generación, manteniendo siempre el compromiso con la calidad y la atención personalizada. Desde nuestros inicios, hemos trabajado arduamente para ofrecer a nuestros clientes una amplia gama de productos de madera, desde cortes a medida hasta muebles de pino estándar y personalizados.
                        </p>
                        <p className="text-lg text-gray-600">
                            A lo largo de los años, nos hemos convertido en un referente en el barrio de Monte Castro, gracias a nuestra dedicación, responsabilidad, y la relación cercana que construimos con cada cliente.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
