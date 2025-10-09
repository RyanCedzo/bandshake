import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Listen from "./components/Listen/Listen";
import MeetTheTeam from "./components/About/MeetTheTeam";
import Shows from "./components/Shows/Shows";
import Video from "./components/Video/Video";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import TextParallax from "./components/TextParallax/TextParallax";
export default function Home() {
	return (
		<>
			<main className="min-h-screen bg-white">
				<Intro />
				<hr className="border-t border-gray-300 my-12" />
				<About />
				<hr className="border-t border-gray-300 my-12" />
				<MeetTheTeam />
				<hr className="border-t border-gray-300 my-12" />
				<Listen />
				<hr className="border-t border-gray-300 my-12" />
				{/*<Video />
				<ContactUs />
				<TextParallax />
				<PhotoGallery /> */}
			</main>
		</>
	);
}
