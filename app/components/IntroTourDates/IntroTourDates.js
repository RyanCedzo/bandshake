"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import { MapMapper } from "@/app/svg-icons/svg-icons";

const tourDates = [
  {
    id: 1,
    date: "15 Nov",
    dayTime: "Saturday, 5PM - 10PM",
    venue: "1730 Hauser Blvd",
    city: "Los Angeles",
  },
];

export default function IntroTourDates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div
      className="flex flex-col justify-center items-center lg:justify-end lg:items-end"
      style={{
        transform: isInView ? "none" : "translateY(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={sectionRef}
    >
      <h2 className="text-white font-permanent-marker text-2xl md:text-3xl lg:text-4xl">
        ⚡ Upcoming Shows ⚡
      </h2>

      <ul className="list-none">
        {tourDates.map((gig) => {
          const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${gig.venue}, ${gig.city}`
          )}`;
          return (
            <li
              key={gig.id}
              className="flex items-center my-10 justify-between text-xl md:justify-end md:text-2xl lg:text-2xl xl:text-3xl"
            >
              <div className="flex flex-col justify-center items-center date w-[4.7rem] h-[4.7rem] p-2 bg-[#ffd08f] mr-4 text-2xl rounded-md border-8 border-[#001462] md:mr-12 lg:w-22 lg:h-22">
                <p className="font-bold text-xl text-black leading-none text-center uppercase lg:text-3xl">
                  {gig.date}
                </p>
              </div>
              <div className="text-white text-right leading-none md:mr-12">
                <p>{gig.dayTime}</p>
                <p>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-300"
                  >
                    {gig.venue}
                  </a>
                </p>
                <div className="flex justify-end md:hidden">
                  <MapMapper extraClasses="fill-amber-400 mr-2" />
                  <p>{gig.city}</p>
                </div>
              </div>
              <div className="hidden text-right text-white leading-none md:flex">
                <MapMapper extraClasses="fill-amber-400 mr-2" />
                <p>{gig.city}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Reordered Buttons */}
      <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-x-3">
        {/* GET TICKETS */}
<a
  href="https://www.tickettailor.com/events/bandshake/1925357"
  target="_blank"
  rel="noopener noreferrer"
  className="animate-pulse-5"
>
  <ButtonPrimary className="bg-[#ffd08f] text-[#001462] font-bold uppercase px-6 py-3 text-lg lg:text-xl rounded-lg shadow-lg">
    🎟️ GET TICKETS
  </ButtonPrimary>
</a>

{/* Donate */}
<a
  href="https://checkout.square.site/merchant/MLY7GK1ZV2ZH8/checkout/B7KQXJK3TXEEASZXNASPDEZQ?src=sheet"
  target="_blank"
  rel="noreferrer"
>
  <ButtonPrimary className="bg-[#ffd08f] text-[#001462] flex items-center justify-center gap-x-1 text-sm my-3 lg:text-base lg:mb-0 hover:bg-yellow-600">
    Donate
  </ButtonPrimary>
</a>

{/* Band Inquiry */}
<a
  href="https://docs.google.com/forms/d/e/1FAIpQLSe91U8C5aB3KzPETlyApIupAtyz703qf8mM6ateh_qka9NBIA/viewform"
  target="_blank"
  rel="noreferrer"
>
  <ButtonPrimary className="bg-[#ffd08f] text-[#001462] flex items-center justify-center gap-x-1 text-sm my-3 lg:text-base lg:mb-0 hover:bg-yellow-600">
    Band Inquiry
  </ButtonPrimary>
</a>
      </div>
    </div>
  );
}
