import { wardrobeDetails } from "@/data/wardrobeData";

export default function Details() {
  const data = wardrobeDetails;

  return (
    <section className="max-w-7xl mx-auto py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading mb-6 text-[#3D1F0D]">
          {data.title}
        </h1>

        <p className="text-gray-600 leading-8 mb-10">{data.intro}</p>

        {data.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-heading mb-6 text-[#3D1F0D]">
              {section.heading}
            </h2>

            {section.content?.map((item, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-xl font-heading mb-2 text-[#3D1F0D]">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">{item.description}</p>
              </div>
            ))}

            {section.text && (
              <p className="text-gray-600 leading-7">{section.text}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
