"use client";

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Quote() {
	const { ref: quoteRef1, isVisible: isVisible1 } = useScrollAnimation();
	const { ref: quoteRef2, isVisible: isVisible2 } = useScrollAnimation();
	const { ref: quoteRef3, isVisible: isVisible3 } = useScrollAnimation();

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-deep-night via-mountain-blue to-lake-blue/80 text-center relative overflow-hidden">
			{/* Effets décoratifs de fond */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-lake-turquoise to-sunset-orange blur-3xl animate-pulse"></div>
				<div
					className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-sunset-orange to-lake-turquoise blur-3xl animate-pulse"
					style={{ animationDelay: "2s" }}></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-morning-mist/30 blur-2xl"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				{/* Première citation avec cadre décoratif */}
				<div
					ref={quoteRef1 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible1 ? "visible" : ""} mb-16 relative`}>
					{/* Guillemets décoratifs */}
					<div className="absolute -top-6 -left-4 md:-left-8 text-6xl md:text-8xl text-sunset-orange/30 font-serif">
						"
					</div>
					<div className="absolute -bottom-6 -right-4 md:-right-8 text-6xl md:text-8xl text-sunset-orange/30 font-serif rotate-180">
						"
					</div>

					<div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-morning-mist/20 shadow-2xl">
						<blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-morning-mist leading-relaxed max-w-4xl mx-auto">
							Dans chaque mot se cache un univers. Chaque phrase est un voyage
							vers l'inconnu, et chaque page une invitation à explorer les
							profondeurs de l'âme humaine.
						</blockquote>
					</div>
				</div>

				{/* Séparateur décoratif */}
				<div className="flex items-center justify-center mb-16">
					<div className="h-px bg-gradient-to-r from-transparent via-sunset-orange to-transparent w-24 md:w-32"></div>
					<div className="mx-4 w-3 h-3 rounded-full bg-sunset-orange animate-pulse"></div>
					<div className="h-px bg-gradient-to-r from-transparent via-lake-turquoise to-transparent w-24 md:w-32"></div>
				</div>

				{/* Deuxième citation avec cadre décoratif */}
				<div
					ref={quoteRef2 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible2 ? "visible" : ""} mb-16 relative`}
					style={{ animationDelay: "0.3s" }}>
					{/* Guillemets décoratifs */}
					<div className="absolute -top-6 -left-4 md:-left-8 text-6xl md:text-8xl text-lake-turquoise/30 font-serif">
						"
					</div>
					<div className="absolute -bottom-6 -right-4 md:-right-8 text-6xl md:text-8xl text-lake-turquoise/30 font-serif rotate-180">
						"
					</div>

					<div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-morning-mist/20 shadow-2xl">
						<blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-lake-turquoise leading-relaxed max-w-4xl mx-auto">
							Les rancœurs enfouies dans les montagnes peuvent soudainement
							éclater en une vengeance impitoyable, révélant ainsi de sombres
							secrets.
						</blockquote>
					</div>
				</div>

				{/* Phrase de conclusion esthétique améliorée */}
				<div
					ref={quoteRef3 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible3 ? "visible" : ""} max-w-3xl mx-auto relative`}
					style={{ animationDelay: "0.6s" }}>
					{/* Ornements décoratifs */}
					<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 opacity-20">
						<div
							className="w-full h-full border-2 border-sunset-orange rounded-full animate-spin"
							style={{ animationDuration: "20s" }}></div>
						<div
							className="absolute top-2 left-2 w-12 h-12 border border-lake-turquoise rounded-full animate-spin"
							style={{
								animationDuration: "15s",
								animationDirection: "reverse",
							}}></div>
					</div>

					<div className="bg-gradient-to-r from-sunset-orange/10 via-transparent to-lake-turquoise/10 rounded-xl p-8 backdrop-blur-sm border border-white/10">
						<div className="w-24 md:w-32 h-1 bg-gradient-to-r from-sunset-orange to-lake-turquoise mx-auto mb-6 rounded-full shadow-lg"></div>
						<p className="text-morning-mist/90 text-lg md:text-xl font-serif italic leading-relaxed">
							Êtes-vous prêt à plonger dans les mystères de l'âme humaine ?
						</p>
						<div className="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-sunset-orange to-transparent mx-auto mt-6 rounded-full"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
