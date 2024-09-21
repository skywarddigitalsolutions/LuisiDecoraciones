import Link from "next/link";
import Image from "next/image";

export default function ServiciosHero() {
    return (
        <section className="bg-gris min-h-screen flex flex-col items-center py-12 relative">
            <h2 className="text-crema text-4xl md:text-5xl font-bold text-center pb-12">Servicios</h2>
            <div className="w-full max-w-5xl flex flex-col lg:flex-row lg:gap-8 px-6 mt-12 relative z-10">
                {/* Primer Card */}
                <article className="bg-white shadow-[0_8px_15px_rgba(255,255,255,0.2)] rounded-2xl p-6 flex flex-col justify-between h-96 pt-8 lg:h-auto lg:max-w-xs lg:w-1/3 mb-8 lg:mb-0">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-center text-gris mb-4">Cortes a medida</h3>
                        <p className="text-gray-600 text-center lg:mb-5">
                            Ofrecemos cortes de madera a medida con precisión y cuidado. Trabajamos con una amplia variedad de maderas, 
                            incluyendo pino, MDF, chapadur, terciado y OSB, para adaptarnos a tus necesidades específicas.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/servicios/cortes-a-medida">
                            <button className="bg-marron text-crema font-semibold py-2 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors">
                                Ver más
                            </button>
                        </Link>
                    </div>
                </article>
                {/* Segundo Card */}
                <article className="bg-white shadow-[0_8px_15px_rgba(255,255,255,0.2)] rounded-2xl p-6 flex flex-col justify-between h-96 pt-8 lg:h-auto lg:max-w-xs lg:w-1/3 mb-8 lg:mb-0">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-center text-gris mb-4">Muebles A medida</h3>
                        <p className="text-gray-600 text-center lg:mb-5">
                            Ofrecemos una selección de muebles de pino tanto estándar como personalizados, adaptados a tus gustos y necesidades. 
                            Desde cajoneras y baúles hasta escaleras y muebles infantiles.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/servicios">
                            <button className="bg-marron text-crema font-semibold py-2 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors">
                                Ver más
                            </button>
                        </Link>
                    </div>
                </article>
                {/* Tercer Card */}
                <article className="bg-white shadow-[0_8px_15px_rgba(255,255,255,0.2)] rounded-2xl p-6 flex flex-col justify-between h-96 pt-8 lg:h-auto lg:max-w-xs lg:w-1/3 mb-8 lg:mb-0">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-center text-gris mb-4">Restauración</h3>
                        <p className="text-gray-600 text-center lg:mb-5">
                            Nos especializamos en la reparación y restauración de muebles y estructuras de madera. Sabemos lo importante 
                            que es mantener tus muebles en perfecto estado.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/servicios">
                            <button className="bg-marron text-crema font-semibold py-2 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors">
                                Ver más
                            </button>
                        </Link> 
                    </div>
                </article>
            </div>

            {/* Imagen de fondo flotante con Next.js Image */}
            <div className="absolute bottom-0 left-0 w-[50%] h-[9vh] lg:h-[15vh]">
                <Image
                    src="/iconservicios.png"
                    alt="Cortes a medida"
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                />
            </div>
        </section>
    );
}
