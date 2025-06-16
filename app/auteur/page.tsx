"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Biography from "../components/Biography";

export default function AuteurPage() {
	return (
		<div className="pt-16">
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
				{/* Hero section pour la page auteur */}
				<section className="bg-gradient-to-br from-mountain-blue to-deep-night text-white py-12 md:py-20">
					<div className="container mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 text-snow-white animate-on-scroll">
							Xavier Aymeric Frey
						</h1>
						<p className="text-lg md:text-xl lg:text-2xl text-morning-mist max-w-2xl mx-auto leading-relaxed animate-on-scroll">
							Découvrez l'homme derrière "Ombres sur le lac", un thriller
							policier qui se déroule à Annecy, ses inspirations et son parcours
							d'auteur.
						</p>
					</div>
				</section>

				{/* Section biographie */}
				<Biography />
			</main>
			<Footer />
		</div>
	);
}
