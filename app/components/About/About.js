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
			className="relative flex flex-col lg:flex-row items-center w-full pt-0 pb-8"
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
						className={`font-bold text-6xl pb-3 text-center lg:text-left opacity-0 ${
							isInView ? "animate-slide-up" : ""
						}`}
					>
						About
					</h2>

					<p className="pt-2">
						We are <strong>BANDSHAKE</strong>.
					</p>
					<p className="pt-4">
						<strong>BANDSHAKE</strong> creates community-based live
						concert experiences made to be shared.
					</p>
					<p className="pt-4">
						Music is a highly contagious ball of energy that has the
						power to move us and unite us.{" "}
						<strong>BANDSHAKE</strong> is the satellite that
						harnesses that energy and beams it out across the world.
					</p>
					<p className="pt-4">
						We aspire to capture and preserve these ephemeral moments
						at the highest audio-visual quality. Our concert films
						share this fantastic power live music has on us all.
					</p>
					<p className="pt-4">
						We want to thank you for being here to support our
						vision and aid in our quest to make the whole world
						dance.
					</p>

					<div className="flex pt-6 gap-4">
						<a
							href="https://www.instagram.com/band.shake"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram size={45} />
						</a>
						<a
							href="https://www.youtube.com/@BANDSHAKE"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaYoutube size={45} />
						</a>
						<a
							href="https://www.tiktok.com/@band.shake"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTiktok size={45} />
						</a>
					</div>
				</div>

				<Image
					className="w-full mt-8 lg:mt-0 lg:max-w-lg xl:max-w-xl object-cover"
					src="/bandshake-headshot.jpg"
					width={750}
					height={533}
					alt="Holding guitar"
				/>
			</Container>
		</section>
	);
}
