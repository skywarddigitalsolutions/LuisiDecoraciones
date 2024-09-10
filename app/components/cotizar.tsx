"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image'; // Importa el componente Image para la imagen del ícono

export default function Restauracion() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        descripcion: '',
        detalles: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Construir el mensaje de WhatsApp
        const mensaje = `Hola, me gustaría solicitar una cotización para la restauración de un mueble. Aquí están los detalles:\n\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nDescripción del Mueble: ${formData.descripcion}\nDetalles Adicionales: ${formData.detalles}`;

        // Número de teléfono de WhatsApp (reemplaza con el tuyo)
        const numeroWhatsApp: string = '1234567890'; // Incluye el código de país sin signos "+"
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        // Redirigir al usuario a WhatsApp
        window.location.href = urlWhatsApp;
    };

    return (
        <div className="bg-gris min-h-screen py-12 px-6 relative">
            <h2 className="text-crema text-4xl md:text-5xl font-bold text-center mb-6">Restauración de Muebles</h2>
            <p className="text-crema/50 text-lg text-center mb-12">Completa el formulario para recibir una cotización personalizada.</p>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="nombre" className="block text-marron font-semibold mb-2">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full border-gray-300 bg-crema rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-marron font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-gray-300 bg-crema rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="telefono" className="block text-marron font-semibold mb-2">Teléfono</label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full border-gray-300 bg-crema rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="descripcion" className="block text-marron font-semibold mb-2">Descripción del Mueble</label>
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            className="w-full border-gray-300 bg-crema rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="detalles" className="block text-marron font-semibold mb-2">Detalles Adicionales</label>
                        <textarea
                            id="detalles"
                            name="detalles"
                            value={formData.detalles}
                            onChange={handleChange}
                            className="w-full border-gray-300 bg-crema rounded-md shadow-sm"
                            rows={4}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-marron text-beige font-semibold py-3 px-6 rounded-md hover:bg-beige hover:text-marron transition-colors"
                    >
                        Solicitar Cotización
                    </button>
                </form>
            </div>

            {/* Imagen de fondo flotante */}
            <div className="absolute bottom-0 right-0 w-[80%] h-[12vh] lg:h-[35vh] overflow-hidden max-w-full z-0">
    <div className="relative w-full h-full transform translate-x-[35%]"> {/* Aumenté el translate-x a 20% */}
        <Image
            src="/iconcotizar.png"
            alt="Icono de Restauración"
            layout="fill"
            objectFit="contain"
            priority={true}
        />
    </div>
</div>





        </div>
    );
}
