
import About from "@/features/About";
import Contact from "@/features/Contact";
import Hero from "@/features/Hero";
import Navbar from "@/features/Navbar";
import Why from "@/features/Why";

export default function Home() {
  return (
    <>
  <Navbar></Navbar>
  <Hero/>
  <Why/>
  <About/>
  <Contact/>
    </>
  );
}
