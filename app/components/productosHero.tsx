import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Link from 'next/link';

// Lista de productos destacados
const productos = [
    {
        id: 1,
        nombre: 'Mesa de Pino',
        imagen: '/estanteria-estantes.webp',  // Asegúrate de tener la imagen en esta ruta
        descripcion: 'Mesa hecha con madera de pino de alta calidad',
        medidas: '120cm x 80cm x 75cm',
        material: 'Madera de Pino',
    },
    {
        id: 2,
        nombre: 'Silla de Madera',
        imagen: '/productos/silla-madera.jpg',
        descripcion: 'Silla robusta con respaldo alto, ideal para comedor',
        medidas: '45cm x 45cm x 90cm',
        material: 'Madera de Roble',
    },
    {
        id: 3,
        nombre: 'Estante de Roble',
        imagen: '/productos/estante-roble.jpg',
        descripcion: 'Estante elegante para libros o decoración',
        medidas: '200cm x 60cm x 30cm',
        material: 'Madera de Roble',
    },
    {
        id: 1,
        nombre: 'Mesa de Pino',
        imagen: '/estanteria-estantes.webp',  // Asegúrate de tener la imagen en esta ruta
        descripcion: 'Mesa hecha con madera de pino de alta calidad',
        medidas: '120cm x 80cm x 75cm',
        material: 'Madera de Pino',
    },
    {
        id: 2,
        nombre: 'Silla de Madera',
        imagen: '/productos/silla-madera.jpg',
        descripcion: 'Silla robusta con respaldo alto, ideal para comedor',
        medidas: '45cm x 45cm x 90cm',
        material: 'Madera de Roble',
    },
    {
        id: 3,
        nombre: 'Estante de Roble',
        imagen: '/productos/estante-roble.jpg',
        descripcion: 'Estante elegante para libros o decoración',
        medidas: '200cm x 60cm x 30cm',
        material: 'Madera de Roble',
    },
    // Puedes agregar más productos aquí
];

export default function ProductosHero() {
    return (
        <div className="bg-gris min-h-screen py-12 px-6">
            {/* Encabezado de la sección */}
            <h2 className="text-crema text-4xl md:text-5xl font-bold text-center mb-6">Productos</h2>
            <p className="text-crema text-lg text-center mb-12">¿Qué estás buscando?</p>

            {/* Carrusel de productos destacados con efecto 3D optimizado */}
            <div className="max-w-5xl mx-auto">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}  
                    spaceBetween={40}  
                    coverflowEffect={{
                        rotate: -20,       // Invertimos la rotación para que gire "hacia afuera"
                        stretch: 0,        // No estirar los slides
                        depth: 200,        // Ajustar profundidad para mejor efecto 3D
                        modifier: 1,       // Intensidad del efecto
                        slideShadows: false,  // Sin sombras para que no se oscurezcan
                    }}
                    breakpoints={{
                        640: {  // Para pantallas más pequeñas (mobile)
                            slidesPerView: 1.2,  // Mostrar solo un poco de los productos laterales
                            spaceBetween: -30,   // Menor superposición en mobile
                        },
                        1024: {  // Para pantallas más grandes (desktop)
                            slidesPerView: 3,    // Mostrar 3 productos en desktop
                        },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="w-full max-w-7xl mx-auto"
                >
                    {productos.map((producto) => (
                        <SwiperSlide key={producto.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <Image
                                src={producto.imagen}
                                alt={producto.nombre}
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-2xl font-semibold text-marron">{producto.nombre}</h3>
                                <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                                <p className="text-gray-600 mt-1">Medidas: {producto.medidas}</p>
                                <p className="text-gray-600 mt-1">Material: {producto.material}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Botón "Ver todo" */}
            <div className="mt-12 text-center flex justify-center">
                <Link href="/productos">
                    <div className="bg-marron text-crema w-screen lg:w-80 py-3 px-8 rounded-full text-lg hover:bg-beige hover:text-marron transition-colors duration-300">
                        Ver todos los productos
                    </div>
                </Link>
            </div>
        </div>
    );
}
