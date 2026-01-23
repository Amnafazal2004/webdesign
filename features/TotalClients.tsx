import { CyGroteskmed, CyGroteskreg } from "@/lib/fonts";

const TotalClients = () => {
  return (
    <div>
        <div className="grid grid-cols-3 gap-6 bg-black p-10">
            {[
              { value: "50+", label: "Clients" },
              { value: "120+", label: "Projects" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-black rounded-2xl p-6 text-center shadow-sm"
              >
                <h3
                  className={`${CyGroteskmed.className} text-3xl text-[#C9A24D]`}
                >
                  {stat.value}
                </h3>
                  <p
                  className={`${CyGroteskreg.className} text-white text-sm mt-1`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

    </div>
  )
}

export default TotalClients