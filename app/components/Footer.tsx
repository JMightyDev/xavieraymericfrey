"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState("");

	const handleNewsletterSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setMessage("");

		try {
			// Simuler un appel API
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setMessage("Inscription réussie ! Merci de vous être abonné.");
			setEmail("");
		} catch (error) {
			setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<footer className="bg-gradient-to-b from-mountain-blue to-deep-night text-white py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Navigation */}
					<div>
						<h3 className="text-xl font-serif mb-4 text-snow-white">
							Navigation
						</h3>
						<div className="space-y-2">
							<Link
								href="/"
								className="block text-morning-mist hover:text-lake-turquoise transition-colors duration-300 hover:translate-x-1 transform">
								Accueil
							</Link>
							<Link
								href="/boutique"
								className="block text-morning-mist hover:text-lake-turquoise transition-colors duration-300 hover:translate-x-1 transform">
								Boutique
							</Link>
							<Link
								href="/contact"
								className="block text-morning-mist hover:text-lake-turquoise transition-colors duration-300 hover:translate-x-1 transform">
								Contact
							</Link>
						</div>
					</div>

					{/* Réseaux sociaux */}
					<div>
						<h3 className="text-xl font-serif mb-4 text-snow-white">
							Réseaux sociaux
						</h3>
						<div className="space-y-2">
							<Link
								href="#"
								className="block text-morning-mist hover:text-sunset-orange transition-colors duration-300 hover:translate-x-1 transform">
								Instagram
							</Link>
							<Link
								href="#"
								className="block text-morning-mist hover:text-sunset-orange transition-colors duration-300 hover:translate-x-1 transform">
								YouTube
							</Link>
							<Link
								href="#"
								className="block text-morning-mist hover:text-sunset-orange transition-colors duration-300 hover:translate-x-1 transform">
								TikTok
							</Link>
						</div>
					</div>

					{/* Newsletter */}
					<div>
						<h3 className="text-xl font-serif mb-4 text-snow-white">
							Newsletter
						</h3>
						<p className="text-morning-mist mb-4 text-sm">
							Restez informé des dernières actualités
						</p>
						<form
							onSubmit={handleNewsletterSubmit}
							className="flex flex-col sm:flex-row gap-2">
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Votre email"
								className="flex-1 px-3 py-2 text-sm bg-lake-blue/30 border border-lake-turquoise/50 rounded text-snow-white placeholder-morning-mist focus:outline-none focus:border-lake-turquoise focus:ring-2 focus:ring-lake-turquoise/50 transition-all duration-300"
								required
								disabled={isSubmitting}
							/>
							<button
								type="submit"
								disabled={isSubmitting}
								className="px-4 py-2 text-sm bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white rounded button-hover disabled:opacity-50 disabled:cursor-not-allowed font-medium">
								{isSubmitting ? "..." : "S'inscrire"}
							</button>
						</form>
						{message && (
							<p
								className={`mt-2 text-sm ${message.includes("Erreur") ? "text-red-400" : "text-green-400"}`}>
								{message}
							</p>
						)}
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-lake-blue/30 pt-8 text-center">
					<p className="text-morning-mist text-sm">
						© 2025 Xavier Aymeric Frey. Tous droits réservés.
					</p>
				</div>
			</div>
		</footer>
	);
}
