"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { usePageTransition } from "../hooks/usePageTransition";

export default function Biography() {
	const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
	const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation();
	const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
	const { navigateWithTransition } = usePageTransition();

	return (
		<section className="bg-gradient-to-b from-lake-blue/20 via-snow-white to-morning-mist/30 py-8 md:py-16">
			<div className="container mx-auto px-4">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className={`text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12 text-mountain-blue font-bold animate-on-scroll ${titleVisible ? "visible" : ""}`}>
					À propos de l'auteur
				</h2>

				{/* Photo de l'auteur en haut - agrandie et rectangulaire */}
				<div
					ref={photoRef as React.RefObject<HTMLDivElement>}
					className={`mb-10 md:mb-16 flex justify-center animate-on-scroll ${photoVisible ? "visible" : ""}`}
					style={{ animationDelay: "0.1s" }}>
					<div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 group">
						{/* Cadre décoratif élégant avec effet glassmorphism */}
						<div className="absolute -inset-2 bg-gradient-to-br from-white/20 via-white/5 to-white/20 rounded-2xl blur-sm"></div>
						<div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-gray-800/10 rounded-2xl"></div>
						<div className="absolute inset-0 border border-white/30 rounded-2xl group-hover:border-white/50 transition-all duration-500"></div>

						<Image
							src="/images/hero/xavier-portrait.png"
							alt="Xavier Aymeric Frey"
							fill
							sizes="320px"
							className="object-cover object-center transition-all duration-500 group-hover:brightness-110"
							style={{ objectPosition: "center 20%" }}
							priority
						/>

						{/* Overlay subtil pour plus de profondeur */}
						<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-2xl"></div>
					</div>
				</div>

				<div
					ref={contentRef as React.RefObject<HTMLDivElement>}
					className={`max-w-4xl mx-auto animate-on-scroll ${contentVisible ? "visible" : ""}`}
					style={{ animationDelay: "0.2s" }}>
					{/* Biographie avec fond amélioré pour la lisibilité */}
					<div className="bg-snow-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-morning-mist/30">
						<div className="prose prose-lg mx-auto">
							<p className="text-lg leading-relaxed mb-6 text-mountain-blue">
								Xavier Aymeric développe une écriture sensible et maîtrisée,
								portée par une narration précise et rythmée. Il s'inscrit dans
								le genre du roman à suspense avec une approche résolument
								humaine, attachée à l'évolution intérieure des personnages
								autant qu'à l'intrigue elle-même.
							</p>
							<p className="text-lg leading-relaxed mb-6 text-mountain-blue">
								Ce qui marque dans ses textes, c'est sa capacité à construire
								une tension durable sans jamais céder à la facilité. Chaque
								scène semble poser une question au lecteur, l'invitant à
								réfléchir, à douter, à observer autrement.
							</p>
							<p className="text-lg leading-relaxed mb-6 text-mountain-blue">
								L'ambiance qu'il déploie mêle réalisme et intensité
								émotionnelle. On y retrouve des moments d'action et d'urgence,
								mais aussi des respirations plus calmes, propices à la
								description des lieux, à l'approfondissement psychologique ou à
								la confrontation des valeurs humaines. Le doute, la culpabilité,
								l'amour, la colère ou le pardon traversent ses personnages,
								souvent confrontés à des choix lourds de conséquences.
							</p>
							<p className="text-lg leading-relaxed mb-6 text-mountain-blue">
								Xavier Aymeric propose une vision du roman policier où le
								mystère n'est jamais une fin en soi, mais un moyen de sonder ce
								que l'on cache, ce que l'on fuit et ce qui nous relie.
							</p>
							<p className="text-lg leading-relaxed mb-8 text-mountain-blue">
								Son univers s'adresse autant à ceux qui cherchent une bonne
								intrigue qu'à ceux qui attendent d'un roman qu'il leur parle de
								la complexité humaine.
							</p>

							{/* Signature avec effet hover amélioré */}
							<div className="mt-12 text-center">
								<div className="inline-block transition-all duration-500 hover:scale-110">
									<Image
										src="/images/hero/signature-finale.png"
										alt="Signature Xavier Aymeric Frey"
										width={250}
										height={100}
										sizes="250px"
										className="hover:opacity-100 transition-all duration-500 hover:drop-shadow-lg rounded-lg"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
