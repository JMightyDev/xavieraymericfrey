"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { usePageTransition } from "../hooks/usePageTransition";

export default function MockupSection() {
	const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
	const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
	const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
	const { navigateWithTransition } = usePageTransition();

	return (
		<section className="bg-gradient-to-b from-snow-white via-morning-mist/20 to-lake-blue/10 py-12 md:py-20">
			<div className="container mx-auto px-4">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className={`text-2xl md:text-4xl font-serif text-center mb-8 md:mb-16 text-mountain-blue animate-on-scroll ${titleVisible ? "visible" : ""}`}>
					Plongez dans l'intrigue
				</h2>

				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
						{/* Image mockup - plus petite */}
						<div
							ref={imageRef as React.RefObject<HTMLDivElement>}
							className={`relative animate-on-scroll ${imageVisible ? "visible" : ""}`}
							style={{ animationDelay: "0.2s" }}>
							<div
								onClick={() => navigateWithTransition("/boutique")}
								className="card-hover cursor-pointer hover:scale-102 hover:shadow-2xl transition-all duration-300">
								<Image
									src="/images/book/mockup-livre.png"
									alt="Mockup Ombres sur le lac - Cliquez pour commander"
									width={500}
									height={375}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
									style={{ width: "100%", height: "auto" }}
									className="shadow-2xl rounded-lg"
								/>
							</div>
						</div>

						{/* Extrait du livre */}
						<div
							ref={textRef as React.RefObject<HTMLDivElement>}
							className={`animate-on-scroll ${textVisible ? "visible" : ""}`}
							style={{ animationDelay: "0.4s" }}>
							<div className="bg-snow-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-morning-mist/30">
								<h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 text-mountain-blue">
									Extrait du livre
								</h3>

								<div className="prose prose-base md:prose-lg">
									<blockquote className="text-sm md:text-lg italic text-stone-gray leading-relaxed mb-4 md:mb-6 border-l-4 border-red-600 pl-4 md:pl-6">
										« Les feux d'artifice explosaient au-dessus du lac d'Annecy
										dans un fracas de lumière et de couleurs. Quarante mille
										spectateurs levaient les yeux vers le ciel embrasé, mais
										Bruno, lui, fixait Damien avec une intensité troublante.
										<br />
										<br />
										— Tu crois vraiment que personne ne saura jamais ?
										murmura-t-il, sa voix presque inaudible dans le vacarme des
										explosions.
										<br />
										<br />
										Damien serra les poings. Cette discussion aurait dû avoir
										lieu ailleurs, pas ici, pas maintenant. Mais quand Bruno
										avait quelque chose en tête...
										<br />
										<br />
										L'instant d'après, dans l'éclat aveuglant d'un feu
										d'artifice particulièrement imposant, Bruno avait disparu. »
									</blockquote>
								</div>

								<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 border-t border-morning-mist/30 gap-4">
									<div className="text-xs md:text-sm text-stone-gray">
										<p className="font-medium text-mountain-blue">Chapitre 3</p>
										<p>"Feux et disparitions"</p>
									</div>
									<button
										onClick={() => navigateWithTransition("/boutique")}
										className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 md:px-6 py-2 rounded-md button-hover shadow-lg text-xs md:text-sm font-medium cursor-pointer group">
										<div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
										<span className="relative z-10">Lire la suite</span>
									</button>
								</div>
							</div>

							{/* Boutons d'action en dessous */}
							<div className="flex gap-4 md:gap-6 justify-center lg:justify-start flex-wrap mt-6 md:mt-8">
								<button
									onClick={() => navigateWithTransition("/boutique")}
									className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 md:px-8 py-2 md:py-3 rounded-md button-hover shadow-lg font-medium text-sm md:text-base cursor-pointer group">
									<div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
									<span className="relative z-10">Pré-commander</span>
								</button>
								<button
									onClick={() => navigateWithTransition("/auteur")}
									className="border-2 border-gray-800 hover:bg-gray-800/10 hover:border-red-600 text-gray-800 hover:text-red-600 px-6 md:px-8 py-2 md:py-3 rounded-md button-hover font-medium text-sm md:text-base cursor-pointer">
									Découvrir l'auteur
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
