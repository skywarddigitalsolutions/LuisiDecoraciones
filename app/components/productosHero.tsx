import Image from 'next/image';
import Producto from '../../public/producto.jpg';

export default function ProductosHero() {
    return (
        <div className="bg-gris min-h-screen lg:min-h-[70vh] py-12 px-6">
            <h2 className="text-crema text-4xl md:text-5xl font-bold text-center mb-6">Productos</h2>
            <p className="text-crema text-lg text-center mb-12">¿Qué estás buscando?</p>

            <div className="flex flex-col gap-8 lg:gap-12 lg:flex-row lg:justify-center lg:mt-12">
                <div className="relative w-full max-w-xs lg:max-w-lg h-[300px] lg:h-[450px] mx-auto">
                    <div className="absolute inset-0 bg-black rounded-2xl"></div>
                    <Image 
                        src={Producto}
                        alt="Producto 1"
                        layout="fill"
                        className="object-cover w-full h-full rounded-2xl opacity-40"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                        <h3 className="text-crema text-2xl font-semibold mb-4">Producto 1</h3>
                        <button className="bg-marron text-crema font-semibold py-2 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors">
                            Ver más
                        </button>
                    </div>
                </div>

                <div className="relative w-full max-w-xs lg:max-w-lg h-[300px] lg:h-[450px] mx-auto">
                    <div className="absolute inset-0 bg-black rounded-2xl"></div>
                    <Image 
                        src={Producto}
                        alt="Producto 2"
                        layout="fill"
                        className="object-cover w-full h-full rounded-2xl opacity-40"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                        <h3 className="text-crema text-2xl font-semibold mb-4">Producto 2</h3>
                        <button className="bg-marron text-crema font-semibold py-2 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors">
                            Ver más
                        </button>
                    </div>
                </div>

                <div className="relative w-full max-w-xs lg:max-w-lg h-[300px] lg:h-[450px] mx-auto">
                    <div className="absolute inset-0 bg-black rounded-2xl"></div>
                    <Image 
                        src={Producto}
                        alt="Producto 3"
                        layout="fill"
                        className="object-cover w-full h-full rounded-2xl opacity-40"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                        <h3 className="text-crema text-2xl font-semibold mb-4">Producto 3</h3>
                        <button className="bg-marron text-crema font-semibold py-2 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
