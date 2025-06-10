"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation() {
	const ref = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -50px 0px",
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return { ref, isVisible };
}

export function useParallax() {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (ref.current) {
				const scrolled = window.pageYOffset;
				const element = ref.current;
				const rect = element.getBoundingClientRect();
				const elementTop = rect.top + scrolled;
				const elementHeight = rect.height;
				const windowHeight = window.innerHeight;

				// Calculer si l'élément est visible
				if (
					scrolled + windowHeight > elementTop &&
					scrolled < elementTop + elementHeight
				) {
					const speed = 0.5; // Vitesse du parallax (plus petit = plus lent)
					const yPos = -(scrolled - elementTop) * speed;
					element.style.transform = `translateY(${yPos}px)`;
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return ref;
}
