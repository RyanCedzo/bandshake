"use client";

import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import ButtonPrimary from "@/app/global-components/ButtonPrimary/ButtonPrimary";
import NewAlbum from "../NewAlbum/NewAlbum";

export default function BandIdentity() {
  return (
    <>
      {/* 🔹 Mobile header: logo + Find Out More button in one line */}
      <div className="w-full py-3 z-50 lg:hidden">
        <Container customClasses="px-2.5 flex items-center justify-between">
          <Image
            className="max-w-24 h-auto"
            src="/bslogo.png"
            width={324}
            height={236}
            alt="BANDSHAKE logo"
          />
          <a
            href="https://tr.ee/ecVmLU6Eqp"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <ButtonPrimary
              customClasses="text-sm my-0 !py-1 !px-3 flex items-center justify-center translate-y-[-26%]"
            >
              Find Out More
            </ButtonPrimary>
          </a>
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
