"use client";

import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function BandIdentity() {
  return (
    <>
      {/* 🔹 Mobile header: logo + social buttons in one line */}
      <div className="w-full py-3 z-50 lg:hidden">
        <Container customClasses="px-2.5 flex items-center justify-between">
          <Image
            className="max-w-24 h-auto"
            src="/bslogo.png"
            width={324}
            height={236}
            alt="BANDSHAKE logo"
          />
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/band.shake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={30}
                className="text-[#ffd08f] hover:text-yellow-400 transition-colors"
              />
            </a>
            <a
              href="https://www.youtube.com/@BANDSHAKE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube
                size={30}
                className="text-[#ffd08f] hover:text-yellow-400 transition-colors"
              />
            </a>
            <a
              href="https://www.tiktok.com/@band.shake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok
                size={30}
                className="text-[#ffd08f] hover:text-yellow-400 transition-colors"
              />
            </a>
          </div>
        </Container>
      </div>

      {/* 🔹 Desktop header */}
      <div className="hidden h-full flex-col justify-between grow-0 shrink-0 bg-[#ffd08f] z-10 bg-opacity-30 lg:flex">
        <div
          className="logo-container border-y-[1.25rem] py-4"
          style={{
            borderTopColor: "#f3a712",
            borderBottomColor: "#001462",
            borderStyle: "solid",
          }}
        >
          <Image
            className="px-12 py-3 h-auto max-w-[405px]"
            src="/bslogo.png"
            width={405}
            height={295}
            alt="BANDSHAKE Logo"
          />
        </div>
        {/* <NewAlbum /> */}
      </div>
    </>
  );
}
