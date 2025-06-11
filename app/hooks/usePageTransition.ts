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

			// Utilise la View Transition API native si disponible (Chrome 111+)
			if (typeof window !== "undefined" && "startViewTransition" in document) {
				// @ts-ignore - View Transition API
				document.startViewTransition(() => {
					router.push(href);
					setIsTransitioning(false);
				});
			} else {
				// Fallback : transition très subtile sans décalage
				document.documentElement.style.setProperty("--page-transition", "true");

				setTimeout(() => {
					router.push(href);
					setIsTransitioning(false);

					// Reset après la navigation
					setTimeout(() => {
						document.documentElement.style.removeProperty("--page-transition");
					}, 100);
				}, 50);
			}
		},
		[router]
	);

	return {
		navigateWithTransition,
		isTransitioning,
	};
}
