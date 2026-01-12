import { CyGroteskmed, CyGroteskreg } from "@/lib/fonts";

const About = () => {
  return (
    <div className="bg-[#F7F1E8]">  
      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h2 className={`${CyGroteskmed.className} text-4xl`}>
            About Our Company
          </h2>
          <p className={`${CyGroteskreg.className} text-gray-600`}>
            NiWebs is a design-focused studio built for startups, founders,
            and growing businesses who value clarity and quality.
          </p>
          <p className={`${CyGroteskreg.className} text-gray-600`}>
            We believe strong digital products start with thoughtful design.
            Our work combines visual clarity, user-centered thinking,
            and scalable systems.
          </p>
          <p className={`${CyGroteskreg.className} text-gray-600`}>
            As a growing studio, we treat every project as a long-term
            partnership — focusing on outcomes, not just visuals.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h3 className={`${CyGroteskmed.className} text-2xl mb-4`}>
            Our Philosophy
          </h3>
          <p className={`${CyGroteskreg.className} text-gray-600 mb-4`}>
            We believe good design should feel effortless. It should guide,
            not confuse, and support business goals without getting in the way.
          </p>
          <p className={`${CyGroteskreg.className} text-gray-600`}>
            By keeping things simple, intentional, and human-centered,
            we create experiences that last.
          </p>
        </div>
      </section>

  
    </div>
  )
}

export default About