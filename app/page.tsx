
import About from "@/features/About";
import Contact from "@/features/Contact";
import Hero from "@/features/Hero";
import Navbar from "@/features/Navbar";
import TotalClients from "@/features/TotalClients";
import Why from "@/features/Why";
import Reviews from "@/features/Reviews";
import Clients from "@/features/Clients";

export default function Home() {
  return (
    <>
  <Navbar></Navbar>
  <Hero/>
  <Clients/>
  <Why/>
  <About/>
  <TotalClients/>
  <Reviews/>
  <Contact/>
    </>
  );
}
