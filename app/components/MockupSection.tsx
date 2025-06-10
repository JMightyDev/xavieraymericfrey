import React from "react";
import Image from "next/image";

export default function MockupSection() {
	return (
		<section className="bg-gray-50 py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-serif text-center mb-16 text-anthracite">
					Le livre en situation
				</h2>

				<div className="max-w-4xl mx-auto text-center">
					<div className="relative">
						<Image
							src="/images/book/mockup-livre.png"
							alt="Mockup Ombres sur le lac"
							width={800}
							height={600}
							className="w-full h-auto shadow-2xl rounded-lg"
						/>
					</div>

					<div className="mt-12">
						<p className="text-xl text-gray-600 mb-8">
							Un thriller captivant qui vous plongera dans les mystères des
							montagnes françaises.
						</p>

						<div className="flex gap-6 justify-center flex-wrap">
							<button className="bg-brick hover:bg-brick/90 text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
								Pré-commander
							</button>
							<button className="border border-anthracite hover:bg-anthracite/10 text-anthracite px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
								En savoir plus
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
