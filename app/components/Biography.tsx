import React from "react";
import Image from "next/image";

export default function Biography() {
	return (
		<section className="bg-gray-50 py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-serif text-center mb-16 text-anthracite">
					À propos de l'auteur
				</h2>

				<div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
					{/* Image avec l'auteur */}
					<div className="flex-shrink-0 mx-auto lg:mx-0">
						<div className="shadow-2xl">
							<Image
								src="/images/hero/livre-cover.png"
								alt="Xavier Aymeric Frey - Quatrième de couverture"
								width={280}
								height={400}
								className="w-70 h-auto"
							/>
						</div>
					</div>

					{/* Contenu biographique */}
					<div className="flex-1 text-center lg:text-left">
						<div className="prose prose-lg mx-auto lg:mx-0">
							<p className="mb-6">
								Né en 1982 en Gironde, Xavier Aymeric se prend de passion pour
								l'écriture et la littérature très jeune. Passionné depuis
								toujours par le monde judiciaire qu'il a côtoyé depuis tout
								petit, son intérêt pour cette sphère ne s'est pas estompé avec
								le temps.
							</p>
							<p className="mb-6">
								Son travail au sein du ministère de l'Intérieur lui a donné
								l'envie d'écrire un premier ouvrage consacré à cet univers
								policier et de saluer avec respect ces hommes et ces femmes,
								héros anonymes du quotidien.
							</p>
							<p>
								Cet ouvrage traite des sujets du pardon, de la colère, de la
								rancune, et met à l'honneur l'amitié et la famille. Ses amis,
								dont certains de longue date, lui ont inspiré les personnages
								dépeints dans cette histoire.
							</p>

							{/* Signature de l'auteur */}
							<div className="mt-8 flex justify-center lg:justify-end">
								<Image
									src="/images/hero/signature-finale.png"
									alt="Signature Xavier Aymeric Frey"
									width={250}
									height={100}
									className="opacity-90"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
