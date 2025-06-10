import React from "react";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import BookSection from "./components/BookSection";
import MockupSection from "./components/MockupSection";
import Biography from "./components/Biography";
import Footer from "./components/Footer";

export const metadata = {
	title: 'Xavier Aymeric Frey - Auteur de "Ombres sur le lac"',
	description:
		'Découvrez le premier roman de Xavier Aymeric Frey, "Ombres sur le lac". Un thriller policier captivant qui explore les thèmes du pardon, de la colère et de la rancune.',
	openGraph: {
		title: 'Xavier Aymeric Frey - Auteur de "Ombres sur le lac"',
		description:
			'Découvrez le premier roman de Xavier Aymeric Frey, "Ombres sur le lac".',
		images: ["/og-image.jpg"],
	},
};

export default function Home() {
	return (
		<main>
			<Hero />
			<Quote />
			<BookSection />
			<MockupSection />
			<Biography />
			<Footer />
		</main>
	);
}
