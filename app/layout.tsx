import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: 'Xavier Aymeric Frey - Auteur de "Ombres sur le lac"',
	description:
		'Découvrez le premier roman de Xavier Aymeric Frey, "Ombres sur le lac". Un thriller policier captivant où Bruno disparaît mystérieusement lors de la fête du lac d\'Annecy.',
	metadataBase: new URL("https://xavieraymericfrey.vercel.app"),
	openGraph: {
		type: "website",
		locale: "fr_FR",
		siteName: "Xavier Aymeric Frey",
		title: 'Xavier Aymeric Frey - Auteur de "Ombres sur le lac"',
		description:
			'Découvrez le premier roman de Xavier Aymeric Frey, "Ombres sur le lac". Un thriller policier captivant qui se déroule lors de la fête du lac d\'Annecy.',
		images: ["/og-image.jpg"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="font-sans antialiased">{children}</body>
		</html>
	);
}
