// Step1BHK.jsx

import BHKCard from "./BHKCard";

const bhks = ["1 BHK", "2 BHK", "3 BHK", "4 BHK",];

export default function Step1BHK({ formData, setFormData, next }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <p className="uppercase tracking-[0.25em] text-[#C8972B] text-[10px] sm:text-xs mb-3">
          Cost Calculator
        </p>

      

        <p className="mt-3 text-sm md:text-base text-[#6E6258] max-w-lg mx-auto">
          Choose the type of home to get a more accurate interior cost estimate.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          gap-4
          md:gap-5
        "
      >
        {bhks.map((item) => (
          <BHKCard
            key={item}
            title={item}
            selected={formData.bhk === item}
            onClick={() =>
              setFormData({
                ...formData,
                bhk: item,
              })
            }
          />
        ))}
      </div>

      {/* Selected Value */}
      {formData.bhk && (
        <div className="mt-6 text-center">
          <span className="text-sm text-[#6E6258]">Selected:</span>

          <span className="ml-2 font-semibold text-[#C8972B]">
            {formData.bhk}
          </span>
        </div>
      )}

      {/* Button */}
      <div className="flex justify-center mt-8 md:mt-12">
        <button
          onClick={next}
          disabled={!formData.bhk}
          className={`
            min-w-[180px]
            sm:min-w-[220px]
            px-8
            py-3.5
            md:py-4
            rounded-full
            uppercase
            tracking-[0.12em]
            text-xs
            md:text-sm
            font-medium
            transition-all
            duration-300

            ${
              formData.bhk
                ? "bg-[#8B6B4A] text-white hover:bg-[#6F5439] hover:shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}
