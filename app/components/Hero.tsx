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
			if (backgroundRef.current) {
				const backgroundRate = scrolled * -0.2;
				backgroundRef.current.style.transform = `translateY(${backgroundRate}px)`;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="min-h-screen flex flex-col bg-deep-night text-white relative overflow-hidden">
			{/* Arrière-plan avec parallax */}
			<div
				ref={backgroundRef}
				className="absolute inset-0 w-full h-[135%] -top-[15%] will-change-transform"
				style={{
					backgroundImage: "url(/images/hero/background.png)",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>

			{/* Overlay avec dégradé plus prononcé pour améliorer la lisibilité */}
			<div className="absolute inset-0 bg-gradient-to-br from-lake-blue/40 via-mountain-blue/30 to-deep-night/60"></div>

			<div className="container mx-auto px-4 pt-12 md:pt-20 pb-8 relative z-10 flex flex-col h-screen">
				{/* Section auteur en haut */}
				<div className="flex items-center justify-center gap-6 mb-8">
					{/* Photo de l'auteur */}
					<div className="flex-shrink-0">
						<div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-3 border-sunset-orange shadow-xl transition-transform duration-500 hover:scale-110">
							<Image
								src="/images/hero/xavier-portrait.png"
								alt="Xavier Aymeric Frey"
								fill
								sizes="(max-width: 768px) 128px, 160px"
								className="object-cover object-center scale-110"
								style={{ objectPosition: "center 20%" }}
								priority
							/>
						</div>
					</div>

					{/* Nom de l'auteur avec meilleure lisibilité */}
					<div className="text-center">
						<h1 className="font-serif text-3xl md:text-5xl text-snow-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
							Xavier Aymeric Frey
						</h1>
						<div className="w-32 h-1 bg-sunset-orange mx-auto mt-4 shadow-lg"></div>
					</div>
				</div>

				{/* Section livre au centre */}
				<div className="flex-1 flex items-center justify-center -mt-8">
					<div className="text-center">
						{/* Livre avec halo */}
						<div className="relative inline-block">
							{/* Halo */}
							<div className="absolute inset-0 bg-sunset-orange/20 blur-2xl transform scale-[0.85] rounded-[30%]"></div>
							{/* Conteneur du livre avec lien */}
							<div
								onClick={() => navigateWithTransition("/boutique")}
								className="relative w-80 h-[480px] md:w-96 md:h-[576px] transform hover:scale-105 transition-transform duration-500 cursor-pointer"
								role="link"
								aria-label="Voir le livre dans la boutique">
								<Image
									src="/images/book/ombre-sur-le-lac.webp"
									alt="Ombres sur le lac - Couverture du livre - Cliquez pour accéder à la boutique"
									fill
									sizes="(max-width: 768px) 320px, 384px"
									className="object-contain"
									priority
								/>
							</div>
						</div>
						{/* Informations du livre */}
						<div className="mt-6 space-y-3">
							<div className="flex items-center justify-center space-x-6">
								<div className="flex flex-col items-center">
									<span className="text-3xl font-bold text-sunset-orange drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
										11,50 €
									</span>
									<span className="text-sm text-snow-white/80 mt-1">
										TTC FRANCE
									</span>
								</div>
								<div className="h-12 w-px bg-white/30"></div>
								<div className="flex flex-col items-center">
									<span className="text-lg font-medium text-snow-white/90">
										Roman policier
									</span>
									<span className="text-sm text-snow-white/80 mt-1">
										Sortie prévue : été 2025
									</span>
								</div>
							</div>
							<div className="text-sm text-snow-white/70 text-center mt-2">
								<span>ISBN 979-1-041-54523-0</span>
							</div>
							<button
								onClick={() => navigateWithTransition("/boutique")}
								className="mt-4 px-6 py-2 bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white font-medium rounded-md button-hover shadow-lg cursor-pointer">
								Pré-commander
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
