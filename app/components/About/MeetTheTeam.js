"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";

const teamMembers = [
  { name: "Nate Comay", title: "CEO", image: "/team/nateheadshot.jpg" },
  { name: "Simon Yahn", title: "CTO", image: "/team/simonheadshot.jpg" },
  { name: "Danny Pakulski", title: "Creative Director", image: "/team/dannyheadshot.png" },
  { name: "Carter Nowak", title: "CFO", image: "/team/headshotplaceholder.jpg" },
  { name: "Holden Glazer", title: "A&R Manager", image: "/team/holdenheadshot.png" },
  { name: "Zela Al-Asadi", title: "Social Media Manager", image: "/team/headshotplaceholder.jpg" },
  { name: "Nasha ", title: "Comms/PR", image: "/team/headshotplaceholder.jpg" },
  { name: "Patrick Gardner", title: "Chief Sound Technician", image: "/team/patrickheadshotcase.jpg" },
];

export default function MeetTheTeam() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      id="team"
      className="relative flex flex-col items-center w-full mt-16 mb-16"
    >
      <Container customClasses="mx-auto px-4">
        <div
          className="flex flex-col max-w-6xl w-full"
          ref={sectionRef}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2
            className={`font-bold text-6xl pb-6 text-center opacity-0 ${isInView ? "animate-slide-up" : ""}`}
          >
            Meet the Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 justify-center">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Portrait */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={208}
                    height={208}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name and Title */}
                <div className="mt-4 flex flex-col items-center">
                  <p className="font-bold text-lg text-black">{member.name}</p>
                  <p className="text-sm text-gray-700">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}