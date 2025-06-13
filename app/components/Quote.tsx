"use client";

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { usePageTransition } from "../hooks/usePageTransition";

export default function Quote() {
	const { ref: quoteRef1, isVisible: isVisible1 } = useScrollAnimation();
	const { ref: quoteRef2, isVisible: isVisible2 } = useScrollAnimation();
	const { ref: quoteRef3, isVisible: isVisible3 } = useScrollAnimation();
	const { navigateWithTransition } = usePageTransition();

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-deep-night via-mountain-blue to-lake-blue/80 text-center relative overflow-hidden">
			{/* Effets décoratifs de fond */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-red-600 to-gray-800 blur-3xl animate-pulse"></div>
				<div
					className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-gray-800 to-red-600 blur-3xl animate-pulse"
					style={{ animationDelay: "2s" }}></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-morning-mist/30 blur-2xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Première citation avec cadre décoratif */}
				<div
					ref={quoteRef1 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible1 ? "visible" : ""} mb-16 relative`}>
					{/* Guillemets décoratifs */}
					<div className="absolute -top-6 -left-4 md:-left-8 text-6xl md:text-8xl text-red-600/40 font-serif">
						"
					</div>
					<div className="absolute -bottom-6 -right-4 md:-right-8 text-6xl md:text-8xl text-red-600/40 font-serif rotate-180">
						"
					</div>

					<div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/30 shadow-2xl">
						<blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-white leading-relaxed max-w-4xl mx-auto">
							Dans chaque mot se cache un univers. Chaque phrase est un voyage
							vers l'inconnu, et chaque page une invitation à explorer les
							profondeurs de l'âme humaine.
						</blockquote>
					</div>
				</div>

				{/* Séparateur décoratif */}
				<div className="flex items-center justify-center mb-16">
					<div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-24 md:w-32"></div>
					<div className="mx-4 w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
					<div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-24 md:w-32"></div>
				</div>

				{/* Deuxième citation avec cadre décoratif */}
				<div
					ref={quoteRef2 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible2 ? "visible" : ""} mb-16 relative`}
					style={{ animationDelay: "0.3s" }}>
					{/* Guillemets décoratifs */}
					<div className="absolute -top-6 -left-4 md:-left-8 text-6xl md:text-8xl text-red-600/40 font-serif">
						"
					</div>
					<div className="absolute -bottom-6 -right-4 md:-right-8 text-6xl md:text-8xl text-red-600/40 font-serif rotate-180">
						"
					</div>

					<div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/30 shadow-2xl">
						<blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-white leading-relaxed max-w-4xl mx-auto">
							Les rancœurs enfouies dans les montagnes peuvent soudainement
							éclater en une vengeance impitoyable, révélant ainsi de sombres
							secrets.
						</blockquote>
					</div>
				</div>

				{/* Séparateur décoratif 2 */}
				<div className="flex items-center justify-center mb-16">
					<div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-20 md:w-28"></div>
					<div className="mx-4 flex space-x-1">
						<div
							className="w-2 h-2 rounded-full bg-red-600 animate-pulse"
							style={{ animationDelay: "0s" }}></div>
						<div
							className="w-2 h-2 rounded-full bg-red-600 animate-pulse"
							style={{ animationDelay: "0.5s" }}></div>
						<div
							className="w-2 h-2 rounded-full bg-red-600 animate-pulse"
							style={{ animationDelay: "1s" }}></div>
					</div>
					<div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent w-20 md:w-28"></div>
				</div>

				{/* Phrase de conclusion esthétique améliorée */}
				<div
					ref={quoteRef3 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible3 ? "visible" : ""} max-w-4xl mx-auto relative`}
					style={{ animationDelay: "0.6s" }}>
					<div
						onClick={() => navigateWithTransition("/boutique")}
						className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-xl p-10 md:p-12 border border-white/30 shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-white/10 hover:shadow-2xl">
						{/* Effet de pulsation sombre/clair plus visible */}
						<div
							className="absolute inset-0 bg-white/15 rounded-xl animate-pulse"
							style={{ animationDuration: "3s" }}></div>

						{/* Effet de lueur au survol - blanc/gris */}
						<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

						{/* Bordure qui s'intensifie au survol - blanche */}
						<div className="absolute inset-0 border border-white/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

						<div className="relative z-10">
							<p className="text-white text-xl md:text-2xl lg:text-3xl font-serif italic leading-relaxed text-center font-medium group-hover:text-gray-100 transition-colors duration-500">
								Êtes-vous prêt à plonger dans les mystères de l'âme humaine ?
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
