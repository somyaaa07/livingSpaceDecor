import {
  PencilRuler,
  Package,
  Factory,
  Hammer,
  ShieldCheck,
  KeyRound,
} from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    icon: PencilRuler,
    title: "Design",
  },
  {
    icon: Package,
    title: "Material Procurement",
  },
  {
    icon: Factory,
    title: "Manufacturing",
  },
  {
    icon: Hammer,
    title: "Site Execution",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checks",
  },
  {
    icon: KeyRound,
    title: "Final Handover",
  },
];

export default function TurnkeyOverview() {
  return (
    <section className="bg-[#F5EBE0] py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Process Graphic */}
          <div className="relative">
            <div className="bg-white rounded-md p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#3D1F0D] mb-8 text-center">
                Turnkey Process
              </h3>

              <div className="space-y-2">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={index}>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#C8972B]/10 flex items-center justify-center">
                          <Icon size={18} className="text-[#C8972B]" />
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#3D1F0D]">
                            {step.title}
                          </h4>
                        </div>
                      </div>

                      {index !== processSteps.length - 1 && (
                        <div className="ml-7 h-8 border-l-2 border-dashed border-[#C8972B]"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <span className="inline-block bg-[#C8972B]/10 text-[#C8972B] px-4 py-2 rounded-full text-sm font-semibold mb-5">
              End-to-End Interior Solutions
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#3D1F0D] leading-tight mb-6">
              What is a Turnkey Project?
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
              A turnkey interior project is a complete solution where a single
              team manages everything from planning and design to execution and
              final handover. You receive a fully finished, move-in-ready home
              without coordinating multiple vendors or contractors.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Design",
                "Material Procurement",
                "Manufacturing",
                "Site Execution",
                "Quality Checks",
                "Final Handover",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-7 h-7 rounded-full bg-[#C8972B] flex items-center justify-center text-white text-sm">
                    ✓
                  </div>

                  <span className="font-medium text-[#3D1F0D]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/contact">
                <button className="bg-[#3D1F0D] hover:bg-[#C8972B] text-white px-8 py-4 rounded-md font-body transition-all duration-300">
                  Book Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
