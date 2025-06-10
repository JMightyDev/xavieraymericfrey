"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

export function usePageTransition() {
	const [isTransitioning, setIsTransitioning] = useState(false);
	const router = useRouter();

	const navigateWithTransition = useCallback(
		(href: string) => {
			if (typeof window !== "undefined" && "startViewTransition" in document) {
				// @ts-ignore - View Transition API est expérimentale
				document.startViewTransition(() => {
					router.push(href);
				});
			} else {
				// Fallback avec animation CSS douce
				setIsTransitioning(true);
				document.body.style.opacity = "0.7";
				document.body.style.transform = "scale(0.98)";
				document.body.style.transition =
					"opacity 0.3s ease-in-out, transform 0.3s ease-in-out";

				setTimeout(() => {
					router.push(href);
				}, 250);
			}
		},
		[router]
	);

	return {
		navigateWithTransition,
		isTransitioning,
	};
}
