import Image from 'next/image';
import Fondo from '../../public/fondo.webp';
import { CheckBadgeIcon, StarIcon, ChartBarIcon } from '@heroicons/react/24/solid';

export default function NosotrosHero() {
    return (
        <div className="bg-crema min-h-screen py-12 px-6 relative">
            <h2 className="text-marron text-4xl md:text-5xl font-bold text-center mb-12">Nuestra historia</h2>

            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="relative w-full max-w-xs">
                    {/* Cuadrado marrón en el fondo */}
                    <div className="absolute inset-0 bg-marron rounded-2xl -z-10"></div>
                    <Image 
                        src={Fondo}
                        alt="Historia"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full rounded-2xl"
                    />
                </div>
                <div className="max-w-lg text-center lg:text-left">
                    <p className="text-gray-700 text-lg">
                        Desde 1936, Luisi Decoraciones ha sido un pilar en el barrio de Monte Castro. Fundada por Luis Luisi, nuestra carpintería comenzó vendiendo materiales usados para la construcción y ha evolucionado hasta convertirse en un referente en cortes de madera a medida y muebles personalizados. Con más de 80 años de experiencia, seguimos comprometidos con la calidad, la dedicación y la atención personalizada, manteniendo vivo el legado de nuestro fundador.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-12">
                <div className="flex items-center gap-4">
                    <div className="text-marron p-4 rounded-full flex items-center justify-center">
                        <CheckBadgeIcon className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-gray-700 text-xl font-semibold">+80 años en el rubro</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-marron p-4 rounded-full flex items-center justify-center">
                        <StarIcon className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-gray-700 text-xl font-semibold">Servicio personalizado</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-marron p-4 rounded-full flex items-center justify-center">
                        <ChartBarIcon className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-gray-700 text-xl font-semibold">Calidad garantizada</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
