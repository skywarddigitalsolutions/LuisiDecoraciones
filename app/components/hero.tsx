import Image from "next/image";
import Fondo from "../../public/fondo.webp"
import "./hero.css"
export default function Hero() {
    return(
        <div className=" h-[90vh] lg:min-h-screen relative flex flex-col justify-center items-center ">
            <div className="absolute inset-0 bg-black">
                <Image
            src={Fondo}
            alt="Fondo"
            className="w-full h-full object-cover opacity-50"/>
            </div>
            <div className="relative flex flex-col justify-center items-center">
                <h1 className="text-beige font-bold text-4xl text-center mb-8">Construimos tus sueños en madera </h1>
                <h2 className="text-crema text-xl text-center mb-5"> Escribinos para cotizar tu pedido</h2>
                <div>
                <button className="btn-53">
                    <div className="original">Cotizar</div>
                    <div className="letters ">
                        
                        <span>C</span>
                        <span>O</span>
                        <span>T</span>
                        <span>I</span>
                        <span>Z</span>
                        <span>A</span>
                        <span>R</span>
                    </div>
                </button>
                </div>
            </div>
        </div>
    );
}