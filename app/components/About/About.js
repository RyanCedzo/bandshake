"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Container from "@/app/global-components/Container/Container";
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function About() {
	const textRef = useRef(null);
	const isInView = useInView(textRef, { once: true });

	return (
		<section
			id="about"
			className={`relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-600 lg:flex-row lg:mt-56`}>
			<Container customClasses="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
				<div
					className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl"
					ref={textRef}
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}>
					<div className="overflow-hidden">
						<h2
							className={`font-bold text-6xl pb-6 opacity-0 ${isInView ? "animate-slide-up" : ""}`}>
							About
						</h2>
					</div>

					<p>
						Add some info about bandshake. All that kinda shit here, man. &#8217;
						{/* <a
							className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600"
							href="https://www.paninopanini.co.uk/"
							target="_blank"
							rel="noreferrer">
							Ut labore et
						</a> */}
						 Imma just add some random characters and shit to fill in the blank space. dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
					</p>
					<p className="pt-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						<a
							className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600"
							href="https://www.paninopanini.co.uk/"
							target="_blank"
							rel="noreferrer">
							eiusmod tempor
						</a>
						. Chiudi un po&#8217; la finestra, mezzogiorno in penombra, sfondo bianco e pulito,
						sfondo bianco e pulito.
					</p>
					<div className="flex pt-8 gap-4">
						{/* Instagram */}
						<a
							href="https://www.instagram.com/band.shake"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram size={45} />
						</a>

						{/* YouTube */}
						<a
							href="https://www.youtube.com/@BANDSHAKE"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaYoutube size={45} />
						</a>

						{/* TikTok */}
						<a
							href="https://www.tiktok.com/@band.shake"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTiktok size={45} />
						</a>
					</div>
				</div>
			</Container>
			<Image
				className="w-full mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-xl"
				src="/bandshake-headshot.jpg"
				width={750}
				height={533}
				alt="Holding guitar"
			/>
		</section>
	);
}
