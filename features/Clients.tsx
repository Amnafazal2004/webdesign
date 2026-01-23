// components/LogosSection.jsx
"use client"
import Image from "next/image";
import snapon from "@/Assets/snapon.svg";
import simens from "@/Assets/simens.png";
import dash from "@/Assets/dash.jpg";
import asos from "@/Assets/asos.png";

const logos = [
  snapon,simens,dash,asos
];

export default function LogosSection() {
  return (
    <div className="overflow-hidden bg-[#F7F1E8] py-8 pb-12">
      <div className="logos-track flex animate-scroll">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="logo-item mx-8 flex-shrink-0">
            <Image src={logo} alt={`Logo ${index}`} width={120} height={60} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .logos-track {
          display: flex;
          width: max-content;
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
