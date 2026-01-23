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
{/* What We Design */}
<section id="services" className="relative">
  <div className="max-w-7xl mx-auto px-6">
    <div className="bg-[#FBF7F2] border border-[#E8DED3] rounded-[48px] px-8 md:px-12 py-16 md:py-20">
      
      {/* Section Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <p className="text-sm tracking-wide text-[#C9A24D] mb-2">OUR SERVICES</p>
        <h2 className={`${CyGroteskmed.className} text-3xl md:text-4xl leading-snug`}>
          What we design
        </h2>
        <p className={`${CyGroteskreg.className} text-gray-600 mt-4`}>
          Comprehensive digital solutions designed to elevate your brand and grow your business.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Web Development",
            desc: "Modern, fast, and scalable websites built with performance and clarity in mind.",
          },
          {
            title: "Mobile Apps",
            desc: "Clean and intuitive mobile app interfaces for iOS and Android platforms.",
          },
          {
            title: "UI / UX Design",
            desc: "User-focused designs that deliver seamless and engaging experiences.",
          },
          {
            title: "E-commerce",
            desc: "Conversion-optimized online stores with intuitive shopping flows.",
          },
          {
            title: "SEO Optimization",
            desc: "Search-friendly structures that help your website rank and convert better.",
          },
          {
            title: "Maintenance & Support",
            desc: "Ongoing support, updates, and performance monitoring for peace of mind.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl"
          >
            {/* Icon Placeholder */}
            <div className="w-12 h-12 rounded-full bg-[#F7F1E8] flex items-center justify-center mb-6">
              <span className="text-[#C9A24D] text-lg font-semibold">●</span>
            </div>

            <h3
              className={`${CyGroteskmed.className} text-xl md:text-2xl mb-3`}
            >
              {item.title}
            </h3>

            <p
              className={`${CyGroteskreg.className} text-gray-600 text-sm md:text-base leading-relaxed`}
            >
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