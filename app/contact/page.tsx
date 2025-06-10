import React from "react";
import Footer from "../components/Footer";

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

					<div className="max-w-2xl mx-auto">
						<form className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-1">
									Nom
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brick focus:border-brick"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-1">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brick focus:border-brick"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-1">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={6}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brick focus:border-brick"></textarea>
							</div>

							<div>
								<button
									type="submit"
									className="w-full bg-brick hover:bg-brick/90 text-white px-6 py-3 rounded-md transition">
									Envoyer
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
