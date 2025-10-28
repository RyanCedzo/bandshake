"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function About() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row items-center w-full -mt-2 lg:-mt-0 pb-8"
    >
      <Container customClasses="flex flex-col lg:flex-row items-center">
        <div
          className="flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
          ref={textRef}
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition:
              "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h2
            className={`font-bold text-6xl mt-0 mb-8 text-center lg:text-left opacity-0 ${
              isInView ? "animate-slide-up" : ""
            }`}
          >
            About
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>We are <strong>BANDSHAKE</strong>.</p>
            <p>
              <strong>BANDSHAKE</strong> creates community-based live
              concert experiences made to be shared.
            </p>
            <p>
              Music is a highly contagious ball of energy that has the
              power to move us and unite us. <strong>BANDSHAKE</strong> is the
              satellite that harnesses that energy and beams it out across the
              world.
            </p>
            <p>
              We aspire to capture and preserve these ephemeral moments at the
              highest audio-visual quality. Our concert films share this
              fantastic power live music has on us all.
            </p>
            <p>
              We want to thank you for being here to support our vision and aid
              in our quest to make the whole world dance.
            </p>
          </div>

          <div className="flex pt-8 gap-6 justify-center lg:justify-start">
            <a
              href="https://www.instagram.com/band.shake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={45} />
            </a>
            <a
              href="https://www.youtube.com/@BANDSHAKE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={45} />
            </a>
            <a
              href="https://www.tiktok.com/@band.shake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok size={45} />
            </a>
          </div>
        </div>

        <Image
          className="w-full mt-12 lg:mt-0 lg:max-w-lg xl:max-w-xl object-cover"
          src="/bandshakedrumphoto.png"
          width={750}
          height={533}
          alt="BANDSHAKE"
        />
      </Container>
    </section>
  );
}