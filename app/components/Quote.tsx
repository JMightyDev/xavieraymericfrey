import React from "react";

export default function Quote() {
	return (
		<section className="bg-white py-20">
			<div className="container mx-auto px-4">
				<blockquote className="text-center">
					<p className="text-2xl md:text-3xl font-serif text-anthracite italic mb-6">
						« Dans chaque mot se cache un univers. Chaque phrase est un voyage
						vers l'inconnu, et chaque page une invitation à explorer les
						profondeurs de l'âme humaine. »
					</p>
				</blockquote>

				{/* Citation du livre */}
				<div className="mt-16 max-w-4xl mx-auto text-center">
					<blockquote className="text-xl md:text-2xl font-serif text-brick italic">
						« Les rancœurs enfouies dans les montagnes peuvent soudainement
						éclater en une vengeance impitoyable, révélant ainsi de sombres
						secrets. »
					</blockquote>
				</div>
			</div>
		</section>
	);
}
