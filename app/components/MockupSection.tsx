"use client";

import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function MockupSection() {
	const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
	const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
	const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

	return (
		<section className="bg-gradient-to-b from-snow-white via-morning-mist/20 to-lake-blue/10 py-20">
			<div className="container mx-auto px-4">
				<h2
					ref={titleRef as React.RefObject<HTMLHeadingElement>}
					className={`text-4xl font-serif text-center mb-16 text-mountain-blue animate-on-scroll ${titleVisible ? "visible" : ""}`}>
					Le livre en situation
				</h2>

				<div className="max-w-4xl mx-auto text-center">
					<div
						ref={imageRef as React.RefObject<HTMLDivElement>}
						className={`relative animate-on-scroll ${imageVisible ? "visible" : ""}`}
						style={{ animationDelay: "0.2s" }}>
						<div className="card-hover">
							<Image
								src="/images/book/mockup-livre.png"
								alt="Mockup Ombres sur le lac"
								width={800}
								height={600}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
								style={{ width: "100%", height: "auto" }}
								className="shadow-2xl rounded-lg"
							/>
						</div>
					</div>

					<div
						ref={textRef as React.RefObject<HTMLDivElement>}
						className={`mt-12 animate-on-scroll ${textVisible ? "visible" : ""}`}
						style={{ animationDelay: "0.4s" }}>
						<p className="text-xl text-lake-blue mb-8 leading-relaxed">
							Un thriller captivant qui vous plongera dans les mystères des
							montagnes françaises.
						</p>

						<div className="flex gap-6 justify-center flex-wrap">
							<button className="bg-gradient-to-r from-sunset-orange to-lake-turquoise hover:from-lake-turquoise hover:to-sunset-orange text-white px-8 py-3 rounded-md button-hover shadow-lg font-medium">
								Pré-commander
							</button>
							<button className="border-2 border-lake-blue hover:bg-lake-blue/10 hover:border-lake-turquoise text-lake-blue hover:text-lake-turquoise px-8 py-3 rounded-md button-hover font-medium">
								En savoir plus
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
