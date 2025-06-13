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

			<div className="container mx-auto px-4 pt-8 md:pt-12 lg:pt-20 pb-8 relative z-10 flex flex-col min-h-screen">
				{/* Section auteur en haut */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 md:mb-8">
					{/* Photo de l'auteur */}
					<div className="flex-shrink-0">
						<div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-3 border-sunset-orange shadow-xl transition-transform duration-500 hover:scale-110">
							<Image
								src="/images/hero/xavier-portrait.png"
								alt="Xavier Aymeric Frey"
								fill
								sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
								className="object-cover object-center scale-110"
								style={{ objectPosition: "center 20%" }}
								priority
							/>
						</div>
					</div>

					{/* Nom de l'auteur avec meilleure lisibilité */}
					<div className="text-center">
						<h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-snow-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
							Xavier Aymeric Frey
						</h1>
						<div className="w-24 sm:w-32 h-1 bg-sunset-orange mx-auto mt-2 md:mt-4 shadow-lg"></div>
					</div>
				</div>

				{/* Section livre au centre */}
				<div className="flex-1 flex items-center justify-center -mt-4 md:-mt-8">
					<div className="text-center">
						{/* Livre avec halo amélioré */}
						<div className="relative inline-block">
							{/* Halo multicouche amélioré */}
							<div className="absolute inset-0 -inset-8">
								{/* Halo principal */}
								<div className="absolute inset-0 bg-gradient-to-r from-sunset-orange/30 via-lake-turquoise/25 to-sunset-orange/30 blur-3xl transform scale-110 rounded-[40%] animate-pulse"></div>
								{/* Halo secondaire */}
								<div className="absolute inset-0 bg-sunset-orange/20 blur-2xl transform scale-[0.9] rounded-[35%]"></div>
								{/* Halo externe */}
								<div className="absolute inset-0 bg-lake-turquoise/15 blur-xl transform scale-[1.2] rounded-[45%]"></div>
								{/* Ring lumineux */}
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-sunset-orange/40 to-transparent blur-sm transform scale-105 rounded-[30%] opacity-60"></div>
							</div>
							{/* Conteneur du livre simple et propre */}
							<div
								onClick={() => navigateWithTransition("/boutique")}
								className="relative cursor-pointer z-10 transform hover:scale-105 transition-all duration-500 hover:rotate-1"
								role="link"
								aria-label="Voir le livre dans la boutique">
								<div className="relative rounded-xl overflow-hidden shadow-2xl">
									<Image
										src="/images/book/ombre-sur-le-lac.webp"
										alt="Ombres sur le lac - Couverture du livre - Cliquez pour accéder à la boutique"
										width={280}
										height={420}
										sizes="(max-width: 640px) 224px, (max-width: 768px) 280px, 320px"
										className="w-56 h-auto sm:w-70 md:w-80 drop-shadow-2xl"
										priority
									/>
								</div>
							</div>
						</div>
						{/* Informations du livre */}
						<div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
								<div className="flex flex-col items-center">
									<span className="text-2xl md:text-3xl font-bold text-sunset-orange drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
										11,50 €
									</span>
									<span className="text-xs md:text-sm text-snow-white/80 mt-1">
										TTC FRANCE
									</span>
								</div>
								<div className="hidden sm:block h-12 w-px bg-white/30"></div>
								<div className="w-full sm:w-px h-px sm:h-0 bg-white/30 sm:hidden"></div>
								<div className="flex flex-col items-center">
									<span className="text-base md:text-lg font-medium text-snow-white/90">
										Roman policier
									</span>
									<span className="text-xs md:text-sm text-snow-white/80 mt-1">
										Sortie prévue : été 2025
									</span>
								</div>
							</div>
							<div className="text-xs md:text-sm text-snow-white/70 text-center mt-2">
								<span>ISBN 979-1-041-54523-0</span>
							</div>
							<button
								onClick={() => navigateWithTransition("/boutique")}
								className="mt-3 md:mt-4 px-6 py-2 bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white font-medium rounded-md button-hover shadow-lg cursor-pointer text-sm md:text-base">
								Pré-commander
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
