"use client";

const colors = [
  {
    name: "Classic White",
    color: "#F8F8F8",
    description: "Bright, spacious and timeless",
  },
  {
    name: "Warm Beige",
    color: "#D8C3A5",
    description: "Elegant and cozy interiors",
  },
  {
    name: "Olive Green",
    color: "#7A8450",
    description: "Natural and sophisticated",
  },
  {
    name: "Charcoal Grey",
    color: "#4A4A4A",
    description: "Modern and luxurious",
  },
  {
    name: "Navy Blue",
    color: "#23395B",
    description: "Bold and premium appeal",
  },
  {
    name: "Walnut Brown",
    color: "#6B4423",
    description: "Rich wooden aesthetics",
  },
];

export default function ColorPalette() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[#B8851F] uppercase tracking-[3px] text-sm font-medium">
            Color Inspiration
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3D1F0D]">
            Kitchen Color Palette
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover trending kitchen color combinations that complement your
            lifestyle and interior aesthetic.
          </p>
        </div>
        
        {/* Bottom Palette */}
        <div className="mt-16 rounded-3xl bg-[#F5EBE0] p-8">
          <h3 className="text-center text-2xl font-semibold text-[#3D1F0D] mb-8">
            Trending Kitchen Shades
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {colors.map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="h-20 w-20 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: item.color }}
                />
                <p className="mt-3 text-sm font-medium text-[#3D1F0D]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
