import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Link from "next/link";
import { HiClipboardList, HiPencilAlt, HiAdjustments } from "react-icons/hi";
import Head from "next/head";
export default function Muebles() {
  return (
    <>
      <Head>
        <title>Muebles a Medida | Luisi Decoraciones</title>
        <meta name="description" content="En Luisi Decoraciones creamos muebles a medida con precisión, asesoramiento personalizado y flexibilidad para cualquier proyecto." />
        <meta name="keywords" content="muebles a medida, carpintería, cortes a medida, muebles personalizados, Luisi Decoraciones" />
        <meta name="author" content="Luisi Decoraciones" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="bg-crema pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
            Muebles a Medida
          </h2>
          <div className="text-gris">
            <p className=" text-lg leading-relaxed text-center">
              En nuestra carpintería, entendemos que cada proyecto es único, y
              por eso ofrecemos un servicio de corte a medida que se adapta a
              tus necesidades específicas. Si tienes en mente un mueble con
              medidas exactas, o necesitas piezas de madera que se ajusten
              perfectamente a tu espacio, estamos aquí para ayudarte a hacer
              realidad tu visión.
            </p>
            <div className="flex justify-center items-center">
            <button className="flex justify-center mt-8 mb-20">
              <Link
                href="https://wa.me/1234567890?text=Quiero%20saber%20más%20sobre%20Muebles%20a%20Medida"
                className="text-white bg-marron hover:bg-marron-dark px-8 py-4 rounded-lg text-lg font-medium"
              >
                Cotizar
              </Link>
            </button>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">¿Cómo Funciona?</h3>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
              <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[280px]">
                <div className="flex mb-4">
                  <div className="w-12 h-12 bg-marron text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Cuéntanos tu idea</h4>
                <p>
                  Acércate con tu proyecto, ya sea un mueble, una estructura, o
                  cualquier pieza que requiera cortes precisos. Puedes traernos
                  las medidas exactas o dejarnos ayudarte a definirlas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[280px]">
                <div className="flex mb-4">
                  <div className="w-12 h-12 bg-marron text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Selecciona el material</h4>
                <p>
                  Elige entre nuestra amplia variedad de maderas y materiales,
                  desde pino hasta fibrofacil y terciado. Te asesoraremos sobre
                  cuál es la mejor opción según el uso y estilo que buscas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[280px]">
                <div className="flex mb-4">
                  <div className="w-12 h-12 bg-marron text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Nosotros nos encargamos del resto</h4>
                <p>
                  Una vez que tengamos las medidas y el material, realizamos los
                  cortes con la máxima precisión, garantizando que cada pieza
                  encaje a la perfección.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-6 text-center">Ventajas de Nuestro Servicio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <HiClipboardList className="w-12 h-12 text-marron mb-4" />
                <h4 className="text-xl font-semibold mb-2">Precisión Garantizada</h4>
                <p className="text-center">
                  Contamos con herramientas de última generación que aseguran cortes exactos, sin margen de error.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <HiPencilAlt className="w-12 h-12 text-marron mb-4" />
                <h4 className="text-xl font-semibold mb-2">Asesoramiento Personalizado</h4>
                <p className="text-center">
                  Te acompañamos en todo el proceso, desde la elección del material hasta los detalles finales.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <HiAdjustments className="w-12 h-12 text-marron mb-4" />
                <h4 className="text-xl font-semibold mb-2">Flexibilidad</h4>
                <p className="text-center">
                  No importa si tu proyecto es grande o pequeño, nosotros lo hacemos posible.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <a
                href="https://wa.me/1234567890?text=Quiero%20saber%20más%20sobre%20Muebles%20a%20Medida"
                className="text-white bg-marron hover:bg-marron-dark px-8 py-4 rounded-lg text-2xl font-medium"
              >
                Cotizar
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
