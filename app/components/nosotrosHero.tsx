import Image from 'next/image';
import Fondo from '../../public/fondo.webp';
import { CheckBadgeIcon, StarIcon } from '@heroicons/react/24/solid';
import { HiWrenchScrewdriver } from 'react-icons/hi2';

export default function NosotrosHero() {
    return (
        <div className="bg-crema min-h-screen py-12 px-6 relative">
            <h2 className="text-marron text-4xl md:text-5xl font-bold text-center mb-12">Nuestra historia</h2>

            <div className="relative flex flex-col lg:flex-row  lg:justify-between gap-6 lg:gap-12  lg:px-12">
                <div className="relative w-full max-w-md lg:max-w-xl flex-shrink-0 lg:w-1/2">
                    {/* Cuadrado marrón en el fondo */}
                    <div className="absolute inset-0 bg-marron rounded-2xl lg:rounded-lg -z-10"></div>
                    <Image 
                        src={Fondo}
                        alt="Historia"
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-full rounded-2xl lg:rounded-lg"
                    />
                </div>
                <div className="max-w-lg lg:max-w-full text-center lg:text-left lg:flex-1">
                    <p className="text-gray-700 text-lg lg:text-xl">
                        Desde 1936, Luisi Decoraciones ha sido un pilar en el barrio de Monte Castro. Fundada por Luis Luisi, nuestra carpintería comenzó vendiendo materiales usados para la construcción y ha evolucionado hasta convertirse en un referente en cortes de madera a medida y muebles personalizados. Con más de 80 años de experiencia, seguimos comprometidos con la calidad, la dedicación y la atención personalizada, manteniendo vivo el legado de nuestro fundador.
                    </p>
                    
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-36 mt-16 lg:mt-20 lg:px-12 lg:justify-center">
                        <div className="flex lg:flex-col items-center">
                            <div className="text-marron p-4 lg:p-2 rounded-full flex items-center justify-center">
                                <CheckBadgeIcon className="w-8 h-8 lg:w-12 lg:h-12" />
                            </div>
                            <div className='flex lg:flex-col gap-1'>
                                <p className="text-marron text-xl lg:text-2xl text-center font-semibold whitespace-nowrap">+80 AÑOS </p>
                                <p className="text-marron text-xl lg:text-lg text-center font-semibold whitespace-nowrap">EN EL RUBRO</p>
                            </div>
                        </div>
                        <div className="flex lg:flex-col items-center">
                            <div className="text-marron p-4 lg:p-2 rounded-full flex items-center justify-center">
                                <StarIcon className="w-8 h-8 lg:w-12 lg:h-12" />
                            </div>
                            <div className='flex lg:flex-col gap-1'>
                            <p className="text-marron text-xl lg:text-2xl text-center font-semibold">SERVICIO</p>
                            <p className="text-marron text-xl lg:text-lg text-center font-semibold">PERSONALIZADO</p>
                            </div>
                        </div>
                        <div className="flex lg:flex-col items-center ">
                            <div className="text-marron p-4 lg:p-2 rounded-full flex items-center justify-center">
                                <HiWrenchScrewdriver className="w-8 h-8 lg:w-12 lg:h-12" />
                            </div>
                            <div className='flex lg:flex-col gap-1'>
                            <p className="text-marron text-xl lg:text-2xl text-center font-semibold">CORTES</p>
                            <p className="text-marron text-xl lg:text-lg text-center font-semibold">A MEDIDA</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

           
        </div>
    );
}
