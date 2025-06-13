"use client";

import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Quote() {
	const { ref: quoteRef1, isVisible: isVisible1 } = useScrollAnimation();
	const { ref: quoteRef2, isVisible: isVisible2 } = useScrollAnimation();
	const { ref: quoteRef3, isVisible: isVisible3 } = useScrollAnimation();

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-deep-night to-mountain-blue text-center">
			<div className="container mx-auto px-4">
				<div
					ref={quoteRef1 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible1 ? "visible" : ""} mb-16`}>
					<blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-morning-mist leading-relaxed max-w-4xl mx-auto">
						« Dans chaque mot se cache un univers. Chaque phrase est un voyage
						vers l'inconnu, et chaque page une invitation à explorer les
						profondeurs de l'âme humaine. »
					</blockquote>
				</div>

				<div
					ref={quoteRef2 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible2 ? "visible" : ""} mb-16`}
					style={{ animationDelay: "0.3s" }}>
					<blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-lake-turquoise leading-relaxed max-w-4xl mx-auto">
						« Les rancœurs enfouies dans les montagnes peuvent soudainement
						éclater en une vengeance impitoyable, révélant ainsi de sombres
						secrets. »
					</blockquote>
				</div>

				<div
					ref={quoteRef3 as React.RefObject<HTMLDivElement>}
					className={`animate-on-scroll ${isVisible3 ? "visible" : ""} max-w-3xl mx-auto`}
					style={{ animationDelay: "0.6s" }}>
					<div className="w-24 md:w-32 h-1 bg-gradient-to-r from-sunset-orange to-lake-turquoise mx-auto mb-6"></div>
					<p className="text-morning-mist/90 text-lg md:text-xl font-serif italic leading-relaxed">
						Une philosophie qui guide chaque page de cette enquête où se mêlent
						secrets de l'âme et mystères des montagnes.
					</p>
					<div className="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-sunset-orange to-transparent mx-auto mt-6"></div>
				</div>
			</div>
		</section>
	);
}
