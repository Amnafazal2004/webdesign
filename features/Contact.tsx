
import { CyGroteskmed, CyGroteskreg } from "@/lib/fonts";

const Contact = () => {
  return (
    <div>
         {/* Contact */}
<section id="contact" className="bg-black text-white py-28">
  <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
    
    {/* Heading */}
    <h2 className={`${CyGroteskmed.className} text-4xl md:text-5xl`}>
      Contact Us
    </h2>

    {/* Description */}
    <p className={`${CyGroteskreg.className} text-gray-400 max-w-md`}>
      Have a project in mind? Let’s talk. We are here to help you build amazing digital experiences.
    </p>

    {/* Contact Info */}
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-gray-300">
      <p className="flex items-center gap-3">
       
       📞  +92 313 2402256
      </p>
      <p className="flex items-center gap-3">
        
      ✉️   fazalamna666@gmail.com
      </p>
      <p className="flex items-center gap-3">
       
       📍  Karachi, Pakistan
      </p>
    </div>

  </div>
</section>


      <footer className="text-center text-sm text-gray-500 py-6 bg-[#F7F1E8]">
        © {new Date().getFullYear()} NiWebs. All rights reserved.
      </footer>
    </div>
  )
}

export default Contact