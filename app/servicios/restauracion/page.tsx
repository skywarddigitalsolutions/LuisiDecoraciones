"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Head from 'next/head';
export default function Restauracion() {
    const [formData, setFormData] = useState({
        nombre: '',
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
        const mensaje = `Hola, me gustaría solicitar una cotización para la restauración de un mueble. Aquí están los detalles:\n\nNombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nDescripción del Mueble: ${formData.descripcion}\nDetalles Adicionales: ${formData.detalles}`;

        // Número de teléfono de WhatsApp (reemplaza con el tuyo)
        const numeroWhatsApp: string = '+541151742249'; // Incluye el código de país sin signos "+"
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        // Redirigir al usuario a WhatsApp
        window.location.href = urlWhatsApp;
    };

    return (
        <>
             <Head>
                <title>Restauración de Muebles | Luisi Decoraciones</title>
                <meta
                    name="description"
                    content="Especialistas en la reparación y restauración de muebles y estructuras de madera. Mantén tus muebles en perfecto estado con nuestro servicio de restauración."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <div className="bg-crema min-h-screen py-12 px-6">
                <h2 className="text-marron text-4xl md:text-5xl font-bold text-center mb-6 pt-24">Restauración de Muebles</h2>
                <p className="text-marron/70 text-lg text-center mb-12 mx-auto lg:mx-24">
                    Nos especializamos en la reparación y restauración de muebles y estructuras de madera. Sabemos lo importante que es mantener tus muebles en perfecto estado.
                </p>

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
                            <label htmlFor="descripcion" className="block text-marron font-semibold mb-2">¿Qué hay que arreglar?</label>
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
            </div>
            <Footer />
        </>
    );
}
