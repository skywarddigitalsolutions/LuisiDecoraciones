"use client";
import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaCheckCircle, FaRuler } from 'react-icons/fa'; // Importing icons from react-icons
import { GiWoodBeam } from 'react-icons/gi';


const productos = [

    {
        id: 1,
        categoria: 'Habitación',
        titulo: 'Mesa de luz con un cajón',
        descripcion: 'Mesa elegante hecha de Madera de pino natural, perfecta para un estilo clásico y funcional en cualquier dormitorio.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,54 x 0,33 x 0,26 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './mesita-cajon.webp',  
    },
    {
        id: 2,
        categoria: 'Habitación',
        titulo: 'Mesa de luz con cajón escandinavo',
        descripcion: 'Mesa de luz moderna de diseño escandinavo, fabricada en madera de pino. Perfecta para espacios con estilo minimalista',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,60 x 0,41 x 0,30 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/mesita-modelo2.webp',  
    
    },
    {
        id: 3,
        categoria: '',
        titulo: 'Mesa de luz con puerta',
        descripcion: 'Mesa funcional de estilo escandinavo, elaborada en madera de pino, ideal para complementar cualquier dormitorio',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,57 x 0,40 x 0,24 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './mesita-con-puerta.webp',  
    },
    {
        id: 4,
        categoria: '',
        titulo: 'Bodega estilo barril',
        descripcion: ' Es para almacenar 5 botelas, esta bodega es perfecta para almacenarlas de manera elegante y organizada',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,55 x 0,36 x 0,22 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './bodega.webp',  
    },
    {
        id: 5,
        categoria: ['Living', 'Baño', 'Cocina', 'Habitación'],
        titulo: 'Ordenador con 3 canastos de plástico',
        descripcion: 'Incluye tres canastos de plástico blanco, ideal para mantener el orden y la organización en cualquier espacio',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: ' 0,49 x 0,31 x 0,79 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './ordenador-canastos.webp',  
    },
    {
        id: 6,
        categoria: 'Baño',
        titulo: 'Vanitori',
        descripcion: 'Mueble práctico con un diseño elegante que cuenta con dos estantes y un cajón, perfecto para optimizar el espacio y mantener todo al alcance en el baño',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: ' 0,83 x 0,40 x 0,34 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/vanitori.webp',  
    },
    {
        id: 7,
        categoria: ["Cocina", "Living", "Baño"],
        titulo: 'Despensero con 2 puertas',
        descripcion: 'Mueble funcional con dos puertas, cada una equipada con dos estantes, además de dos cajones. Ideal para organizar y almacenar alimentos y utensilios en la cocina.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '1,72 x 0,40 x 0,40 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './despensa.webp',  
    },
    {
        id: 8,
        categoria: '',
        titulo: 'Estantería con 2 puertas',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '1,65 x 0,60 x 0,37 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/estanteria.webp',  
    },
    {
        id: 9,
        categoria: '',
        titulo: 'Estanteria estilo verdulero',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '1,20 x 0,40 x 0,34 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './estanteria-verdulero.webp',  
    },
    {
        id: 10,
        categoria: 'Baño',
        titulo: 'Estanteria con 5 estantes',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '1,80 x 0,40 x 0,40 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/estanteria-estantes.webp',  
    },
    {
        id: 10,
        categoria: '',
        titulo: 'Baules',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'Distintas medidas' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './baul.webp',  
    },
    {
        id: 11,
        categoria: '',
        titulo: 'Silla de niños',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,30 x 0,27 x 0,26 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/silla-niños-madera.webp',  
    },
    {
        id: 12,
        categoria: '',
        titulo: 'Banco de madera',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'Distintos tamaños' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './banco-madera.webp',  
    },
    {
        id: 13,
        categoria: '',
        titulo: 'Silla para niños Tapizada',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,27 x 0,37 x 0,30 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/silla-niños.webp',  
    },
    {
        id: 14,
        categoria: '',
        titulo: 'Banco escalera',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,80 o 0,60 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './banco-escalera.webp',  
    },
    {
        id: 15,
        categoria: '',
        titulo: 'Mesa multifuncional escandinava',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/mesa-multifuncion.webp',  
    },
    {
        id: 16,
        categoria: '',
        titulo: 'Atriles',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'Distintas medidas' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './atriles.webp',  
    },
    {
        id: 17,
        categoria: '',
        titulo: 'Porta lámparas',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,30 x 0,30 x 0,30 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/porta-lamparas.webp',  
    },
    {
        id: 18,
        categoria: '',
        titulo: 'Canasto de madera',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,26 x 0,44 x 0,27 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './atriles.webp',  
    },
    {
        id: 19,
        categoria: '',
        titulo: 'Bandeja rústica con manijas',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,28 x 0,40 x 0,02 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/bandeja-rustica.webp',  
    },
    {
        id: 20,
        categoria: '',
        titulo: 'Dresuar de madera',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,61 x 0,68 x 0,15 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './dresuar.webp',  
    },
    {
        id: 21,
        categoria: '',
        titulo: 'Soporte para estantes',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'A medida' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/soporte-estantes.webp',  
    },
    {
        id: 22,
        categoria: '',
        titulo: 'Mesa ratona',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,42 x 0,69 x 0,45 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './mesa-ratona.webp',  
    },
    {
        id: 23,
        categoria: '',
        titulo: 'Verdulero con canastos',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '1,20 x 0,60 x 0,36 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/verdulero.webp',  
    },
    {
        id: 24,
        categoria: '',
        titulo: 'Mesita porta mate',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,36 x 0,60 x 0,40 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './mesa-mate.webp',  
    },
    {
        id: 25,
        categoria: '',
        titulo: 'Tabla picada',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/tabla-picada.webp',  
    },
    {
        id: 26,
        categoria: '',
        titulo: 'Canasto de plástico',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,20 x 0,40 x 0,28 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './canasto-negro.webp',  
    },
    {
        id: 27,
        categoria: '',
        titulo: 'Juego de mesa y silla para niños',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './sillas-mesa.webp',  
    },
    {
        id: 28,
        categoria: '',
        titulo: 'Porta bebe',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './porta-bebe.webp',  
    },
    {
        id: 29,
        categoria: '',
        titulo: 'Divisor de ambientes',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: 'A pedido' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './divisor.webp',  
    },
    {
        id: 30,
        categoria: '',
        titulo: 'Juego de Ta Te Ti',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '0,24 x 0,24 x 0,015 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './jueguito.webp',  
    },
    {
        id: 31,
        categoria: '',
        titulo: 'Recibidor 8 percheros',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '1,82 x 0,80 x 0,32 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/recibidor-perchero.webp',  
    },
    {
        id: 32,
        categoria: '',
        titulo: 'Mesa quesera',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '1 x 0,40 x 0,80 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './mesa-quesera.webp',  
    },
    {
        id: 33,
        categoria: '',
        titulo: 'Perchero plegable',
        descripcion: 'Estantería moderna hecha de Madera de pino.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '1,80 x 0,80 x 0,40 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: '/perchero-plegable.webp',  
    },
    {
        id: 34,
        categoria: '',
        titulo: 'Perchero para pared escandinavo',
        descripcion: 'Mesa elegante hecha de Madera de pino natural.',
        caracteristicas: [
            { icono: <FaRuler className="w-8 h-8 text-marron" />, texto: '1,80 x 0,60 m' },
            { icono: <GiWoodBeam className="w-8 h-8 text-marron" />, texto: 'Madera de pino' },
        ],
        imagen: './perchero-pared.webp',  
    },

    
];

export default function Productos() {
    const [filtro, setFiltro] = useState('Todos');

    const handleFiltroChange = (categoria: string) => {
        setFiltro(categoria);
    };

    const productosFiltrados = productos.filter(producto =>
        filtro === 'Todos' || producto.categoria.includes(filtro)
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
                <button onClick={() => handleFiltroChange('Living')} className={`px-4 py-2 mx-2 rounded-md ${filtro === 'Living' ? 'bg-marron text-beige' : 'bg-beige text-marron'}`}>
                    Living
                </button>
                <button onClick={() => handleFiltroChange('Habitación')} className={`px-4 py-2 mx-2 rounded-md ${filtro === 'Habitación' ? 'bg-marron text-beige' : 'bg-beige text-marron'}`}>
                    Habitación
                </button>
                <button onClick={() => handleFiltroChange('Cocina')} className={`px-4 py-2 mx-2 rounded-md ${filtro === 'Cocina' ? 'bg-marron text-beige' : 'bg-beige text-marron'}`}>
                    Cocina
                </button>
                <button onClick={() => handleFiltroChange('Baño')} className={`px-4 py-2 mx-2 rounded-md ${filtro === 'Baño' ? 'bg-marron text-beige' : 'bg-beige text-marron'}`}>
                    Baño
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {productosFiltrados.map((producto) => (
                    <div key={producto.id} className="bg-white p-6 rounded-2xl shadow-lg">
                        <img src={producto.imagen} alt={producto.titulo} className="w-full h-96 object-cover rounded-md mb-4" />
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
                            href={`https://wa.me/+541151742249?text=${encodeURIComponent(`Hola, estoy interesado en el producto: ${producto.titulo}`)}`}
                            className="bg-marron text-beige font-semibold py-3 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors"
                            target="_blank" 
                            rel="noopener noreferrer" 
                        >
                            Comprar
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </>
    );
}
