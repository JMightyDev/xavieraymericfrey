"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { usePageTransition } from "../hooks/usePageTransition";

export default function BookSection() {
	const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
	const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
	const bookImageRef = useRef<HTMLDivElement>(null);
	const { navigateWithTransition } = usePageTransition();

	useEffect(() => {
		const handleScroll = () => {
			if (bookImageRef.current) {
				const rect = bookImageRef.current.getBoundingClientRect();
				const scrollProgress = Math.max(
					0,
					Math.min(
						1,
						(window.innerHeight - rect.top) / (window.innerHeight + rect.height)
					)
				);

				// Parallax très subtil et contrôlé
				const parallaxValue = (scrollProgress - 0.5) * 20; // Max 10px dans chaque direction

				bookImageRef.current.style.transform = `translateY(${parallaxValue}px)`;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Initial call
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section
			data-section="book-about"
			className="bg-gradient-to-b from-snow-white via-snow-white to-morning-mist/20 py-20">
			<div className="container mx-auto px-4">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className={`text-4xl font-serif text-center mb-16 text-mountain-blue font-bold animate-on-scroll ${titleVisible ? "visible" : ""}`}>
					À propos du livre
				</h2>

				<div
					ref={contentRef as React.RefObject<HTMLDivElement>}
					className={`flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto animate-on-scroll ${contentVisible ? "visible" : ""}`}
					style={{ animationDelay: "0.2s" }}>
					{/* Images du livre avec parallax subtil et hover - cliquable */}
					<div className="flex-shrink-0 mx-auto lg:mx-0">
						<div
							ref={bookImageRef}
							onClick={() => navigateWithTransition("/boutique")}
							className="shadow-2xl rounded-lg overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 hover:rotate-1 group will-change-transform cursor-pointer hover:scale-105">
							<Image
								src="/images/book/ombre-sur-le-lac.webp"
								alt="Couverture Ombres sur le lac - Cliquez pour commander"
								width={320}
								height={460}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
								style={{ width: "auto", height: "auto" }}
								className="max-w-80 transition-all duration-500 group-hover:brightness-110"
							/>
						</div>
					</div>

					{/* Résumé du livre */}
					<div className="flex-1">
						<div className="prose prose-lg mx-auto lg:mx-0">
							<p className="text-lg leading-relaxed mb-6 text-mountain-blue">
								Au cœur des illuminations des feux d'artifice de la Fête du lac
								d'Annecy, un drame prend forme en silence : Bruno, pilier de la
								communauté pastorale locale, disparaît dans l'obscurité laissant
								derrière lui un mystère opaque.
							</p>
							<p className="text-lg leading-relaxed mb-6 text-mountain-blue">
								Des rumeurs évoquent une dispute houleuse avec Damien, un ami
								d'enfance devenu un rival. Quand le luxueux véhicule de ce
								dernier démarre en trombe à l'annonce de la disparition, les
								soupçons s'intensifient.
							</p>
							<p className="text-lg leading-relaxed mb-6 text-mountain-blue">
								Qui aurait eu des raisons de s'attaquer à cet homme intègre ?
								Entre apparences trompeuses et tensions exacerbées, Maxime
								Ebner, commandant du B.S.D.A.S en charge de l'enquête, se
								retrouve plongé dans un jeu dangereux où la vérité semble
								insaisissable.
							</p>

							{/* Prix et infos avec design amélioré - cliquable */}
							<div
								onClick={() => navigateWithTransition("/boutique")}
								className="bg-gradient-to-r from-morning-mist/50 to-lake-turquoise/30 p-6 rounded-xl mt-8 border border-lake-turquoise/50 card-hover cursor-pointer hover:shadow-xl hover:scale-102 hover:border-lake-turquoise/70 transition-all duration-300">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-3xl font-bold text-sunset-orange">
											8,40 €
										</p>
										<p className="text-sm text-mountain-blue font-medium">
											TTC FRANCE
										</p>
										<p className="text-sm text-stone-gray mt-2">
											ISBN 979-1-041-54523-0
										</p>
									</div>
									<div className="text-right">
										<p className="font-bold text-mountain-blue text-lg">
											ROMAN POLICIER
										</p>
										<p className="text-sm text-stone-gray">
											Sortie prévue : été 2025
										</p>
									</div>
								</div>
								{/* Indication visuelle pour montrer que c'est cliquable */}
								<div className="mt-3 text-center">
									<p className="text-xs text-mountain-blue/70 italic">
										Cliquez pour pré-commander
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
