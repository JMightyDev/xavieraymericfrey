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

			{/* Overlay avec dégradé encore plus léger pour plus de luminosité */}
			<div className="absolute inset-0 bg-gradient-to-br from-lake-blue/20 via-mountain-blue/15 to-deep-night/35"></div>

			{/* Effets décoratifs d'ambiance enrichis */}
			<div className="absolute inset-0 opacity-10 pointer-events-none">
				<div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-red-600 to-gray-800 rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-gray-800 to-red-600 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "2s" }}></div>
				<div
					className="absolute top-1/3 left-1/4 w-24 h-24 bg-gray-700/40 rounded-full blur-2xl animate-pulse"
					style={{ animationDelay: "4s" }}></div>
				<div
					className="absolute bottom-1/4 left-3/4 w-32 h-32 bg-red-600/30 rounded-full blur-2xl animate-pulse"
					style={{ animationDelay: "6s" }}></div>
			</div>

			{/* Ombres humaines animées sur le lac */}
			<div className="absolute top-1/3 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
				{/* Ombre 1 - silhouette humaine grande qui traverse lentement */}
				<div
					className="absolute top-1/3 w-32 h-96 bg-black/25 rounded-full blur-xl opacity-50"
					style={{
						animation: "shadowFloat1 25s ease-in-out infinite",
						animationDelay: "0s",
					}}></div>

				{/* Ombre 2 - silhouette humaine moyenne qui va dans l'autre sens */}
				<div
					className="absolute top-1/2 w-28 h-80 bg-black/20 rounded-full blur-lg opacity-45"
					style={{
						animation: "shadowFloat2 30s ease-in-out infinite",
						animationDelay: "12s",
					}}></div>

				{/* Ombre 3 - silhouette humaine distante */}
				<div
					className="absolute top-2/5 w-24 h-64 bg-black/15 rounded-full blur-lg opacity-40"
					style={{
						animation: "shadowFloat4 35s linear infinite",
						animationDelay: "20s",
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

			<div className="container mx-auto px-4 pt-12 md:pt-16 lg:pt-32 pb-12 relative z-10 flex flex-col min-h-screen">
				{/* Section auteur repositionnée en haut à gauche - carte de visite élégante */}
				<div className="absolute top-16 lg:top-20 left-6 z-10 hidden lg:block">
					<div className="w-[420px]">
						<div className="relative">
							{/* Arrière-plan moderne avec effet glassmorphism renforcé */}
							<div className="absolute -inset-4 bg-gradient-to-br from-white/8 via-white/12 to-white/6 backdrop-blur-md rounded-2xl border border-white/15 shadow-2xl"></div>
							<div className="absolute -inset-4 bg-gradient-to-br from-red-600/8 via-transparent to-gray-800/8 rounded-2xl"></div>

							<div className="relative z-10 flex items-center gap-8 px-6 py-6">
								{/* Photo de l'auteur avec cadre élégant - taille agrandie */}
								<div className="flex-shrink-0 relative">
									{/* Cadre décoratif moderne */}
									<div className="absolute -inset-3 bg-gradient-to-br from-white/25 via-white/10 to-white/25 rounded-full blur-sm"></div>
									<div className="absolute -inset-2 bg-gradient-to-br from-red-600/15 to-gray-800/15 rounded-full"></div>

									{/* Photo avec bordure élégante - taille agrandie */}
									<div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/25 shadow-xl transition-all duration-700 hover:scale-105 hover:border-white/40">
										<div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/8 rounded-full"></div>
										<Image
											src="/images/hero/xavier-portrait.png"
											alt="Xavier Aymeric Frey"
											fill
											sizes="112px"
											className="object-cover object-center scale-110 rounded-full transition-all duration-700 hover:scale-115"
											style={{ objectPosition: "center 20%" }}
											priority
										/>
									</div>
								</div>

								{/* Informations auteur - layout horizontal moderne */}
								<div className="flex-1 space-y-3 pl-2">
									<div>
										<h1 className="font-serif text-2xl text-snow-white font-bold tracking-wide leading-tight whitespace-nowrap">
											<span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-lg">
												Xavier Aymeric Frey
											</span>
										</h1>

										{/* Ligne décorative sous le nom */}
										<div className="w-20 h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-transparent mt-3 rounded-full"></div>
									</div>

									<p className="text-morning-mist/95 text-base font-medium tracking-wide">
										<span className="bg-gradient-to-r from-morning-mist/95 to-morning-mist/80 bg-clip-text text-transparent">
											Auteur de thriller policier
										</span>
									</p>

									{/* Badge ou élément décoratif supplémentaire */}
									<div className="flex items-center gap-2 mt-3">
										<div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
										<span className="text-white/80 text-sm font-medium tracking-wider uppercase">
											Premier roman
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Section livre parfaitement centrée - sans auteur */}
				<div className="flex-1 flex items-center justify-center relative">
					<div className="w-full max-w-4xl mx-auto">
						<div className="flex justify-center">
							<div className="text-center">
								{/* Livre avec proportions harmonieuses - agrandi de 120% */}
								<div className="relative inline-block mt-4 lg:-mt-6">
									{/* Halo subtil et ombre réaliste - proportions ajustées pour la nouvelle taille */}
									<div className="absolute -inset-8">
										{/* Halo subtil rouge - ajusté pour nouvelle taille */}
										<div className="absolute inset-0 bg-gradient-to-r from-red-600/15 via-red-500/10 to-red-600/15 blur-xl transform scale-110 rounded-[40%] animate-pulse"></div>
										{/* Halo externe léger - ajusté */}
										<div className="absolute inset-0 bg-gray-800/8 blur-lg transform scale-115 rounded-[45%]"></div>
									</div>

									{/* Ombre réaliste rouge sous le livre - proportions ajustées pour nouvelle taille */}
									<div className="absolute -inset-6">
										{/* Ombre rouge principale - agrandie */}
										<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-48 h-24 bg-gradient-to-r from-transparent via-red-600/30 to-transparent blur-lg rounded-full"></div>
										{/* Ombre rouge secondaire - agrandie */}
										<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 w-56 h-20 bg-gradient-to-r from-transparent via-red-600/20 to-transparent blur-xl rounded-full"></div>
										{/* Lueur rouge sur le sol - agrandie */}
										<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 w-64 h-16 bg-gradient-to-r from-red-600/10 via-red-600/15 to-red-600/10 blur-2xl rounded-full"></div>
									</div>

									{/* Ombres du livre - proportions équilibrées pour nouvelle taille */}
									<div className="absolute -inset-6">
										{/* Ombre principale - agrandie */}
										<div className="absolute inset-0 bg-black/30 blur-lg transform translate-y-8 translate-x-5 scale-110 rounded-lg"></div>
										{/* Ombre secondaire - agrandie */}
										<div className="absolute inset-0 bg-black/20 blur-xl transform translate-y-10 translate-x-7 scale-115 rounded-lg"></div>
										{/* Ombre d'ambiance - agrandie */}
										<div className="absolute inset-0 bg-black/10 blur-2xl transform translate-y-12 translate-x-9 scale-120 rounded-lg"></div>
									</div>

									{/* Conteneur du livre - taille agrandie à 120% avec animation douce */}
									<div
										onClick={() => navigateWithTransition("/boutique")}
										className="relative cursor-pointer z-10 transition-all duration-1000 ease-out hover:scale-105 hover:-translate-y-2 hover:brightness-110 group"
										role="link"
										aria-label="Voir le livre dans la boutique">
										<div className="relative rounded-lg overflow-hidden transform transition-transform duration-1000">
											<Image
												src="/images/book/ombre-sur-le-lac.webp"
												alt="Ombres sur le lac - Couverture du livre - Cliquez pour accéder à la boutique"
												width={360}
												height={540}
												sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, (max-width: 1024px) 384px, 432px"
												className="w-60 sm:w-72 md:w-84 lg:w-96 xl:w-108 transition-all duration-1000"
												priority
											/>
											{/* Reflet subtil sur le livre */}
											<div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-transparent opacity-40 rounded-lg transition-opacity duration-1000 group-hover:opacity-60"></div>
											{/* Reflet animé qui apparaît au hover */}
											<div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/8 to-transparent opacity-0 rounded-lg transform -skew-x-12 transition-all duration-1000 group-hover:opacity-50 group-hover:translate-x-1"></div>
											{/* Ombre interne pour profondeur */}
											<div className="absolute inset-0 shadow-inner rounded-lg"></div>
											{/* Bordure subtile */}
											<div className="absolute inset-0 border border-white/8 rounded-lg transition-all duration-1000 group-hover:border-white/15"></div>
										</div>
									</div>
								</div>

								{/* Informations du livre - proportions ajustées */}
								<div className="mt-6 md:mt-8 lg:mt-10 space-y-4 md:space-y-6">
									<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
										<div className="flex flex-col items-center">
											<span className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 drop-shadow-lg">
												11,50 €
											</span>
											<span className="text-sm md:text-base text-snow-white/90 mt-1 font-medium">
												TTC FRANCE
											</span>
										</div>
										<div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
										<div className="w-full sm:w-px h-px sm:h-0 bg-gradient-to-r from-transparent via-white/40 to-transparent sm:hidden"></div>
										<div className="flex flex-col items-center">
											<span className="text-lg md:text-xl lg:text-2xl font-medium text-snow-white/95">
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
										className="mt-6 md:mt-8 relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 md:px-12 py-3 md:py-4 rounded-md button-hover shadow-lg font-medium text-base md:text-lg cursor-pointer group">
										<div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
										<span className="relative z-10 flex items-center gap-2 justify-center">
											<svg
												className="w-4 h-4 md:w-5 md:h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
												/>
											</svg>
											Pré-commander
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
