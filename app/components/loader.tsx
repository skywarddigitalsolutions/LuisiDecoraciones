import "./loader.css"

export default function Loader() {
    return(
        <>
            <div className="card h-screen flex justify-center items-center">
                <div className="loader h-[40px] text-[25px] lg:h-[80px] lg:text-[50px] ">
                    <p className="mr-2">Cargando</p>
                    <div className="words">
                    <span className="word">Muebles</span>
                    <span className="word">Maderas</span>
                    <span className="word">Herramientas</span>
                    <span className="word">Muebles</span>
                    <span className="word">Maderas</span>
                    </div>
                </div>
                </div>

        </>
    );
}