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
		<section className="bg-gradient-to-b from-lake-blue/20 via-snow-white to-morning-mist/30 py-20">
			<div className="container mx-auto px-4">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className={`text-4xl font-serif text-center mb-12 text-mountain-blue font-bold animate-on-scroll ${titleVisible ? "visible" : ""}`}>
					À propos de l'auteur
				</h2>

				{/* Photo de l'auteur en haut */}
				<div
					ref={photoRef as React.RefObject<HTMLDivElement>}
					className={`mb-16 flex justify-center animate-on-scroll ${photoVisible ? "visible" : ""}`}
					style={{ animationDelay: "0.1s" }}>
					<div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-sunset-orange shadow-2xl transform hover:scale-105 transition-all duration-500">
						<Image
							src="/images/hero/xavier-portrait.png"
							alt="Xavier Aymeric Frey"
							fill
							sizes="192px"
							className="object-cover object-center scale-110"
							style={{ objectPosition: "center 20%" }}
							priority
						/>
					</div>
				</div>

				<div
					ref={contentRef as React.RefObject<HTMLDivElement>}
					className={`flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto animate-on-scroll ${contentVisible ? "visible" : ""}`}
					style={{ animationDelay: "0.2s" }}>
					{/* Image du livre - cliquable */}
					<div className="flex-shrink-0 mx-auto lg:mx-0">
						<div
							onClick={() => navigateWithTransition("/boutique")}
							className="card-hover cursor-pointer hover:scale-105 transition-all duration-300">
							<Image
								src="/images/hero/livre-cover.png"
								alt="Xavier Aymeric Frey - Quatrième de couverture - Cliquez pour commander"
								width={320}
								height={460}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
								style={{ width: "auto", height: "auto" }}
								className="max-w-80 shadow-2xl rounded-lg"
							/>
						</div>
					</div>

					{/* Biographie avec fond amélioré pour la lisibilité */}
					<div className="flex-1">
						<div className="bg-snow-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-morning-mist/30">
							<div className="prose prose-lg mx-auto lg:mx-0">
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
									description des lieux, à l'approfondissement psychologique ou
									à la confrontation des valeurs humaines. Le doute, la
									culpabilité, l'amour, la colère ou le pardon traversent ses
									personnages, souvent confrontés à des choix lourds de
									conséquences.
								</p>
								<p className="text-lg leading-relaxed mb-6 text-mountain-blue">
									Xavier Aymeric propose une vision du roman policier où le
									mystère n'est jamais une fin en soi, mais un moyen de sonder
									ce que l'on cache, ce que l'on fuit et ce qui nous relie.
								</p>
								<p className="text-lg leading-relaxed mb-8 text-mountain-blue">
									Son univers s'adresse autant à ceux qui cherchent une bonne
									intrigue qu'à ceux qui attendent d'un roman qu'il leur parle
									de la complexité humaine.
								</p>

								{/* Signature avec effet hover amélioré */}
								<div className="mt-12 text-center">
									<div className="inline-block transition-all duration-500 hover:scale-125 hover:rotate-1">
										<Image
											src="/images/hero/signature-finale.png"
											alt="Signature Xavier Aymeric Frey"
											width={200}
											height={80}
											sizes="200px"
											className="opacity-80 hover:opacity-100 transition-all duration-500 hover:drop-shadow-lg"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
