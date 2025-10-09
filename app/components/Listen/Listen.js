"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from "@/app/global-components/Container/Container";
import { Spotify, SoundCloud, Youtube, AppleMusic } from "@/app/svg-icons/svg-icons";
import AudioPlayer from "@/app/global-components/AudioPlayer/AudioPlayer";

export default function Listen() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section id="listen" className="w-full py-16">
			<Container customClasses="flex flex-col lg:flex-row">
				{/* Text Section */}
				<div
					className="flex flex-col justify-center basis-2/4 lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
				>
					<h2 className={`font-bold text-5xl pb-6 opacity-0 ${isInView ? "animate-slide-up" : ""}`}>
						Listen to some of our singles:
					</h2>
					<p>
						Put some more text around here talking about the live recording abilities at the bandshake and other stuff related to that and how we got the dopest sound around
					</p>
					<div className="flex items-center pt-4 gap-4">
						<Spotify />
						<SoundCloud />
						<Youtube />
						<AppleMusic />
					</div>
				</div>

				{/* Audio Player Section */}
				<div className="flex items-center justify-center pt-20 lg:pt-[60px] basis-2/4">
					<AudioPlayer />
				</div>
			</Container>
		</section>
	);
}
