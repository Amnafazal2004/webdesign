import { CyGroteskmed, CyGroteskreg, CyGrotesk } from "@/lib/fonts";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#F7F1E8] pb-10" id="hero">
      <section className="max-w-5xl mx-auto px-6 text-center py-28 ">
        <h1 className={`${CyGrotesk.className} text-5xl md:text-6xl leading-tight`}>
          We design websites that help
          <span className="text-[#C9A24D]"> businesses grow</span>
        </h1>
        <p className={`${CyGroteskreg.className} mt-6 text-gray-600 max-w-2xl mx-auto`}>
          A modern web design & UI/UX studio focused on building clean,
          scalable, and conversion-driven digital experiences.
        </p>
        <div className="mt-10">
          <Link
            href="#contact"
            className="bg-[#C9A24D] px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
{/* What We Design */}
<section id="services" className="relative ">
  <div className="max-w-7xl mx-auto px-6">
    <div className="bg-[#FBF7F2] border border-[#E8DED3] rounded-[48px] px-8 md:px-12 py-16 md:py-20">
      
      {/* Section Header */}
      <div className="mb-16 max-w-xl">
        <p className="text-sm tracking-wide text-[#C9A24D] mb-2">OUR SERVICES</p>
        <h2 className={`${CyGroteskmed.className} text-3xl md:text-4xl leading-snug`}>
          What we design
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
        {[
          {
            title: "Websites",
            desc: "We craft modern websites that clearly communicate your brand and guide visitors towards action.",
          },
          {
            title: "E-commerce",
            desc: "Conversion-focused online stores with intuitive UX and product-focused layouts.",
          },
          {
            title: "UI / UX Design",
            desc: "User-centered interfaces for SaaS platforms, dashboards, and web apps.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl"
          >
            <h3
              className={`${CyGroteskmed.className} text-2xl mb-4 hover:text-[#C9A24D] transition`}
            >
              {item.title}
            </h3>

            <p className={`${CyGroteskreg.className} text-gray-600 text-sm md:text-base leading-relaxed`}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero