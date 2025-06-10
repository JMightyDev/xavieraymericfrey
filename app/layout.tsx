import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "Xavier Aymeric Frey - Auteur",
		template: "%s | Xavier Aymeric Frey",
	},
	description:
		"Découvrez l'univers de Xavier Aymeric Frey, auteur du roman 'Ombres sur le lac'.",
	metadataBase: new URL("https://xavieraymericfrey.fr"),
	openGraph: {
		type: "website",
		locale: "fr_FR",
		siteName: "Xavier Aymeric Frey",
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
