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

  // ✅ Improved autoplay logic (works across iOS, Android, Desktop)
  useEffect(() => {
    const video = document.getElementById("intro-video");
    if (!video) return;

    const tryPlay = () => video.play().catch(() => {});
    tryPlay(); // first attempt

    // Retry once after a short delay (helps Safari)
    const retry = setTimeout(tryPlay, 1000);

    // Fallback: play on first user interaction
    const enablePlay = () => {
      video.play().catch(() => {});
      window.removeEventListener("touchstart", enablePlay);
      window.removeEventListener("click", enablePlay);
    };

    window.addEventListener("touchstart", enablePlay, { once: true });
    window.addEventListener("click", enablePlay, { once: true });

    return () => {
      clearTimeout(retry);
      window.removeEventListener("touchstart", enablePlay);
      window.removeEventListener("click", enablePlay);
    };
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

      {/* BANDSHAKE title as image */}
<div
  className="
    absolute z-30
    left-1/2
    top-[25%]              /* pulled up slightly from 35% */
    -translate-x-1/2
    -translate-y-[130px]   /* raised a bit (less downward offset) */
    w-[90%] sm:w-[70%] md:w-[50%] lg:w-[60%] xl:w-[55%]
    lg:top-[5%]
    lg:-translate-y-[180px]
    lg:left-[62.5%]
  "
>
  <img
    src="/bandshake-banner.png"
    alt="BANDSHAKE"
    className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.75)]"
  />
</div>

{/* IntroTourDates */}
<Container
  customClasses="
    absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2
    flex flex-col justify-center items-center
    mt-8 lg:mt-0
    lg:justify-end lg:items-end
  "
>
  <IntroTourDates />
</Container>

      <BackToTop customClasses={`reveal${isScrollTopVisible ? " visible" : ""}`} />

      <CookieConsent
        disableStyles={true}
        buttonText="Consent"
        cookieName="cookie_consent"
        buttonClasses="bg-[#ffd08f] rounded-full py-1 px-3 text-sm text-white hover:opacity-90 transition-opacity"
        containerClasses="w-full fixed bottom-0 bg-[#001462] p-3 z-50 lg:bg-stone-300/70 lg:backdrop-blur-lg lg:left-8 lg:bottom-2 lg:rounded-md lg:max-w-md"
        contentClasses="text-sm leading-none mb-1 text-white"
        expires={20}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </section>
  );
}
