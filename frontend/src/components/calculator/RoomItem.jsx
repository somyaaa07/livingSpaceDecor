"use client";

import { Check } from "lucide-react";

export default function RoomItem({ room, formData, setFormData }) {
  const selected = formData?.rooms?.includes(room);

  const toggleRoom = () => {
    const currentRooms = formData?.rooms || [];

    if (selected) {
      setFormData({
        ...formData,
        rooms: currentRooms.filter((r) => r !== room),
      });
    } else {
      setFormData({
        ...formData,
        rooms: [...currentRooms, room],
      });
    }
  };

  return (
    <button
      onClick={toggleRoom}
      className={`
        group
        w-full
        rounded-2xl
        border
        p-4
        sm:p-5
        md:p-6
        text-left
        transition-all
        duration-300

        ${
          selected
            ? "border-[#8B6B4A] bg-[#000000]/60 shadow-lg shadow-[#8B6B4A]/10"
            : "border-[#E5D8C7] bg-white hover:border-[#C8972B] hover:shadow-md"
        }
      `}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Room Name */}
        <div>
          <h3
            className={`
              text-base
              sm:text-lg
              md:text-xl
              font-semibold
              transition-colors

              ${
                selected
                  ? "text-[#8B6B4A]"
                  : "text-[#2A1506] group-hover:text-[#8B6B4A]"
              }
            `}
          >
            {room}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-[#6E6258]">
            Include this room in your project estimate
          </p>
        </div>

        {/* Selection Indicator */}
        <div
          className={`
            flex-shrink-0
            w-8
            h-8
            sm:w-10
            sm:h-10
            rounded-full
            border
            flex
            items-center
            justify-center
            transition-all
            duration-300

            ${
              selected
                ? "bg-[#8B6B4A] border-[#8B6B4A] text-white"
                : "border-[#D8CFC4] text-transparent group-hover:border-[#C8972B]"
            }
          `}
        >
          <Check size={16} />
        </div>
      </div>
    </button>
  );
}
