"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Biography() {
	const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
	const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

	return (
		<section className="bg-gradient-to-b from-lake-blue/20 via-snow-white to-morning-mist/30 py-20">
			<div className="container mx-auto px-4">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className={`text-4xl font-serif text-center mb-16 text-mountain-blue font-bold animate-on-scroll ${titleVisible ? "visible" : ""}`}>
					À propos de l'auteur
				</h2>

				<div
					ref={contentRef as React.RefObject<HTMLDivElement>}
					className={`flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto animate-on-scroll ${contentVisible ? "visible" : ""}`}
					style={{ animationDelay: "0.2s" }}>
					{/* Image de l'auteur */}
					<div className="flex-shrink-0 mx-auto lg:mx-0">
						<div className="card-hover">
							<Image
								src="/images/hero/livre-cover.png"
								alt="Xavier Aymeric Frey - Quatrième de couverture"
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
									Né en 1982 en Gironde, Xavier Aymeric se prend de passion pour
									l'écriture et la littérature très jeune. Passionné depuis
									toujours par le monde judiciaire qu'il a côtoyé depuis tout
									petit, son intérêt pour cette sphère ne s'est pas estompé avec
									le temps.
								</p>
								<p className="text-lg leading-relaxed mb-6 text-mountain-blue">
									Son travail au sein du ministère de l'Intérieur lui a donné
									l'envie d'écrire un premier ouvrage consacré à cet univers
									policier et de saluer avec respect ces hommes et ces femmes,
									héros anonymes du quotidien.
								</p>
								<p className="text-lg leading-relaxed mb-8 text-mountain-blue">
									Cet ouvrage traite des sujets du pardon, de la colère, de la
									rancune, et met à l'honneur l'amitié et la famille. Ses amis,
									dont certains de longue date, lui ont inspiré les personnages
									dépeints dans cette histoire.
								</p>

								{/* Signature avec effet hover */}
								<div className="mt-12 text-center lg:text-left">
									<div className="card-hover inline-block">
										<Image
											src="/images/hero/signature-finale.png"
											alt="Signature Xavier Aymeric Frey"
											width={200}
											height={80}
											sizes="200px"
											className="opacity-80 hover:opacity-100 transition-opacity duration-300"
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
