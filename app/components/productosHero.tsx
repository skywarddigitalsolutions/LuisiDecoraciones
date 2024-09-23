import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import { productos } from "../productos/products";
import "@/app/globals.css"
export default function ProductosHero() {
  return (
    <div className="relative bg-gris min-h-screen lg:min-h-[70vh] py-12 px-6">
      {/* Efecto de desvanecimiento a los costados */}
      <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-gris via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-gris via-transparent to-transparent z-10 pointer-events-none" />

      <h2 className="text-crema text-4xl md:text-5xl font-bold text-center mb-6">
        Productos
      </h2>
      <p className="text-crema text-lg text-center mb-12">
        ¿Qué estás buscando?
      </p>

      <div className="max-w-5xl mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} 
          spaceBetween={50}
          coverflowEffect={{
            rotate: -20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.5, /* Ajuste para pantallas más grandes */
              spaceBetween: 60,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full max-w-4xl mx-auto"
        >
          {productos.map((producto) => (
            <SwiperSlide
              key={producto.id}
              className="bg-white min-h-96 p-6 rounded-lg shadow-lg"
            >
              <Image
                src={producto.imagen}
                alt={producto.titulo}
                width={500}
                height={500}
                className="w-full h-auto object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl mt-8 font-semibold text-marron">
                  {producto.titulo}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-12 text-center flex justify-center">
        <Link href="/productos">
          <div className="bg-marron text-crema w-80 py-3 px-8 rounded-full text-lg hover:bg-beige hover:text-marron transition-colors duration-300">
            Ver todos los productos
          </div>
        </Link>
      </div>
    </div>
  );
}
