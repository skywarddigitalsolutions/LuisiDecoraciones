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
