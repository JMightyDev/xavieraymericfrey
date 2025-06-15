"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

export function usePageTransition() {
	const [isTransitioning, setIsTransitioning] = useState(false);
	const router = useRouter();

	const navigateWithTransition = useCallback(
		(href: string) => {
			// Si c'est la même page, ne pas naviguer
			if (typeof window !== "undefined" && window.location.pathname === href) {
				return;
			}

			setIsTransitioning(true);

			// Détection mobile pour optimiser les performances
			const isMobile =
				typeof window !== "undefined" &&
				(window.innerWidth <= 768 ||
					/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent
					));

			// Sur mobile, navigation immédiate pour éviter les lenteurs
			if (isMobile) {
				router.push(href);
				setIsTransitioning(false);
				return;
			}

			// Utilise la View Transition API native si disponible (Chrome 111+) - desktop uniquement
			if (typeof window !== "undefined" && "startViewTransition" in document) {
				// @ts-ignore - View Transition API
				document.startViewTransition(() => {
					router.push(href);
					setIsTransitioning(false);
				});
			} else {
				// Fallback desktop : transition douce avec fade simple
				document.body.style.opacity = "0.7";
				document.body.style.transition = "opacity 0.2s ease-in-out";

				setTimeout(() => {
					router.push(href);
					setIsTransitioning(false);

					// Reset après la navigation
					setTimeout(() => {
						document.body.style.opacity = "1";
						setTimeout(() => {
							document.body.style.removeProperty("transition");
							document.body.style.removeProperty("opacity");
						}, 200);
					}, 50);
				}, 200);
			}
		},
		[router]
	);

	return {
		navigateWithTransition,
		isTransitioning,
	};
}
