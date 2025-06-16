"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { usePageTransition } from "../hooks/usePageTransition";
import { useState, useRef, useEffect } from "react";

export default function MockupSection() {
	const { navigateWithTransition } = usePageTransition();
	const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
	const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

	const [isExpanded, setIsExpanded] = useState(false);
	const [contentHeight, setContentHeight] = useState(0);
	const expandableRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (expandableRef.current) {
			setContentHeight(expandableRef.current.scrollHeight);
		}
	}, []);

	return (
		<section className="bg-gradient-to-b from-morning-mist/20 via-snow-white to-morning-mist/30 pt-4 pb-8 md:py-16">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-start">
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
									<blockquote className="text-sm md:text-base italic text-stone-gray leading-relaxed border-l-4 border-red-600 pl-4 md:pl-6">
										<div className="space-y-4 relative">
											<p>
												« Les mots du commandant Mignot résonnaient dans la tête
												de Maxime, quand il avait parlé d'un vieux flic à
												l'ancienne, un poil bourru, il avait parfaitement décrit
												le personnage. Bellavot était un policier à part, pas le
												mauvais bougre dans le fond, mais sacrément fatigué par
												ses années de service et assailli par ses certitudes.
											</p>
											<p>
												Se complaisant dans son quotidien sans vagues et sans
												surprises, cette disparition était le caillou dans sa
												chaussure déjà usée. Il lui fallait régler cela vite,
												pas forcément de la bonne manière, il en avait
												obscurément conscience, mais très vite surtout. Cet
												homme se préoccupait plus de son image et de sa
												notoriété que de l'équité et de la justice.
											</p>
											<div className="relative">
												<p>
													Maxime avait rapidement compris que, non seulement, ce
													généreux petit barbu ne lui serait pas d'une grande
													utilité pour l'enquête, mais au contraire, que son
													caractère entier et son parler sans filtres pourraient
													indirectement venir porter préjudice à l'instruction.
													D'ailleurs, songea-t-il, si réelle instruction il y
													avait eu, avec une application stricte des procédures
													et un respect de la présomption d'innocence, l'équipe
													du BSDAS ne serait pas là aujourd'hui.
												</p>

												{/* Effet de dégradé et points de suspension quand le texte n'est pas étendu */}
												{!isExpanded && (
													<>
														{/* Dégradé qui s'estompe */}
														<div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-snow-white/90 to-transparent pointer-events-none"></div>
														{/* Points de suspension avec animation */}
														<div className="absolute bottom-0 right-0 bg-snow-white/90 px-2 flex items-center">
															<span className="text-stone-gray/70 font-normal text-lg animate-pulse">
																...
															</span>
														</div>
													</>
												)}
											</div>

											<div
												className="overflow-hidden transition-all duration-700 ease-in-out"
												style={{
													height: isExpanded ? `${contentHeight}px` : "0px",
													opacity: isExpanded ? 1 : 0,
													transform: isExpanded
														? "translateY(0)"
														: "translateY(-10px)",
												}}>
												<div ref={expandableRef} className="space-y-4 pt-2">
													<p>
														D'esprit analyste et fin stratège, Maxime avait
														flairé un atout dans ce jeu, une carte à jouer qui
														lui permettrait d'avancer en terrain hostile tout en
														gardant la main. Non pas qu'il aimait se prendre
														pour un marionnettiste, mais il aimait pouvoir tirer
														les ficelles lui-même.
													</p>
													<p>
														Cet atout s'appelait depuis quelques instants Audrey
														Favier. Dès son entrée, il avait remarqué cette
														fille discrète, très bien habillée et, au passage,
														très classieuse.
													</p>
													<p>
														Elle s'était positionnée légèrement en retrait, dans
														le coin de la pièce, ses grands yeux verts plongés
														dans l'épais dossier qui servait de bouclier à sa
														timidité naturelle.
													</p>
													<p>
														Jetant de temps à autre des regards furtifs vers les
														inspecteurs lyonnais, et plus particulièrement vers
														leur commandant. Ces regards étaient
														respectueusement professionnels, mais en tant que
														policière habile et efficace, elle voulait, elle
														aussi, rapidement savoir à qui elle avait affaire.
														Habituée à composer avec la rudesse maladroite et
														gauche de son supérieur, qui néanmoins la respectait
														et reconnaissait son travail, Audrey avait développé
														des talents de perspicacité, de plus, son assurance
														cachée lui permettait d'allier discrétion et
														efficacité dans son travail. »
													</p>

													{/* Bouton de pré-commande pour continuer la lecture */}
													<div className="mt-6 pt-4 border-t border-morning-mist/30 text-center not-italic">
														<p className="text-sm text-stone-gray/80 mb-4 font-medium">
															Envie de connaître la suite de l'enquête ?
														</p>
														<div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
															<button
																onClick={() =>
																	navigateWithTransition("/boutique")
																}
																className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 md:px-8 py-2 md:py-3 rounded-md button-hover shadow-lg font-medium text-sm md:text-base cursor-pointer group not-italic">
																<div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
																<span className="relative z-10 flex items-center gap-2 justify-center">
																	<svg
																		className="w-4 h-4"
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
															<button
																onClick={() => setIsExpanded(!isExpanded)}
																className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-md button-hover shadow-lg font-medium text-sm cursor-pointer group not-italic">
																<div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
																<span className="relative z-10 flex items-center gap-2 justify-center">
																	<svg
																		className={`w-4 h-4 transition-transform duration-700 ease-in-out ${isExpanded ? "rotate-180" : ""}`}
																		fill="none"
																		stroke="currentColor"
																		viewBox="0 0 24 24">
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth={2}
																			d="M19 9l-7 7-7-7"
																		/>
																	</svg>
																	Réduire
																</span>
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</blockquote>
								</div>

								{/* Bouton "Lire la suite" déplacé ici, en bas */}
								{!isExpanded && (
									<div className="mt-6 flex justify-center">
										<button
											onClick={() => setIsExpanded(!isExpanded)}
											className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-2 rounded-md button-hover shadow-lg font-medium text-sm cursor-pointer group not-italic">
											<div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
											<span className="relative z-10 flex items-center gap-2">
												Lire la suite
												<svg
													className="w-4 h-4 transition-transform duration-700 ease-in-out"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</span>
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
