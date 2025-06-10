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
								className="block text-morning-mist hover:text-lake-turquoise transition-colors duration-300 cursor-pointer">
								Accueil
							</Link>
							<Link
								href="/boutique"
								className="block text-morning-mist hover:text-lake-turquoise transition-colors duration-300 cursor-pointer">
								Boutique
							</Link>
							<Link
								href="/contact"
								className="block text-morning-mist hover:text-lake-turquoise transition-colors duration-300 cursor-pointer">
								Contact
							</Link>
						</div>
					</div>

					{/* Réseaux sociaux */}
					<div>
						<h3 className="text-xl font-serif mb-4 text-snow-white">
							Réseaux sociaux
						</h3>
						<div className="flex flex-col space-y-3">
							<Link
								href="#"
								className="flex items-center space-x-3 text-morning-mist hover:text-sunset-orange transition-colors duration-300 group cursor-pointer">
								<svg
									className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
								<span>Instagram</span>
							</Link>
							<Link
								href="#"
								className="flex items-center space-x-3 text-morning-mist hover:text-sunset-orange transition-colors duration-300 group cursor-pointer">
								<svg
									className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
								</svg>
								<span>YouTube</span>
							</Link>
							<Link
								href="#"
								className="flex items-center space-x-3 text-morning-mist hover:text-sunset-orange transition-colors duration-300 group cursor-pointer">
								<svg
									className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
								</svg>
								<span>TikTok</span>
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
								className="px-4 py-2 text-sm bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white rounded button-hover disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium">
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
