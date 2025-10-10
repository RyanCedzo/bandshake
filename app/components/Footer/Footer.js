import Container from "@/app/global-components/Container/Container";
import SubscribeForm from "@/app/global-components/SubscribeForm/SubscribeForm";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
	return (
		<section id="footer" className="bg-black w-full lg:fixed lg:bottom-0 lg:z-[-1] lg:h-92">
			<footer className="w-full">
				{/* <div className=" py-16">
					<Container customClasses="flex flex-col lg:items-center lg:flex-row">
						<div className="basis-2/3 text-white">
							<h3 className="text-5xl font-bold">Subscribe</h3>
							<p>To our newsletter to get the latest updates and live gigs info.</p>
						</div>
						<div className="flex items-cente w-full mt-2.5 lg:mt-0 lg:basis-1/3 lg:justify-end">
							<SubscribeForm />
						</div>
					</Container>
				</div> */}
				<div className="bg-[#ffd08f] pt-1 pb-1 relative z-100">
					<Container customClasses="flex justify-between items-center">
						{/* Footer logo */}
						<Image
						className="max-w-32 lg:max-w-48 h-auto"
						src="/bslogo.png"
						width={815}
						height={144}
						alt="Footer logo"
						/>

						<div className="flex gap-3 md:gap-4 text-white">
							<a href="https://www.instagram.com/band.shake" target="_blank" rel="noreferrer">
								<FaInstagram size={32} />
							</a>
							<a href="https://www.youtube.com/@BANDSHAKE" target="_blank" rel="noreferrer">
								<FaYoutube size={32} />
							</a>
							<a href="https://www.tiktok.com/@band.shake" target="_blank" rel="noreferrer">
								<FaTiktok size={32} />
							</a>
						</div>
					</Container>

					{/* Powered by */}
					<div className="bg-black text-white mt-1 py-1">
						<p className="text-[0.7rem] text-center leading-tight mb-1">
						Website powered by{" "}
						<a
							className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600"
							href="https://tr.ee/ecVmLU6Eqp"
							target="_blank"
							rel="noreferrer">
							Rye Bread
						</a>{" "}
						🍞
						</p>
					</div>
				</div>
			</footer>
		</section>
	);
}
