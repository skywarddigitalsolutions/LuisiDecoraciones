"use client";
import Image from "next/image";
import { productos } from "../products";
import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const producto = productos.find(
    (p) =>
      p.titulo
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g, "-") === params.slug
  );

  const [cantidad, setCantidad] = useState(1);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  // Función para actualizar la cantidad desde el input
  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevaCantidad = Math.max(1, Number(e.target.value));
    setCantidad(nuevaCantidad);
  };

  // Mensaje preestablecido de WhatsApp
  const mensajeWhatsapp = `Hola, estoy interesado en el producto ${producto.titulo} y me gustaría comprar ${cantidad} unidades.`;

  // Función para obtener productos aleatorios
  const obtenerProductosAleatorios = (cantidad: number) => {
    const productosAleatorios = [];
    const indices = new Set();

    while (productosAleatorios.length < cantidad) {
      const indexAleatorio = Math.floor(Math.random() * productos.length);
      if (!indices.has(indexAleatorio) && productos[indexAleatorio].id !== producto.id) {
        indices.add(indexAleatorio);
        productosAleatorios.push(productos[indexAleatorio]);
      }
    }

    return productosAleatorios;
  };

  const productosRecomendados = obtenerProductosAleatorios(3); // Cambia el número según necesites

  return (
    <>
      <Navbar />
      <div className="bg-crema h-full pt-32 pb-10 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Imagen del producto */}
            <div className="flex-shrink-0">
              <Image
                src={producto.imagen}
                alt={producto.titulo}
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>

            {/* Información del producto */}
            <div className="flex-grow">
              <h1 className="text-4xl font-bold text-marron mb-4">
                {producto.titulo}
              </h1>
              <p className="text-marron/70 text-lg mb-6">
                {producto.descripcion}
              </p>
              <h2 className="text-xl font-semibold text-marron mb-4">
                Medidas:
              </h2>
              <div className="text-marron mb-4 grid grid-cols-4 gap-4">
                {producto.caracteristicas.map((caracteristica, index) => (
                  <div
                    key={Number(index)}
                    className="flex flex-col items-center"
                  >
                    {caracteristica.icono}
                    <p className="text-center">{caracteristica.texto}</p>
                  </div>
                ))}
              </div>

              {/* Cantidad de producto */}
              <div className="mb-8">
                <label
                  htmlFor="cantidad"
                  className="block text-marron text-lg font-semibold mb-2"
                >
                  Cantidad:
                </label>
                <div className="flex items-center space-x-4">
                  {/* Botón para disminuir la cantidad */}
                  <button
                    type="button"
                    onClick={() => setCantidad((prev) => Math.max(1, prev - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-marron hover:bg-beige hover:text-marron text-lg font-bold rounded-md"
                  >
                    -
                  </button>

                  {/* Input para mostrar la cantidad */}
                  <input
                    id="cantidad"
                    type="number"
                    value={cantidad}
                    min="1"
                    onChange={handleCantidadChange}
                    className="w-16 text-center p-2 border border-gray-300 rounded-md text-marron"
                  />

                  {/* Botón para aumentar la cantidad */}
                  <button
                    type="button"
                    onClick={() => setCantidad((prev) => prev + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-marron hover:bg-beige hover:text-marron text-lg font-bold rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Botón de WhatsApp */}
              <a
                href={`https://wa.me/541151742249?text=${encodeURIComponent(
                  mensajeWhatsapp
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-marron text-beige text-lg font-bold py-3 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors"
              >
                Comprar
              </a>
            </div>
          </div>
        </div>

        {/* Sección de Productos Recomendados */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-marron mb-4">Productos Recomendados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosRecomendados.map((recomendado) => (
              <div
                key={recomendado.id}
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full"
              >
                <Image
                  src={recomendado.imagen}
                  alt={recomendado.titulo}
                  className="object-cover rounded-md mb-4"
                  width={500}
                  height={500}
                />
                <h3 className="text-marron text-2xl font-bold mb-2">
                  {recomendado.titulo}
                </h3>
                <p className="text-marron/70 mb-4 flex-grow">
                  {recomendado.descripcion}
                </p>
                <Link
                  href={`/productos/${recomendado.titulo
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/ /g, "-")}`}
                  className="bg-marron text-beige p-4 rounded-md hover:bg-beige hover:text-marron text-center"
                >
                  Ver más
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
