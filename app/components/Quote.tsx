"use client";

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Quote() {
	const { ref: quoteRef1, isVisible: isVisible1 } = useScrollAnimation();
	const { ref: quoteRef2, isVisible: isVisible2 } = useScrollAnimation();

	return (
		<section className="py-20 bg-gradient-to-b from-deep-night to-mountain-blue text-center">
			<div className="container mx-auto px-4">
				<div
					ref={quoteRef1 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible1 ? "visible" : ""} mb-16`}>
					<blockquote className="text-2xl md:text-3xl font-serif italic text-morning-mist leading-relaxed max-w-4xl mx-auto">
						« Dans chaque mot se cache un univers. Chaque phrase est un voyage
						vers l'inconnu, et chaque page une invitation à explorer les
						profondeurs de l'âme humaine. »
					</blockquote>
				</div>

				<div
					ref={quoteRef2 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible2 ? "visible" : ""}`}
					style={{ animationDelay: "0.3s" }}>
					<blockquote className="text-2xl md:text-3xl font-serif italic text-lake-turquoise leading-relaxed max-w-4xl mx-auto">
						« Les rancœurs enfouies dans les montagnes peuvent soudainement
						éclater en une vengeance impitoyable, révélant ainsi de sombres
						secrets. »
					</blockquote>
				</div>
			</div>
		</section>
	);
}
