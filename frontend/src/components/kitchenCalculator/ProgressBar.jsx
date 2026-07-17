"use client";

export default function ProgressBar({ step }) {
  const steps = [
    "Dimension",
    "Shape",
    "Package",
    "Details",
  ];

  return (
    <div className="mb-12">
      {/* Step Circles */}
      <div className="flex justify-between items-center relative">
        {/* Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-[#F5EBE0] rounded-full">
          <div
            className="h-full bg-[#C8972B] rounded-full transition-all duration-500"
            style={{
              width: `${((step - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {steps.map((item, index) => {
          const currentStep = index + 1;

          return (
            <div
              key={item}
              className="relative z-10 flex flex-col items-center"
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300
                  
                  ${
                    step >= currentStep
                      ? "bg-[#C8972B] text-white"
                      : "bg-white border-2 border-[#E5E5E5] text-gray-500"
                  }
                `}
              >
                {currentStep}
              </div>

              <span
                className={`mt-3 text-xs md:text-sm font-medium text-center
                  
                  ${
                    step >= currentStep
                      ? "text-[#3D1F0D]"
                      : "text-gray-400"
                  }
                `}
              >
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}