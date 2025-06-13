"use client";

export default function PageTransition({ isTransitioning }) {
	if (!isTransitioning) return null;

	return (
		<div
			className="fixed inset-0 z-[9999] pointer-events-none"
			aria-hidden="true">
			<div className="absolute inset-0 bg-deep-night/90 animate-fade-in-out">
				<div className="h-1 bg-red-600 animate-progress"></div>
			</div>
		</div>
	);
}
