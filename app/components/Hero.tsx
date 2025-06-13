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
			<div className="absolute inset-0 bg-gradient-to-br from-lake-blue/50 via-mountain-blue/40 to-deep-night/70"></div>

			{/* Effets décoratifs d'ambiance enrichis */}
			<div className="absolute inset-0 opacity-15 pointer-events-none">
				<div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-sunset-orange to-lake-turquoise rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-lake-turquoise to-sunset-orange rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "2s" }}></div>
				<div
					className="absolute top-1/3 left-1/4 w-24 h-24 bg-morning-mist/40 rounded-full blur-2xl animate-pulse"
					style={{ animationDelay: "4s" }}></div>
				<div
					className="absolute bottom-1/4 left-3/4 w-32 h-32 bg-sunset-orange/30 rounded-full blur-2xl animate-pulse"
					style={{ animationDelay: "6s" }}></div>
			</div>

			{/* Ombres animées sur le lac */}
			<div className="absolute top-1/4 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
				{/* Ombre 1 - grande ombre qui traverse lentement */}
				<div
					className="absolute top-1/4 w-96 h-80 bg-black/35 rounded-full blur-2xl opacity-80"
					style={{
						animation: "shadowFloat1 25s ease-in-out infinite",
						animationDelay: "0s",
					}}></div>

				{/* Ombre 2 - ombre moyenne qui va dans l'autre sens */}
				<div
					className="absolute top-1/2 w-80 h-60 bg-deep-night/40 rounded-full blur-xl opacity-70"
					style={{
						animation: "shadowFloat2 30s ease-in-out infinite",
						animationDelay: "8s",
					}}></div>

				{/* Ombre 3 - petite ombre rapide */}
				<div
					className="absolute top-1/3 w-60 h-40 bg-mountain-blue/45 rounded-full blur-lg opacity-60"
					style={{
						animation: "shadowFloat3 20s ease-in-out infinite",
						animationDelay: "15s",
					}}></div>

				{/* Ombre 4 - ombre allongée qui glisse */}
				<div
					className="absolute top-2/3 w-120 h-32 bg-black/30 rounded-full blur-xl opacity-85"
					style={{
						animation: "shadowFloat4 35s linear infinite",
						animationDelay: "5s",
					}}></div>

				{/* Ombre 5 - nouvelle ombre pour plus d'effet */}
				<div
					className="absolute top-1/6 w-72 h-48 bg-slate-800/35 rounded-full blur-2xl opacity-75"
					style={{
						animation: "shadowFloat5 28s ease-in-out infinite",
						animationDelay: "12s",
					}}></div>
			</div>

			{/* Styles des animations d'ombres */}
			<style jsx>{`
				@keyframes shadowFloat1 {
					0% {
						transform: translateX(-100px) translateY(0px) scale(0.8);
					}
					25% {
						transform: translateX(20vw) translateY(-10px) scale(1.1);
					}
					50% {
						transform: translateX(60vw) translateY(5px) scale(0.9);
					}
					75% {
						transform: translateX(90vw) translateY(-5px) scale(1);
					}
					100% {
						transform: translateX(110vw) translateY(0px) scale(0.8);
					}
				}

				@keyframes shadowFloat2 {
					0% {
						transform: translateX(110vw) translateY(0px) scale(1);
					}
					30% {
						transform: translateX(70vw) translateY(-15px) scale(0.8);
					}
					60% {
						transform: translateX(30vw) translateY(8px) scale(1.2);
					}
					100% {
						transform: translateX(-80px) translateY(0px) scale(1);
					}
				}

				@keyframes shadowFloat3 {
					0% {
						transform: translateX(-60px) translateY(0px) scale(0.9) rotate(0deg);
					}
					40% {
						transform: translateX(40vw) translateY(-20px) scale(1.1)
							rotate(5deg);
					}
					80% {
						transform: translateX(80vw) translateY(10px) scale(0.7)
							rotate(-3deg);
					}
					100% {
						transform: translateX(105vw) translateY(0px) scale(0.9) rotate(0deg);
					}
				}

				@keyframes shadowFloat4 {
					0% {
						transform: translateX(-150px) translateY(0px) scaleX(0.8) scaleY(1);
					}
					50% {
						transform: translateX(50vw) translateY(-8px) scaleX(1.3) scaleY(0.8);
					}
					100% {
						transform: translateX(110vw) translateY(0px) scaleX(0.8) scaleY(1);
					}
				}

				@keyframes shadowFloat5 {
					0% {
						transform: translateX(-120px) translateY(10px) scale(0.9)
							rotate(-2deg);
					}
					35% {
						transform: translateX(25vw) translateY(-25px) scale(1.2)
							rotate(3deg);
					}
					70% {
						transform: translateX(75vw) translateY(15px) scale(0.8)
							rotate(-1deg);
					}
					100% {
						transform: translateX(115vw) translateY(5px) scale(0.9) rotate(2deg);
					}
				}
			`}</style>

			<div className="container mx-auto px-4 pt-8 md:pt-12 lg:pt-16 pb-8 relative z-10 flex flex-col min-h-screen">
				{/* Section auteur en haut - améliorée esthétiquement */}
				<div className="relative mb-8 md:mb-12">
					{/* Effets décoratifs autour de la section auteur - enrichis */}
					<div className="absolute inset-0 -inset-20 opacity-25">
						<div className="absolute top-0 left-0 w-24 h-24 border-2 border-sunset-orange/60 rounded-full animate-pulse shadow-lg"></div>
						<div
							className="absolute top-6 right-12 w-16 h-16 border border-lake-turquoise/70 rounded-full animate-pulse shadow-md"
							style={{ animationDelay: "1s" }}></div>
						<div
							className="absolute bottom-4 left-1/3 w-12 h-12 bg-morning-mist/40 rounded-full blur-sm animate-pulse shadow-sm"
							style={{ animationDelay: "2s" }}></div>
						<div
							className="absolute top-1/2 right-1/4 w-8 h-8 bg-sunset-orange/50 rounded-full blur-sm animate-pulse"
							style={{ animationDelay: "3s" }}></div>
					</div>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 relative">
						{/* Photo de l'auteur avec effets améliorés et contraste renforcé */}
						<div className="flex-shrink-0 relative">
							{/* Halos multiples renforcés autour de la photo */}
							<div className="absolute inset-0 -inset-6 bg-gradient-to-r from-sunset-orange/40 to-lake-turquoise/40 rounded-full blur-2xl animate-pulse"></div>
							<div className="absolute inset-0 -inset-4 bg-gradient-to-br from-lake-turquoise/30 to-sunset-orange/30 rounded-full blur-xl"></div>
							<div className="absolute inset-0 -inset-2 bg-sunset-orange/20 rounded-full blur-lg"></div>

							{/* Cadre décoratif avec bordure gradient plus marquée */}
							<div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gradient-to-r from-sunset-orange via-lake-turquoise to-sunset-orange shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-3xl">
								<div className="absolute inset-0 bg-gradient-to-br from-sunset-orange/25 to-lake-turquoise/25 rounded-full"></div>
								{/* Bordure gradient visible */}
								<div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-sunset-orange via-lake-turquoise to-sunset-orange bg-clip-border"></div>
								<div className="absolute inset-1 rounded-full bg-white/10 backdrop-blur-sm"></div>
								<Image
									src="/images/hero/xavier-portrait.png"
									alt="Xavier Aymeric Frey"
									fill
									sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 176px"
									className="object-cover object-center scale-110 relative z-10 rounded-full"
									style={{ objectPosition: "center 20%" }}
									priority
								/>
							</div>

							{/* Points décoratifs autour de la photo - enrichis */}
							<div
								className="absolute -top-3 -right-3 w-5 h-5 bg-lake-turquoise rounded-full animate-bounce shadow-lg"
								style={{ animationDelay: "0.5s" }}></div>
							<div
								className="absolute -bottom-3 -left-3 w-4 h-4 bg-sunset-orange rounded-full animate-bounce shadow-md"
								style={{ animationDelay: "1.5s" }}></div>
							<div
								className="absolute top-1/4 -right-6 w-3 h-3 bg-morning-mist rounded-full animate-bounce shadow-sm"
								style={{ animationDelay: "2.5s" }}></div>
						</div>

						{/* Nom de l'auteur avec design amélioré et lisibilité renforcée */}
						<div className="text-center relative">
							{/* Ornements décoratifs enrichis */}
							<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-sunset-orange/70 to-transparent rounded-full shadow-lg"></div>
							<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-lake-turquoise/70 to-transparent rounded-full shadow-lg"></div>

							{/* Arrière-plan décoratif pour le nom - plus opaque et avec bordure */}
							<div className="absolute inset-0 -inset-8 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"></div>
							<div className="absolute inset-0 -inset-8 bg-gradient-to-br from-sunset-orange/10 to-lake-turquoise/10 rounded-2xl"></div>

							<div className="relative z-10 px-8 py-6">
								<h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-snow-white font-bold drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)] mb-4">
									Xavier Aymeric Frey
								</h1>

								{/* Ligne décorative améliorée avec bordure gradient */}
								<div className="relative w-28 sm:w-36 md:w-44 h-1 mx-auto mb-4">
									<div className="absolute inset-0 bg-gradient-to-r from-sunset-orange via-lake-turquoise to-sunset-orange rounded-full shadow-xl"></div>
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full animate-pulse"></div>
									<div className="absolute -inset-1 bg-gradient-to-r from-sunset-orange/30 via-lake-turquoise/30 to-sunset-orange/30 rounded-full blur-sm"></div>
								</div>

								{/* Sous-titre subtil avec meilleur contraste */}
								<p className="text-morning-mist/90 text-sm md:text-base font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
									Auteur de thriller policier
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Section livre au centre - livre plus grand et proportions harmonisées */}
				<div className="flex-1 flex items-center justify-center">
					<div className="text-center">
						{/* Livre avec halo amélioré et taille plus grande */}
						<div className="relative inline-block">
							{/* Halo subtil et ombre réaliste */}
							<div className="absolute inset-0 -inset-8">
								{/* Halo subtil bleu-turquoise seulement */}
								<div className="absolute inset-0 bg-gradient-to-r from-lake-turquoise/20 via-lake-turquoise/15 to-lake-turquoise/20 blur-2xl transform scale-110 rounded-[40%] animate-pulse"></div>
								{/* Halo externe très léger */}
								<div className="absolute inset-0 bg-lake-turquoise/10 blur-xl transform scale-[1.15] rounded-[45%]"></div>
							</div>

							{/* Ombre réaliste orangée sous le livre */}
							<div className="absolute inset-0 -inset-4">
								{/* Ombre orangée principale sous le livre */}
								<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-48 h-24 bg-gradient-to-r from-transparent via-sunset-orange/40 to-transparent blur-xl rounded-full"></div>
								{/* Ombre orangée secondaire plus diffuse */}
								<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 w-56 h-20 bg-gradient-to-r from-transparent via-sunset-orange/25 to-transparent blur-2xl rounded-full"></div>
								{/* Lueur orangée sur le sol */}
								<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16 w-64 h-16 bg-gradient-to-r from-sunset-orange/15 via-sunset-orange/20 to-sunset-orange/15 blur-3xl rounded-full"></div>
							</div>

							{/* Ombres très améliorées du livre - plus prononcées */}
							<div className="absolute inset-0 -inset-6">
								{/* Ombre principale (la plus proche) - renforcée */}
								<div className="absolute inset-0 bg-black/40 blur-xl transform translate-y-8 translate-x-6 scale-110 rounded-xl"></div>
								{/* Ombre secondaire (plus diffuse) */}
								<div className="absolute inset-0 bg-black/25 blur-2xl transform translate-y-12 translate-x-8 scale-115 rounded-xl"></div>
								{/* Ombre d'ambiance (très diffuse) */}
								<div className="absolute inset-0 bg-black/15 blur-3xl transform translate-y-16 translate-x-10 scale-120 rounded-xl"></div>
								{/* Ombre de contact (au sol) - plus prononcée */}
								<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 w-40 h-12 bg-black/35 blur-xl rounded-full"></div>
							</div>

							{/* Conteneur du livre plus grand */}
							<div
								onClick={() => navigateWithTransition("/boutique")}
								className="relative cursor-pointer z-10 transform hover:scale-110 transition-all duration-700 hover:rotate-2 hover:-translate-y-4 hover:shadow-3xl"
								role="link"
								aria-label="Voir le livre dans la boutique">
								<div className="relative rounded-xl overflow-hidden">
									<Image
										src="/images/book/ombre-sur-le-lac.webp"
										alt="Ombres sur le lac - Couverture du livre - Cliquez pour accéder à la boutique"
										width={320}
										height={480}
										sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 360px"
										className="w-64 h-auto sm:w-80 md:w-90"
										priority
									/>
									{/* Reflet subtil sur le livre - amélioré */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-50 rounded-xl"></div>
									{/* Reflet animé */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 rounded-xl transform -skew-x-12 animate-pulse"></div>
									{/* Ombre interne pour plus de profondeur */}
									<div className="absolute inset-0 shadow-inner rounded-xl"></div>
									{/* Bordure subtile */}
									<div className="absolute inset-0 border border-white/10 rounded-xl"></div>
								</div>
							</div>
						</div>

						{/* Informations du livre */}
						<div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
								<div className="flex flex-col items-center">
									<span className="text-3xl md:text-4xl font-bold text-sunset-orange drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
										11,50 €
									</span>
									<span className="text-sm md:text-base text-snow-white/90 mt-1 font-medium">
										TTC FRANCE
									</span>
								</div>
								<div className="hidden sm:block h-16 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
								<div className="w-full sm:w-px h-px sm:h-0 bg-gradient-to-r from-transparent via-white/40 to-transparent sm:hidden"></div>
								<div className="flex flex-col items-center">
									<span className="text-lg md:text-xl font-medium text-snow-white/95">
										Roman policier
									</span>
									<span className="text-sm md:text-base text-snow-white/85 mt-1">
										Sortie prévue : été 2025
									</span>
								</div>
							</div>
							<div className="text-sm md:text-base text-snow-white/80 text-center mt-3">
								<span>ISBN 979-1-041-54523-0</span>
							</div>
							<button
								onClick={() => navigateWithTransition("/boutique")}
								className="mt-4 md:mt-6 px-8 py-3 bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white font-medium rounded-lg button-hover shadow-xl cursor-pointer text-base md:text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
								Pré-commander
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
