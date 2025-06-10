import React from "react";
import Footer from "../components/Footer";

export const metadata = {
	title: "Boutique - Xavier Aymeric Frey",
	description:
		'Commandez "Ombres sur le lac", le premier roman de Xavier Aymeric Frey.',
};

export default function Shop() {
	return (
		<div>
			<main className="min-h-screen bg-white">
				<div className="container mx-auto px-4 py-20">
					<h1 className="text-4xl font-serif text-center mb-12 text-anthracite">
						Boutique
					</h1>

					<div className="max-w-2xl mx-auto text-center">
						<p className="text-xl text-gray-600 mb-8">
							La boutique sera bientôt disponible.
						</p>
						<p className="text-lg text-brick">Sortie prévue : printemps 2025</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
