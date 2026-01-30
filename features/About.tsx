
import { CyGroteskmed, CyGroteskreg } from "@/lib/fonts";
import Image from "next/image";
import about1 from "@/Assets/about1.png";

const About = () => {
  return (
    <div className="bg-[#F7F1E8]">
      {/* About / Who We Are */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center"
      >
        {/* Image Side */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            {/* Replace src with your image */}
            <Image
              src={about1}
              alt="Who we are"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Content Side */}
        <div>
          <p className="text-sm tracking-wide text-[#C9A24D] mb-3">
            WHO WE ARE
          </p>

          <h2 className={`${CyGroteskmed.className} text-4xl mb-6`}>
            About Our Company
          </h2>

          <p className={`${CyGroteskreg.className} text-gray-600 mb-4`}>
            NextByteStudio is a design-focused studio built for startups, founders,
            and growing businesses who value clarity and quality.
          </p>

          <p className={`${CyGroteskreg.className} text-gray-600 mb-4`}>
            We believe strong digital products start with thoughtful design.
            Our work combines visual clarity, user-centered thinking,
            and scalable systems.
          </p>

          <p className={`${CyGroteskreg.className} text-gray-600 mb-8`}>
            As a growing studio, we treat every project as a long-term
            partnership, focusing on outcomes, not just visuals.
          </p>

          {/* Feature Points (like screenshot) */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Design-led approach",
              "Clear communication",
              "Scalable systems",
              "Long-term partnerships",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
              >

                <p className={`${CyGroteskreg.className} text-gray-700 text-sm`}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
