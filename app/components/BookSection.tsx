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
					className={`flex flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto animate-on-scroll ${contentVisible ? "visible" : ""}`}
					style={{ animationDelay: "0.2s" }}>
					{/* Images du livre avec parallax subtil et hover - cliquable */}
					<div className="flex-shrink-0 mx-auto lg:mx-0 lg:sticky lg:top-8">
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
						<div className="prose prose-lg mx-auto lg:mx-0 bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-morning-mist/30">
							<div className="space-y-6">
								<p className="text-lg leading-relaxed text-mountain-blue">
									Annecy, soir de la célèbre fête du lac. Sous un ciel illuminé
									par les feux d'artifice, Bruno, figure locale respectée,
									disparaît mystérieusement devant 40 000 spectateurs.
									Rapidement, l'inquiétude laisse place aux soupçons : une
									violente dispute avec Damien, son ancien ami devenu rival,
									intrigue les enquêteurs.
								</p>
								<p className="text-lg leading-relaxed text-mountain-blue">
									Mais à mesure que les témoignages se multiplient, le doute
									grandit. Les pistes s'embrouillent, les mensonges surgissent,
									les apparences deviennent trompeuses.
								</p>
								<p className="text-lg leading-relaxed text-mountain-blue">
									Bruno est-il vraiment la victime que tout le monde imagine, ou
									bien détient-il lui-même les clés du mystère ?
								</p>
								<p className="text-lg leading-relaxed text-mountain-blue italic border-l-4 border-sunset-orange pl-6">
									Entre secrets bien gardés et révélations inattendues, plongez
									dans une enquête haletante où personne n'est vraiment
									innocent.
								</p>
							</div>

							<div className="mt-8 text-center">
								<button
									onClick={(e) => {
										e.stopPropagation();
										navigateWithTransition("/boutique");
									}}
									className="bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white px-12 py-4 rounded-md button-hover shadow-lg font-medium text-lg cursor-pointer">
									Découvrir le livre
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
