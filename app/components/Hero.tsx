"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePageTransition } from "../hooks/usePageTransition";

export default function Hero() {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const { navigateWithTransition } = usePageTransition();

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.pageYOffset;

			// Parallax pour l'arrière-plan - plus subtil
			if (backgroundRef.current) {
				const backgroundRate = scrolled * -0.2; // Ajusté à -0.2
				backgroundRef.current.style.transform = `translateY(${backgroundRate}px)`;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Initial call
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="min-h-screen flex items-center justify-center bg-deep-night text-white relative overflow-hidden">
			{/* Arrière-plan avec parallax subtil et taille raisonnable */}
			<div
				ref={backgroundRef}
				className="absolute inset-0 w-full h-[135%] -top-[15%] will-change-transform"
				style={{
					backgroundImage: "url(/images/hero/background.png)",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>

			{/* Overlay avec dégradé thématique */}
			<div className="absolute inset-0 bg-gradient-to-br from-lake-blue/40 via-mountain-blue/30 to-deep-night/60"></div>

			{/* Suppression des orbes pour un look plus naturel */}

			<div className="container mx-auto px-4 py-16 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					{/* Image de l'auteur stable */}
					<div className="flex-shrink-0">
						<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-sunset-orange shadow-2xl card-hover">
							<Image
								src="/images/hero/xavier-portrait.png"
								alt="Xavier Aymeric Frey"
								fill
								sizes="(max-width: 768px) 256px, 320px"
								className="object-cover"
								priority
							/>
						</div>
					</div>

					{/* Contenu textuel avec animations */}
					<div className="text-center lg:text-left animate-on-scroll">
						<h1 className="font-serif text-5xl md:text-7xl mb-4 text-snow-white">
							Xavier Aymeric Frey
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-sunset-orange to-lake-turquoise mx-auto lg:mx-0 my-8 transition-all duration-500 hover:w-32 hover:shadow-lg hover:shadow-sunset-orange/50"></div>
						<h2 className="text-3xl md:text-4xl font-serif mb-8 text-morning-mist">
							Ombres sur le lac
						</h2>
						<p
							className="text-xl md:text-2xl mb-12 text-snow-white drop-shadow-2xl"
							style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
							Premier roman
						</p>
						<div className="flex gap-6 justify-center lg:justify-start flex-wrap">
							<button
								onClick={() => navigateWithTransition("/boutique")}
								className="bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white px-8 py-3 rounded-md button-hover shadow-lg cursor-pointer">
								Commander
							</button>
							<button
								onClick={() => navigateWithTransition("/contact")}
								className="border-2 border-morning-mist hover:bg-morning-mist/20 hover:border-lake-turquoise text-morning-mist hover:text-white px-8 py-3 rounded-md button-hover cursor-pointer">
								Contact
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
