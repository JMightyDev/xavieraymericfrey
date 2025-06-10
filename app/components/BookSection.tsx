import React from "react";
import Image from "next/image";

export default function BookSection() {
	return (
		<section className="bg-white py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-serif text-center mb-16 text-anthracite">
					À propos du livre
				</h2>

				<div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
					{/* Images du livre */}
					<div className="flex-shrink-0 mx-auto lg:mx-0">
						<div className="shadow-2xl">
							<Image
								src="/images/book/ombre-sur-le-lac.webp"
								alt="Couverture Ombres sur le lac"
								width={320}
								height={460}
								className="w-80 h-auto"
							/>
						</div>
					</div>

					{/* Résumé du livre */}
					<div className="flex-1">
						<div className="prose prose-lg mx-auto lg:mx-0">
							<p className="text-lg leading-relaxed mb-6">
								Au cœur des illuminations des feux d'artifice de la Fête du lac
								d'Annecy, un drame prend forme en silence : Bruno, pilier de la
								communauté pastorale locale, disparaît dans l'obscurité laissant
								derrière lui un mystère opaque.
							</p>
							<p className="text-lg leading-relaxed mb-6">
								Des rumeurs évoquent une dispute houleuse avec Damien, un ami
								d'enfance devenu un rival. Quand le luxueux véhicule de ce
								dernier démarre en trombe à l'annonce de la disparition, les
								soupçons s'intensifient.
							</p>
							<p className="text-lg leading-relaxed mb-6">
								Qui aurait eu des raisons de s'attaquer à cet homme intègre ?
								Entre apparences trompeuses et tensions exacerbées, Maxime
								Ebner, commandant du B.S.D.A.S en charge de l'enquête, se
								retrouve plongé dans un jeu dangereux où la vérité semble
								insaisissable.
							</p>

							{/* Prix et infos */}
							<div className="bg-gray-50 p-6 rounded-lg mt-8">
								<div className="flex justify-between items-center">
									<div>
										<p className="text-2xl font-bold text-brick">8,40 €</p>
										<p className="text-sm text-gray-600">TTC FRANCE</p>
										<p className="text-sm text-gray-600 mt-2">
											ISBN 979-1-041-54523-0
										</p>
									</div>
									<div className="text-right">
										<p className="font-semibold text-anthracite">
											ROMAN POLICIER
										</p>
										<p className="text-sm text-gray-600">
											Sortie prévue : printemps 2025
										</p>
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
