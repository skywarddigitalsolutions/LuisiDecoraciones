"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { productos } from "./products";
import Image from "next/image";
import { FiltroBoton } from "../components/FiltroBoton";

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

  const filtros = ['Todos', 'Living', 'Habitación', 'Cocina', 'Baño'];

  return (
    <>
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
              className="bg-white p-6 rounded-2xl shadow-lg"
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
              <p className="text-marron/70 mb-4">{producto.descripcion}</p>
              <div className="text-marron mb-6 grid grid-cols-2 gap-4">
                {producto.caracteristicas.map((caracteristica, index) => (
                  <div key={index} className="flex flex-col mt-2">
                    {caracteristica.icono}
                    <p className="mt-2">{caracteristica.texto}</p>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/+541151742249?text=${encodeURIComponent(
                  `Hola, estoy interesado en el producto: ${producto.titulo}`
                )}`}
                className="bg-marron text-beige font-semibold py-3 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
