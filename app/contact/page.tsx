"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
	return (
		<div>
			<Header />
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

			<main className="min-h-screen bg-gradient-to-b from-snow-white via-morning-mist/10 to-lake-blue/5">
				{/* Hero section pour la page contact */}
				<section className="bg-gradient-to-br from-mountain-blue to-deep-night text-white py-20">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-5xl md:text-6xl font-serif mb-6 text-snow-white animate-on-scroll">
							Contactez l'auteur
						</h1>
						<p className="text-xl md:text-2xl text-morning-mist max-w-2xl mx-auto leading-relaxed animate-on-scroll">
							Vous avez une question sur "Ombres sur le lac" ? Vous souhaitez
							organiser une rencontre ou une séance de dédicace ? N'hésitez pas
							à me contacter.
						</p>
					</div>
				</section>

				{/* Section formulaire */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<div className="grid md:grid-cols-2 gap-12 items-start">
								{/* Informations de contact */}
								<div className="bg-snow-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-morning-mist/30 animate-on-scroll">
									<h2 className="text-2xl font-serif mb-6 text-mountain-blue">
										Informations de contact
									</h2>

									<div className="space-y-6">
										<div className="flex items-start space-x-4">
											<div className="w-12 h-12 bg-sunset-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
												<svg
													className="w-6 h-6 text-sunset-orange"
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
											</div>
											<div>
												<h3 className="font-medium text-mountain-blue mb-1">
													Email
												</h3>
												<p className="text-stone-gray">contact@jmighty.fr</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-12 h-12 bg-lake-turquoise/20 rounded-full flex items-center justify-center flex-shrink-0">
												<svg
													className="w-6 h-6 text-lake-turquoise"
													fill="currentColor"
													viewBox="0 0 24 24">
													<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
												</svg>
											</div>
											<div>
												<h3 className="font-medium text-mountain-blue mb-1">
													Réseaux sociaux
												</h3>
												<p className="text-stone-gray">@xavieraymeric_frey</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="w-12 h-12 bg-alpine-green/20 rounded-full flex items-center justify-center flex-shrink-0">
												<svg
													className="w-6 h-6 text-alpine-green"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											</div>
											<div>
												<h3 className="font-medium text-mountain-blue mb-1">
													Délai de réponse
												</h3>
												<p className="text-stone-gray">Sous 48h en général</p>
											</div>
										</div>
									</div>

									<div className="mt-8 p-4 bg-gradient-to-r from-sunset-orange/10 to-lake-turquoise/10 rounded-lg border border-sunset-orange/20">
										<p className="text-sm text-mountain-blue">
											<strong>Séances de dédicace :</strong> N'hésitez pas à me
											contacter pour organiser une rencontre dans votre
											librairie, bibliothèque ou événement littéraire.
										</p>
									</div>
								</div>

								{/* Formulaire de contact */}
								<div
									className="animate-on-scroll"
									style={{ animationDelay: "0.2s" }}>
									<ContactForm />
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
