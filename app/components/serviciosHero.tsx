export default function ServiciosHero() {
    return (
        <div className="bg-gris min-h-screen flex flex-col items-center py-12">
            <h2 className="text-beige text-4xl md:text-5xl font-bold text-center pb-12">Servicios</h2>
            <div className="w-full max-w-5xl flex flex-col lg:flex-row lg:gap-8 px-6">
                <div className="bg-white shadow-[0_8px_15px_rgba(255,255,255,0.2)] rounded-2xl p-6 flex flex-col justify-between h-96 pt-8 lg:h-auto lg:max-w-xs lg:w-1/3 mb-8 lg:mb-0">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-center text-gris mb-4">Cortes a medida</h3>
                        <p className="text-gray-600 text-center">
                            Ofrecemos cortes de madera a medida con precisión y cuidado. Trabajamos con una amplia variedad de maderas, 
                            incluyendo pino, MDF, chapadur, terciado y OSB, para adaptarnos a tus necesidades específicas.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-marron text-beige font-semibold py-2 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors">
                            Ver más
                        </button>
                    </div>
                </div>
                <div className="bg-white shadow-[0_8px_15px_rgba(255,255,255,0.2)] rounded-2xl p-6 flex flex-col justify-between h-96 pt-8 lg:h-auto lg:max-w-xs lg:w-1/3 mb-8 lg:mb-0">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-center text-gris mb-4">Piezas terminadas</h3>
                        <p className="text-gray-600 text-center">
                            Ofrecemos una selección de muebles de pino tanto estándar como personalizados, adaptados a tus gustos y necesidades. 
                            Desde cajoneras y baúles hasta escaleras y muebles infantiles.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-marron text-beige font-semibold py-2 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors">
                            Ver más
                        </button>
                    </div>
                </div>
                <div className="bg-white shadow-[0_8px_15px_rgba(255,255,255,0.2)] rounded-2xl p-6 flex flex-col justify-between h-96 pt-8 lg:h-auto lg:max-w-xs lg:w-1/3 mb-8 lg:mb-0">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-center text-gris mb-4">Restauración</h3>
                        <p className="text-gray-600 text-center ">
                            Nos especializamos en la reparación y restauración de muebles y estructuras de madera. Sabemos lo importante 
                            que es mantener tus muebles en perfecto estado.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-marron text-beige font-semibold py-2 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
