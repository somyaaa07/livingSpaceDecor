import Image from "next/image";
import { ArrowRight } from "lucide-react";

const materials = [
  {
    title: "Solid Wood",
    image: "https://i.pinimg.com/736x/80/11/7b/80117b2e3e9d00ff4609707a061eca87.jpg",
  },
  {
    title: "Engineered Wood",
    image: "https://i.pinimg.com/736x/dd/20/7f/dd207f7bc0341d2971ffedd2818c0f1f.jpg",
  },
  {
    title: "Marble Finish",
    image: "https://i.pinimg.com/1200x/3d/ad/c8/3dadc895282042a8c36f529c464a23e6.jpg",
  },
  {
    title: "Metal Frame",
    image: "https://i.pinimg.com/736x/a1/7d/ec/a17dec52c0d1b564edc6347244cfc0c6.jpg",
  },
  {
    title: "Leather Upholstery",
    image: "https://i.pinimg.com/1200x/6e/4b/71/6e4b71808ad221b0ff1feb90042649bc.jpg",
  },
  {
    title: "Fabric Upholstery",
    image: "https://i.pinimg.com/736x/1e/d3/a9/1ed3a9b808f6feacca284cf3c1b69d5d.jpg",
  },
];

export default function MaterialCollection() {
  return (
    <section className="bg-[#F8F4EE] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          
          {/* Left Content */}
          <div>
            <p className="text-xs uppercase tracking-[4px] text-[#B88A5A] mb-4">
              Quality That Lasts
            </p>

            <h2 className="text-4xl leading-tight text-[#3D1F0D] font-serif mb-4">
              Our Material
              <br />
              Collection
            </h2>

            <p className="text-[#6B5B4D] text-sm leading-7 mb-8">
              Carefully selected materials for exceptional
              durability, beauty, and timeless elegance.
            </p>

            <button className="bg-[#3D1F0D] hover:bg-[#3D1F0D] text-white px-6 py-3 flex items-center gap-2 transition">
              Explore Materials
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Materials */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {materials.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="mt-4 text-sm font-medium text-[#3D1F0D]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}