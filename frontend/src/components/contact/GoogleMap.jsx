"use client";

export default function GoogleMap() {
  return (
    <section className="bg-[#F7F2EB] pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] pt-30 text-[#C8972B] text-xs mb-4">
            Visit Our Studio
          </p>

          <h2 className="font-[Playfair,poppins] text-[36px] sm:text-[44px] md:text-5xl text-[#2A1506]">
            Find Us On The Map
          </h2>

          <p className="text-[#6E6258] mt-4 max-w-2xl mx-auto">
            Visit our design studio and discuss your dream interior project with
            our experts.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden border border-[#C8972B]/20 shadow-sm">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Noida,India&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
