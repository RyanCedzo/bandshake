"use client";

import { useRef, useState, useEffect } from "react";
import BandIdentity from "../BandIdentity/BandIdentity";
import Container from "@/app/global-components/Container/Container";
import IntroTourDates from "../IntroTourDates/IntroTourDates";
import BackToTop from "../BackToTop/BackToTop";
import { useInView } from "framer-motion";
import CookieConsent from "react-cookie-consent";

export default function Intro() {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    const onScroll = () => {
      setIsScrollTopVisible(window.scrollY > 50 && !isInView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isInView]);

  useEffect(() => {
    const video = document.querySelector("#intro-video");
    if (!video) return;

    // Try autoplay initially
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Ignore errors initially
      });
    }

    // iOS workaround: play on first touch
    const playOnTouch = () => {
      video.play().catch(() => {});
      window.removeEventListener("touchstart", playOnTouch);
    };
    window.addEventListener("touchstart", playOnTouch);
  }, []);

  return (
    <section
      id="intro"
      className="relative flex flex-col items-center h-svh w-full overflow-hidden max-h-372 min-h-172 lg:h-screen lg:flex-row lg:justify-start"
      ref={sectionRef}
    >
      <BandIdentity />

      {/* Background video */}
      <div className="absolute inset-0 lg:left-[25%] lg:w-[75%] transition-all duration-300">
        <div className="absolute inset-0 bg-linear-to-b from-purple-500 to-pink-500 opacity-10"></div>
        <div className="absolute inset-0 bg-hero-pattern bg-repeat"></div>

        <video
          id="intro-video"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster="/frame-band.jpg"
          className="object-cover w-full h-full z-10"
        >
          <source src="/test-bandshake.mp4" type="video/mp4" />
          <source src="/test-bandshake.webm" type="video/webm" />
          <p>
            Your browser doesn’t support HTML video. Here is a{" "}
            <a href="/test-bandshake.mp4">link to the video</a> instead.
          </p>
        </video>
      </div>

      {/* BANDSHAKE title */}
      <h1
        className="
          absolute z-30 text-center
          left-1/2 -translate-x-1/2
          text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          font-bold tracking-widest uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.75)]
          pointer-events-none
          top-[18%] lg:top-[6%]
          lg:left-[62.5%] lg:-translate-x-[50%]
        "
        aria-hidden="true"
      >
        <span className="text-[#f3a712]">BAND</span>
        <span className="text-[#001462]">SHAKE</span>
      </h1>

      {/* IntroTourDates with extra mobile spacing */}
      <Container
        customClasses="
          absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2
          flex flex-col justify-center items-center
          mt-8 lg:mt-0
          lg:justify-end lg:items-end lg:top-[50%] lg:-translate-y-1/2
        "
      >
        <IntroTourDates />
      </Container>

      <BackToTop customClasses={`reveal${isScrollTopVisible ? " visible" : ""}`} />

      <CookieConsent
        disableStyles={true}
        buttonText="Consent"
        cookieName="cookie_consent"
        buttonClasses="bg-yellow-btn-primary rounded-full p-1 px-3 text-sm text-xs text-white"
        containerClasses="w-full fixed bottom-0! bg-fluo-green p-3 z-50 lg:bg-stone-300/70 lg:backdrop-blur-lg lg:left-8 lg:bottom-2! lg:rounded-md lg:max-w-md"
        contentClasses="text-sm leading-none mb-1 lg:text-white"
        expires={20}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </section>
  );
}
