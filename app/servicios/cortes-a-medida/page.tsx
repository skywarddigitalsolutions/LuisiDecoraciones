import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Head from 'next/head';

export default function Cortes() {
  const cortes = [
    {
      name: "Placas Chapadur",
      description: "Común, blanco o perforado.",
      image: "/images/chapadur.jpg",
      whatsappLink: "https://wa.me/1234567890?text=Quiero%20comprar%20Placas%20Chapadur",
    },
    {
      name: "Terciado",
      description: "Placas de madera de 3 mm.",
      image: "/images/terciado.jpg",
      whatsappLink: "https://wa.me/1234567890?text=Quiero%20comprar%20Terciado",
    },
    {
      name: "Fibrofacil",
      description: "Se fracciona en distintos espesores. MDF.",
      image: "/images/fibrofacil.jpg",
      whatsappLink: "https://wa.me/1234567890?text=Quiero%20comprar%20Fibrofacil",
    },
    {
      name: "Tablero de Madera",
      description: "Distintos espesores, madera añadida.",
      image: "/images/tablero.jpg",
      whatsappLink: "https://wa.me/1234567890?text=Quiero%20comprar%20Tablero%20de%20Madera",
    },
    {
      name: "Varillas",
      description: "Distintos tamaños en pulgadas.",
      image: "/images/varillas.jpg",
      whatsappLink: "https://wa.me/1234567890?text=Quiero%20comprar%20Varillas",
    },
    {
      name: "Listonadas",
      description: "Distintos ancho y espesor.",
      image: "/images/listonadas.jpg",
      whatsappLink: "https://wa.me/1234567890?text=Quiero%20comprar%20Listonadas",
    },
  ];

  return (
    <>
      <Head>
        <title>Cortes a Medida | Luisi Decoraciones</title>
        <meta name="description" content="Descubre nuestros cortes a medida en diferentes tipos de madera como chapadur, terciado, fibrofacil y más. Calidad garantizada." />
      </Head>
      <Navbar />
      <div className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Cortes a Medida</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cortes.map((corte) => (
              <div key={corte.name} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
                <div>
                  <img
                    src={corte.image}
                    alt={corte.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{corte.name}</h3>
                  <p className="text-gray-600 mb-4">{corte.description}</p>
                </div>
                <div className="mt-auto">
                  <a
                    href={corte.whatsappLink}
                    className="text-white bg-marron hover:bg-marron-dark px-4 py-2 rounded-lg text-sm font-medium block text-center"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
