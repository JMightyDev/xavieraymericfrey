import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const metadata = {
	title: "Contact - Xavier Aymeric Frey",
	description: 'Contactez Xavier Aymeric Frey, auteur de "Ombres sur le lac".',
};

export default function Contact() {
	return (
		<div>
			<main className="min-h-screen bg-white">
				<div className="container mx-auto px-4 py-20">
					<h1 className="text-4xl font-serif text-center mb-12 text-anthracite">
						Contact
					</h1>

					<ContactForm />
				</div>
			</main>
			<Footer />
		</div>
	);
}
