"use client"

import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ServiciosHero from "./components/serviciosHero";
import NosotrosHero from "./components/nosotrosHero";
import ProductosHero from "./components/productosHero";
import Cotizar from "./components/cotizar";
import NuestroLocal from "./components/nuestrolocal";
import Footer from "./components/footer";
import Loader from "./components/loader";
import { useEffect,useState } from "react";
import Head from "next/head";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1100);
  }, []);
  return (
    <>
     {" "}
      {!loaded && <Loader />}
      {loaded && (
        <div>
           <Head>
                <title>Luisi Decoraciones - Cortes a Medida</title>
                <meta name="description" content="Muebles personalizados a medida para tu hogar. Contáctanos para cotizar tu mueble." />
                <meta name="keywords" content="muebles, madera, personalizados, cotización, diseño, corte, cortes, cortes a medida, a medida, personalización de muebles, madera de pino" />
            </Head>
          <Navbar />
          <Hero/>
          <ServiciosHero/>
          <NosotrosHero />
          <ProductosHero/>
          <NuestroLocal />
          <Cotizar/>
          <Footer/>
      </div>
       )}

    </>
  );
}
