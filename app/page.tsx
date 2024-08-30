import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ServiciosHero from "./components/serviciosHero";
import NosotrosHero from "./components/nosotrosHero";
import ProductosHero from "./components/productosHero";
import Cotizar from "./components/cotizar";
import NuestroLocal from "./components/nuestrolocal";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <ServiciosHero/>
      <NosotrosHero />
      <ProductosHero/>
      <NuestroLocal />
      <Cotizar/>
      <Footer/>

    </>
  );
}
