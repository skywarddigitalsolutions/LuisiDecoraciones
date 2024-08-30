"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Cotizar() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        detalles: '',
        medidas: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Construir el mensaje de WhatsApp
        const mensaje = `Hola, me gustaría solicitar una cotización para un corte a medida. Aquí están los detalles:\n\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nMedidas: ${formData.medidas}\nDetalles: ${formData.detalles}`;

        // Número de teléfono de WhatsApp (reemplaza con el tuyo)
        const numeroWhatsApp: string = '1234567890'; // Incluye el código de país sin signos "+"
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        // Redirigir al usuario a WhatsApp
        window.location.href = urlWhatsApp;
    };

    return (
        <div className="bg-gris min-h-screen py-12 px-6">
            <h2 className="text-crema text-4xl md:text-5xl font-bold text-center mb-6">Cotiza tu corte a medida</h2>
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
                        <label htmlFor="medidas" className="block text-marron font-semibold mb-2">Medidas del corte</label>
                        <input
                            type="text"
                            id="medidas"
                            name="medidas"
                            value={formData.medidas}
                            onChange={handleChange}
                            className="w-full border-gray-300 bg-crema rounded-md shadow-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="detalles" className="block text-marron font-semibold mb-2">Detalles adicionales</label>
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
                        Solicitar cotización
                    </button>
                </form>
            </div>
        </div>
    );
}
