"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { productos } from "./products";
import Image from "next/image";
import { FiltroBoton } from "../components/FiltroBoton";
import BtnScrollTop from "../components/BtnScrollTop";
import Head from "next/head";

export default function Productos() {
  const [filtro, setFiltro] = useState("Todos");

  const handleFiltroChange = (categoria: string) => {
    setFiltro(categoria);
  };

  const productosFiltrados = productos.filter(
    (producto) =>
      filtro === "Todos" ||
      producto.categoria === filtro ||
      producto.categoria.includes(filtro)
  );

  const filtros = ["Todos", "Living", "Habitación", "Cocina", "Baño"];

  return (
    <>
      <Head>
        <title>Productos de Carpintería | Luisi Decoraciones</title>
        <meta 
          name="description" 
          content="Descubre una amplia variedad de productos de carpintería de alta calidad en Luisi Decoraciones. Ofrecemos cortes a medida, maderas, muebles personalizados y mucho más en Monte Castro." 
        />
      </Head>
      <Navbar />
      <div className="bg-crema min-h-screen py-32 px-6">
        <h2 className="text-marron text-4xl md:text-5xl font-bold text-center mb-6">
          Nuestros Productos
        </h2>
        <p className="text-marron/70 text-lg text-center mb-6">
          Explora nuestra selección de productos de alta calidad.
        </p>

        <div className="flex flex-wrap justify-center items-start md:items-center gap-4 mb-6">
          {filtros.map((f) => (
            <FiltroBoton
              key={f}
              label={f}
              isActive={filtro === f}
              onClick={() => handleFiltroChange(f)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full"
            >
              <Image
                src={producto.imagen}
                alt={producto.titulo}
                className="object-cover rounded-md mb-4"
                width={500}
                height={500}
              />
              <h3 className="text-marron text-2xl font-bold mb-2">
                {producto.titulo}
              </h3>
              <p className="text-marron/70 mb-4 flex-grow">
                {producto.descripcion}
              </p>
              <div className="text-marron mb-8 grid grid-cols-4 gap-4">
                {producto.caracteristicas.map((caracteristica, index) => (
                  <div
                    key={Number(index)}
                    className="flex flex-col items-center"
                  >
                    {caracteristica.icono}
                    <p className="mt-2 text-center">{caracteristica.texto}</p>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/+541151742249?text=${encodeURIComponent(
                  `Hola, estoy interesado en el producto: ${producto.titulo}`
                )}`}
                className="bg-marron text-beige text-center font-semibold py-3 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors lg:w-40 "
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </a>
            </div>
          ))}
        </div>
      </div>
      <BtnScrollTop />
      <Footer />
    </>
  );
}
