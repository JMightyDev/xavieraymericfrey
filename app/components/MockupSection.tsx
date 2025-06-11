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
		<section className="bg-gradient-to-b from-snow-white via-morning-mist/20 to-lake-blue/10 py-20">
			<div className="container mx-auto px-4">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className={`text-4xl font-serif text-center mb-16 text-mountain-blue animate-on-scroll ${titleVisible ? "visible" : ""}`}>
					Plongez dans l'intrigue
				</h2>

				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
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
							<div className="bg-snow-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-morning-mist/30">
								<h3 className="text-2xl font-serif mb-6 text-mountain-blue">
									Extrait du livre
								</h3>

								<div className="prose prose-lg">
									<blockquote className="text-lg italic text-stone-gray leading-relaxed mb-6 border-l-4 border-sunset-orange pl-6">
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

								<div className="flex items-center justify-between pt-6 border-t border-morning-mist/30">
									<div className="text-sm text-stone-gray">
										<p className="font-medium text-mountain-blue">Chapitre 3</p>
										<p>"Feux et disparitions"</p>
									</div>
									<button
										onClick={() => navigateWithTransition("/boutique")}
										className="bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer text-sm font-medium">
										Lire la suite
									</button>
								</div>
							</div>

							{/* Boutons d'action en dessous */}
							<div className="flex gap-6 justify-center lg:justify-start flex-wrap mt-8">
								<button
									onClick={() => navigateWithTransition("/boutique")}
									className="bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white px-8 py-3 rounded-md button-hover shadow-lg font-medium cursor-pointer">
									Pré-commander
								</button>
								<button
									onClick={() => navigateWithTransition("/auteur")}
									className="border-2 border-lake-blue hover:bg-lake-blue/10 hover:border-lake-turquoise text-lake-blue hover:text-lake-turquoise px-8 py-3 rounded-md button-hover font-medium cursor-pointer">
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
