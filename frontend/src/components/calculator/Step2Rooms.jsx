// Step2Rooms.jsx

"use client";

import RoomItem from "./RoomItem";

const rooms = [
  "Living Room",
  "Master Bedroom",
  "Kitchen",
  "All Bedrooms",
  "Bathrooms",
  "Foyer",
];

export default function Step2Rooms({ formData, setFormData, next, back }) {
  const selectedRooms = formData.rooms || [];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <p className="uppercase tracking-[0.25em] text-[#C8972B] text-[10px] sm:text-xs mb-3">
          Cost Calculator
        </p>

        

        <p className="mt-3 text-sm md:text-base text-[#000000]/60 max-w-xl mx-auto">
          Choose the rooms you want to include in your interior project.
        </p>
      </div>

      {/* Rooms Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          md:gap-5
        "
      >
        {rooms.map((room) => (
          <RoomItem
            key={room}
            room={room}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>

      {/* Selected Count */}
      {selectedRooms.length > 0 && (
        <div className="mt-6 text-center">
          <span className="text-sm text-[#000000]/60">Selected Rooms:</span>

          <span className="ml-2 font-semibold text-[#C8972B]">
            {selectedRooms.length}
          </span>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-12">
        <button
          onClick={back}
          className="
            w-full
            sm:w-auto
            min-w-[160px]
            border
            border-[#D8CFC4]
            text-[#6E6258]
            px-8
            py-3.5
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-300
            hover:border-[#8B6B4A]
            hover:text-[#8B6B4A]
          "
        >
          ← Back
        </button>

        <button
          onClick={next}
          disabled={selectedRooms.length === 0}
          className={`
            w-full
            sm:w-auto
            min-w-[180px]
            px-8
            py-3.5
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-300

            ${
              selectedRooms.length > 0
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
