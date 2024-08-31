"use client";
import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaCheckCircle, FaRuler } from 'react-icons/fa'; // Importing icons from react-icons

const productos = [
    {
        id: 1,
        categoria: 'Madera',
        titulo: 'Mesa de Roble',
        descripcion: 'Mesa elegante hecha de roble natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '200x100 cm' },
            { icono: <FaCheckCircle className="w-8 h-8 text-marron" />, texto: 'Roble' },
        ],
        imagen: '/path/to/image.jpg',  // Reemplaza con la ruta correcta
        whatsapp: '1234567890',
    },
    {
        id: 2,
        categoria: 'Fibrofácil',
        titulo: 'Estantería Minimalista',
        descripcion: 'Estantería moderna hecha de fibrofácil.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '180x80 cm' },
            { icono: <FaCheckCircle className="w-8 h-8 text-marron" />, texto: 'Fibrofácil' },
        ],
        imagen: '/path/to/image.jpg',  // Reemplaza con la ruta correcta
        whatsapp: '1234567890',
    },
    // Otros productos...
];

export default function Productos() {
    const [filtro, setFiltro] = useState('Todos');

    const handleFiltroChange = (categoria: string) => {
        setFiltro(categoria);
    };

    const productosFiltrados = productos.filter(producto =>
        filtro === 'Todos' || producto.categoria === filtro
    );

    return (
        <>
        <Navbar />
        <div className="bg-crema min-h-screen py-32 px-6">
            <h2 className="text-marron text-4xl md:text-5xl font-bold text-center mb-6">Nuestros Productos</h2>
            <p className="text-marron/70 text-lg text-center mb-12">Explora nuestra selección de productos de alta calidad.</p>

            <div className="flex justify-center mb-8">
                <button onClick={() => handleFiltroChange('Todos')} className={`px-4 py-2 mx-2 rounded-md ${filtro === 'Todos' ? 'bg-marron text-beige' : 'bg-beige text-marron'}`}>
                    Todos
                </button>
                <button onClick={() => handleFiltroChange('Madera')} className={`px-4 py-2 mx-2 rounded-md ${filtro === 'Madera' ? 'bg-marron text-beige' : 'bg-beige text-marron'}`}>
                    Madera
                </button>
                <button onClick={() => handleFiltroChange('Fibrofácil')} className={`px-4 py-2 mx-2 rounded-md ${filtro === 'Fibrofácil' ? 'bg-marron text-beige' : 'bg-beige text-marron'}`}>
                    Fibrofácil
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {productosFiltrados.map((producto) => (
                    <div key={producto.id} className="bg-white p-6 rounded-2xl shadow-lg">
                        <img src={producto.imagen} alt={producto.titulo} className="w-full h-64 object-cover rounded-md mb-4" />
                        <h3 className="text-marron text-2xl font-bold mb-2">{producto.titulo}</h3>
                        <p className="text-marron/70 mb-4">{producto.descripcion}</p>
                        <div className="text-marron mb-6 grid grid-cols-2 gap-4">
                            {producto.caracteristicas.map((caracteristica, index) => (
                                <div key={index} className="flex flex-col mt-2">
                                    {caracteristica.icono}
                                    <p className="mt-2">{caracteristica.texto}</p>
                                </div>
                            ))}
                        </div>
                        <a
                            href={`https://wa.me/${producto.whatsapp}?text=${encodeURIComponent(`Hola, estoy interesado en comprar el producto: ${producto.titulo}`)}`}
                            className="bg-marron text-beige font-semibold py-3 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors"
                        >
                            Comprar
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}
