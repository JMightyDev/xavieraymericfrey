"use client";

import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import BookSection from "./components/BookSection";
import MockupSection from "./components/MockupSection";
import Biography from "./components/Biography";
import Footer from "./components/Footer";

export default function Home() {
	useEffect(() => {
		// Animation automatique pour tous les éléments avec la classe animate-on-scroll
		const animateOnScroll = () => {
			const elements = document.querySelectorAll(".animate-on-scroll");

			elements.forEach((element) => {
				const elementTop = element.getBoundingClientRect().top;
				const elementVisible = 150;

				if (elementTop < window.innerHeight - elementVisible) {
					element.classList.add("visible");
				}
			});
		};

		// Observer pour les animations au scroll
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -50px 0px",
			}
		);

		// Observer tous les éléments avec animate-on-scroll
		const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
		elementsToAnimate.forEach((el) => observer.observe(el));

		// Nettoyer à la destruction du composant
		return () => {
			elementsToAnimate.forEach((el) => observer.unobserve(el));
		};
	}, []);

	return (
		<main>
			<Hero />
			<Quote />
			<BookSection />
			<MockupSection />
			<Biography />
			<Footer />
		</main>
	);
}
