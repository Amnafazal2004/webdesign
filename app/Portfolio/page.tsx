"use client";
import { CyGrotesk, CyGroteskmed, CyGroteskreg } from "@/lib/fonts";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import cryptoss from "@/Assets/cryptoss.png";
import rikoss from "@/Assets/rikoss.png";
import blogss from "@/Assets/blogss.png";
import pastelthriftsss from "@/Assets/pastelthriftsss.png";
import fooddelivss from "@/Assets/fooddelivss.png";
import link from "@/Assets/link.png";
import Navbar from "@/features/Navbar";


const Allprojects = () => {
  const [projects, setprojects] = useState<any[]>([]);
  // <any[]> → TypeScript Type
  // This tells TypeScript:
  // “This state will be an array of objects.”

  const projectimg = [rikoss , pastelthriftsss , blogss , cryptoss , fooddelivss]

  const fetchprojects = async () => {
    try {
      const { data } = await axios.get("/api/projects");
      console.log("got it", data);
      setprojects(data?.projects?.[0].projects || []);
    } catch (error) {
      console.log("Failed to fetch");
      setprojects([]);
    }
  };

  useEffect(() => {
    fetchprojects();
    console.log(projects)
  }, []);

  return (
    <>
            <Navbar></Navbar>
      <div id="projects" className="bg-[#F7F1E8] pt-8">
        <p
          className={`${CyGrotesk.className} text-[40px] text-center text-[#C9A24D] pt-5 pb-23`}
        >
          Projects we have build
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-10 md:px-8 lg:px-28">
  {projects.map((item, index) => (
<div
  key={index}
  className="relative bg-white pb-9 rounded-2xl shadow-lg overflow-hidden max-w-sm w-full transform transition-transform duration-300 hover:-translate-y-2 group"
>
  <Image
    src={projectimg[index]}
    alt={item.name}
    width={400}
    height={200}
    className="rounded-t-2xl object-cover w-full h-48"
  />

  {/* Icons that appear on hover */}
  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <a
      href={item.projecturl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full group-hover:bg-white hover:bg-[#e78eac] transition"
    >
      <Image src={link} alt="see live" width={20} height={20} />
    </a>
  </div>

  <div className="px-6 py-4">
    <h2 className={`${CyGroteskmed.className} text-xl mb-2`}>
      {item.name}
    </h2>
    <p className={`${CyGroteskreg.className} text-sm mb-3`}>
      {item.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {item.techStack.map((tech: string, i: number) => (
        <span
          key={i}
          className="bg-[#faeef2] text-gray-800 text-xs px-2 py-1 rounded-full shadow-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>

  ))}
</div>
  <footer className="text-center text-sm text-gray-500 py-6 pt-100">
        © {new Date().getFullYear()} NiWebs. All rights reserved.
      </footer>

        
      </div>
    </>
  );
};

export default Allprojects;
