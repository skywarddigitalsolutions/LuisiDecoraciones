"use client";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import Image from "next/image";

export default function Cortes() {
  const cortes = [
    {
      name: "Placas Chapadur",
      description:
        "Disponibles en versiones comunes (marrón), blanco, o blanco perforado, ideales para múltiples usos. Se venden en plancha entera o fraccionada.",
      espesores: ["3mm"],
      dimensiones: ["2,75 x 1,22 m", "1,20 x 2,75 m"],
      image: "/Chapadur.webp",
      whatsappLink:
        "https://wa.me/+541139044640?text=Quiero%20comprar%20Placas%20Chapadur%20de%20",
    },
    {
      name: "Terciado",
      description:
        "Disponibles en varios espesores, incluyendo opciones fenólicas, ideales para proyectos de construcción y carpintería. Se venden en hoja entera o fraccionados.",
      espesores: ["3mm", "8mm", "18mm"],
      dimensiones: [
        "2,10 x 1,60 m",
        "2,39 x 1,60 m",
        "2,20 x 1,60 m",
        "2,39 x 1,22 m",
      ],
      image: "/Terciado.webp",
      whatsappLink:
        "https://wa.me/+541139044640?text=Quiero%20comprar%20Terciado%20de%20",
    },
    {
      name: "Fibrofacil",
      description: "Tableros de fibrofacil ideales para proyectos de carpintería y manualidades. Disponibles en varias medidas. Se venden en planchas enteras o fraccionadas.",
      espesores: ["2,60 x 1,83 m"],
      dimensiones: ["3mm", "5mm", "10mm", "12mm", "15mm", "18mm"],
      image: "/Hojas-de-fibrofacil.webp",
      whatsappLink:
        "https://wa.me/+541139044640?text=Quiero%20comprar%20Fibrofacil%20de%20",
    },
    {
      name: "Tablero de Madera de Pino",
      description:
        "Disponibles en varios espesores, ideales para proyectos de carpintería. Se venden fraccionados o en hoja completa (Las dimensiones pueden variar según la partida)",
      espesores: ["10mm", "15mm", "18mm", "23mm"],
      dimensiones: ["1,20 x 3,05 m"],
      image: "/Tablero-de-madera.webp",
      whatsappLink:
        "https://wa.me/+541139044640?text=Quiero%20comprar%20Tablero%20de%20",
    },
    {
      name: "Molduras",
      description: "Molduras de madera disponibles en diferentes estilos y tamaños, perfectas para detalles decorativos. Se venden por metro lineal.",
      espesores: ['1/2"', '3/4"'],
      dimensiones: ["3mm"],
      image: "/Molduras-de-plastico-y-madera.webp",
      whatsappLink:
        "https://wa.me/+541139044640?text=Quiero%20comprar%20Varillas%20de%20",
    },
    {
      name: "Listones",
      description: "Listones de madera, ideales para estructuras y acabados. Disponibles en diversas dimensiones y largos, perfectos para cualquier proyecto.",
      espesores: ['1/2' , '1"' , '1"1/2' , '3/4"' , '2"' , '3"', '4"'],
      dimensiones: ['3m x 1"', '3m x 2"', '3m x 3"', '3m x 4"',],
      image: "/Listones.webp",
      whatsappLink:
        "https://wa.me/+541139044640?text=Quiero%20comprar%20Listonadas%20de%20",
    },
    {
      name: "Machimbre",
      description:
        "Disponible en dos opciones de tamaño, ideal para revestimientos y techos. Se vende en tiras enteras.",
      espesores: ['1/2"'],
      dimensiones: ['1/2" x 4"', '1/2" x 5"'],
      image: "/Machimbre.webp",
      whatsappLink:
        "https://wa.me/+541139044640?text=Quiero%20comprar%20Listonadas%20de%20",
    },
  ];

  const [selectedEspesor, setSelectedEspesor] = useState<{ [key: string]: string }>({});
  const [selectedDimension, setSelectedDimension] = useState<{ [key: string]: string }>({});

  // Función para actualizar el espesor seleccionado
  const handleEspesorClick = (productName: any, espesor: any) => {
    setSelectedEspesor({ ...selectedEspesor, [productName]: espesor });
  };

  // Función para actualizar la dimensión seleccionada
  const handleDimensionClick = (productName: any, dimension: any) => {
    setSelectedDimension({ ...selectedDimension, [productName]: dimension });
  };

  return (
    <>
      <Head>
        <title>Cortes a Medida | Luisi Decoraciones</title>
        <meta
          name="description"
          content="Descubre nuestros cortes a medida en diferentes tipos de madera como chapadur, terciado, fibrofacil y más. Calidad garantizada."
        />
      </Head>
      <Navbar />
      <div className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
            Cortes a Medida
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cortes.map((corte) => (
              <div
                key={corte.name}
                className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <Image
                    src={corte.image}
                    alt={corte.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                    width={500}
                    height={500}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {corte.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{corte.description}</p>

                  {/* Lista de espesores */}
                  <div className="mb-4">
                    <h4 className="text-gray-800 font-semibold">
                      Espesores disponibles:
                    </h4>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {corte.espesores.map((espesor) => (
                        <button
                          key={espesor}
                          onClick={() =>
                            handleEspesorClick(corte.name, espesor)
                          }
                          className={`px-3 py-1 rounded-full border ${
                            selectedEspesor[corte.name] === espesor
                              ? "bg-marron text-white"
                              : "bg-white text-marron border-marron"
                          }`}
                        >
                          {espesor}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Lista de dimensiones */}
                  <div className="mb-4">
                    <h4 className="text-gray-800 font-semibold">
                      Dimensiones disponibles:
                    </h4>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {corte.dimensiones.map((dimension) => (
                        <button
                          key={dimension}
                          onClick={() =>
                            handleDimensionClick(corte.name, dimension)
                          }
                          className={`px-3 py-1 rounded-full border ${
                            selectedDimension[corte.name] === dimension
                              ? "bg-marron text-white"
                              : "bg-white text-marron border-marron"
                          }`}
                        >
                          {dimension}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <a
                    href={`${corte.whatsappLink}${
                      selectedEspesor[corte.name] || ""
                    }${
                      selectedDimension[corte.name]
                        ? `%20y%20de%20${selectedDimension[corte.name]}`
                        : ""
                    }`}
                    className="text-white bg-marron hover:bg-marron-dark px-4 py-2 rounded-lg text-sm font-medium block text-center"
                  >
                    Comprar{" "}
                    {selectedEspesor[corte.name]
                      ? `de ${selectedEspesor[corte.name]}`
                      : ""}
                    {selectedDimension[corte.name]
                      ? ` y dimensión ${selectedDimension[corte.name]}`
                      : ""}
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
