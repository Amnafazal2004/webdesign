"use client"
import { CyGroteskmed, CyGroteskreg } from "@/lib/fonts";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    message:
      "Next Byte transformed our digital presence. Their designs are modern, clean, and truly user-friendly.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateX",
    message:
      "Working with Next Byte was seamless. They delivered our app on time with incredible attention to detail.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, CreatiSolutions",
    message:
      "Their team understands UX deeply. Our website engagement has doubled since launch!",
  },
];

const ClientsSay = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#F7F1E8] py-20" id="testimonials">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm tracking-wide text-[#C9A24D] mb-2">TESTIMONIALS</p>
        <h2 className={`${CyGroteskmed.className} text-3xl md:text-4xl mb-8`}>
          What Our Clients Say
        </h2>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg relative">
          <p className={`${CyGroteskreg.className} text-gray-700 text-base md:text-lg mb-6`}>
            "{testimonials[current].message}"
          </p>
          <h4 className={`${CyGroteskmed.className} text-lg md:text-xl text-[#C9A24D]`}>
            {testimonials[current].name}
          </h4>
          <p className={`${CyGroteskreg.className} text-gray-500 text-sm md:text-base`}>
            {testimonials[current].role}
          </p>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-10 cursor-pointer text-[#C9A24D]" onClick={prevTestimonial}>
            &#8592;
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-10 cursor-pointer text-[#C9A24D]" onClick={nextTestimonial}>
            &#8594;
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-[#C9A24D]" : "bg-gray-300"
              } cursor-pointer`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSay;
