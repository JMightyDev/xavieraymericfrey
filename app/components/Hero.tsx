import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<section
			className="min-h-screen flex items-center justify-center bg-anthracite text-white relative"
			style={{
				backgroundImage: "url(/images/hero/background.png)",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundBlendMode: "overlay",
			}}>
			<div className="container mx-auto px-4 py-16">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					{/* Image de l'auteur */}
					<div className="flex-shrink-0">
						<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-brick shadow-2xl">
							<Image
								src="/images/hero/xavier-portrait.png"
								alt="Xavier Aymeric Frey"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>

					{/* Contenu textuel */}
					<div className="text-center lg:text-left">
						<h1 className="font-serif text-5xl md:text-7xl mb-4">
							Xavier Aymeric Frey
						</h1>
						<div className="w-24 h-1 bg-brick mx-auto lg:mx-0 my-8 transition-all duration-300 hover:w-32"></div>
						<h2 className="text-3xl md:text-4xl font-serif mb-8">
							Ombres sur le lac
						</h2>
						<p className="text-xl md:text-2xl mb-12 text-gray-300">
							Premier roman
						</p>
						<div className="flex gap-6 justify-center lg:justify-start flex-wrap">
							<Link
								href="/boutique"
								className="bg-brick hover:bg-brick/90 text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
								Commander
							</Link>
							<Link
								href="/contact"
								className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
								Contact
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
