"use client";
import Image from 'next/image';
import Slider from 'react-slick';
import Local1 from '../../public/fototaller1.webp'; 
import Local2 from '../../public/fototaller2.webp';
import Local3 from '../../public/fototaller3.webp';
import Local4 from '../../public/fototaller4.webp'; 
import Local5 from '../../public/fototaller5.webp';
import Local6 from '../../public/fototaller6.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function NuestroLocal() {
    // Configuración del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="bg-crema min-h-[80vh] py-12 px-6">
            <h2 className="text-marron text-4xl md:text-5xl font-bold text-center mb-8">Nuestro local</h2>

            {/* Carrusel en móviles */}
            <div className="block lg:hidden pt-12">
                <Slider {...settings}>
                    <div className="relative w-full h-96">
                        <Image 
                            src={Local1} 
                            alt="Foto del local 1" 
                            layout="fill" 
                            className="object-cover rounded-lg" 
                        />
                    </div>
                    <div className="relative w-full h-96">
                        <Image 
                            src={Local2} 
                            alt="Foto del local 2" 
                            layout="fill" 
                            className="object-cover rounded-lg" 
                        />
                    </div>
                    <div className="relative w-full h-96">
                        <Image 
                            src={Local3} 
                            alt="Foto del local 3" 
                            layout="fill" 
                            className="object-cover rounded-lg" 
                        />
                    </div>
                    <div className="relative w-full h-96">
                        <Image 
                            src={Local4} 
                            alt="Foto del local 4" 
                            layout="fill" 
                            className="object-cover rounded-lg" 
                        />
                    </div>
                    <div className="relative w-full h-96">
                        <Image 
                            src={Local5} 
                            alt="Foto del local 5" 
                            layout="fill" 
                            className="object-cover rounded-lg" 
                        />
                    </div>
                    <div className="relative w-full h-96">
                        <Image 
                            src={Local6} 
                            alt="Foto del local 6" 
                            layout="fill" 
                            className="object-cover rounded-lg" 
                        />
                    </div>
                    {/* Añade más imágenes aquí */}
                </Slider>
            </div>

            {/* Grid en pantallas grandes */}
            <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="relative w-full h-96">
                    <Image 
                        src={Local1} 
                        alt="Foto del local 1" 
                        layout="fill" 
                        className="object-cover rounded-lg" 
                    />
                </div>
                <div className="relative w-full h-96">
                    <Image 
                        src={Local2} 
                        alt="Foto del local 2" 
                        layout="fill" 
                        className="object-cover rounded-lg" 
                    />
                </div>
                <div className="relative w-full h-96">
                    <Image 
                        src={Local3} 
                        alt="Foto del local 3" 
                        layout="fill" 
                        className="object-cover rounded-lg" 
                    />
                </div>
                <div className="relative w-full h-96">
                    <Image 
                        src={Local4} 
                        alt="Foto del local 4" 
                        layout="fill" 
                        className="object-cover rounded-lg" 
                    />
                </div>
                <div className="relative w-full h-96">
                        <Image 
                            src={Local5} 
                            alt="Foto del local 5" 
                            layout="fill" 
                            className="object-cover rounded-lg" 
                        />
                    </div>
                    <div className="relative w-full h-96">
                        <Image 
                            src={Local6} 
                            alt="Foto del local 6" 
                            layout="fill" 
                            className="object-cover rounded-lg" 
                        />
                    </div>
                {/* Añade más imágenes aquí */}
            </div>
            
        </div>
    );
}
