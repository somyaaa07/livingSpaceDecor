// BHKCard.jsx

export default function BHKCard({
  title,
  selected,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        h-24
        sm:h-28
        md:h-32
        lg:h-36
        rounded-xl
        md:rounded-2xl
        border
        flex
        items-center
        justify-center
        text-base
        sm:text-lg
        md:text-xl
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        focus:outline-none
        focus:ring-2
        focus:ring-[#C8972B]/40

        ${
          selected
            ? "bg-[#8B6B4A] text-white border-[#8B6B4A] shadow-lg shadow-[#8B6B4A]/20"
            : "bg-white border-[#E5D8C7] text-[#3D1F0D] hover:border-[#C8972B] hover:text-[#C8972B] hover:shadow-md"
        }
      `}
    >
      {title}
    </button>
  );
}