"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NewsletterPage() {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setMessage("");

		try {
			// Ici vous pouvez ajouter l'intégration avec votre service de newsletter
			// Pour l'instant, on simule juste un succès
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setMessage("Merci ! Vous êtes maintenant inscrit(e) à notre newsletter.");
			setEmail("");
		} catch (error) {
			setMessage("Erreur lors de l'inscription. Veuillez réessayer.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div>
			<style jsx>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-on-scroll {
					animation: fadeInUp 0.8s ease-out forwards;
				}
			`}</style>

			<Header />
			<main className="min-h-screen bg-gradient-to-b from-snow-white via-morning-mist/10 to-lake-blue/5">
				{/* Hero section pour la newsletter */}
				<section className="bg-gradient-to-br from-mountain-blue to-deep-night text-white py-20">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-5xl md:text-6xl font-serif mb-6 text-snow-white animate-on-scroll">
							Newsletter
						</h1>
						<p className="text-xl md:text-2xl text-morning-mist max-w-2xl mx-auto leading-relaxed animate-on-scroll">
							Restez informé(e) des dernières actualités, événements et sorties
							de Xavier Aymeric Frey.
						</p>
					</div>
				</section>

				{/* Section newsletter */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-2xl mx-auto">
							<div className="bg-snow-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-morning-mist/30 animate-on-scroll">
								<h2 className="text-2xl font-serif mb-6 text-mountain-blue text-center">
									Inscription à la newsletter
								</h2>

								<div className="mb-6">
									<div className="grid md:grid-cols-3 gap-6 text-center">
										<div className="p-4">
											<div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
												<svg
													className="w-6 h-6 text-red-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
													/>
												</svg>
											</div>
											<h3 className="font-medium text-mountain-blue mb-1">
												Nouvelles sorties
											</h3>
											<p className="text-sm text-stone-gray">
												Soyez les premiers informés
											</p>
										</div>

										<div className="p-4">
											<div className="w-12 h-12 bg-gray-800/20 rounded-full flex items-center justify-center mx-auto mb-3">
												<svg
													className="w-6 h-6 text-gray-800"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
													/>
												</svg>
											</div>
											<h3 className="font-medium text-mountain-blue mb-1">
												Événements
											</h3>
											<p className="text-sm text-stone-gray">
												Séances dédicaces & rencontres
											</p>
										</div>

										<div className="p-4">
											<div className="w-12 h-12 bg-alpine-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
												<svg
													className="w-6 h-6 text-alpine-green"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15 17h5l-5 5v-5zM9 7h6m-6 4h6m-6 4h4"
													/>
												</svg>
											</div>
											<h3 className="font-medium text-mountain-blue mb-1">
												Actualités
											</h3>
											<p className="text-sm text-stone-gray">
												Coulisses de l'écriture
											</p>
										</div>
									</div>
								</div>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label
											htmlFor="newsletter-email"
											className="block text-sm font-medium text-mountain-blue mb-2">
											Votre adresse email *
										</label>
										<input
											type="email"
											id="newsletter-email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
											placeholder="votre.email@exemple.com"
											className="w-full px-4 py-3 border border-morning-mist/40 rounded-lg bg-snow-white/50 focus:outline-none focus:border-red-600 transition-all duration-200 hover:shadow-md"
										/>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="w-full relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer text-white font-medium px-6 py-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg disabled:transform-none group">
										<div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
										<span className="relative z-10">
											{isSubmitting ? (
												<div className="flex items-center justify-center space-x-2">
													<svg
														className="animate-spin h-5 w-5 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24">
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"></circle>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
													</svg>
													<span>Inscription en cours...</span>
												</div>
											) : (
												<div className="flex items-center justify-center space-x-2">
													<svg
														className="w-5 h-5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
														/>
													</svg>
													<span>S'inscrire à la newsletter</span>
												</div>
											)}
										</span>
									</button>

									{message && (
										<div
											className={`p-4 rounded-lg shadow-sm ${
												message.includes("Erreur")
													? "bg-red-600/10 text-red-700 border border-red-600/30"
													: "bg-alpine-green/10 text-alpine-green border border-alpine-green/30"
											}`}>
											<div className="flex items-center space-x-2">
												{message.includes("Erreur") ? (
													<svg
														className="w-5 h-5 text-red-700"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
												) : (
													<svg
														className="w-5 h-5 text-alpine-green"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M5 13l4 4L19 7"
														/>
													</svg>
												)}
												<span>{message}</span>
											</div>
										</div>
									)}
								</form>

								<div className="mt-6 text-center text-sm text-stone-gray/80">
									<p>* Vous pouvez vous désinscrire à tout moment</p>
									<p className="mt-2">
										Vos données personnelles sont protégées selon le RGPD
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
