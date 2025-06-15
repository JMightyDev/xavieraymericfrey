"use client";

import React, { useState } from "react";
import { usePageTransition } from "../hooks/usePageTransition";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { navigateWithTransition } = usePageTransition();

	const navigationItems = [
		{ name: "Accueil", href: "/" },
		{ name: "Boutique", href: "/boutique" },
		{ name: "L'auteur", href: "/auteur" },
		{ name: "Contact", href: "/contact" },
		{ name: "Newsletter", href: "/newsletter" },
	];

	const socialLinks = [
		{
			name: "Instagram",
			href: "https://www.instagram.com/xavieraymeric_frey/",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
				</svg>
			),
		},
		{
			name: "YouTube",
			href: "https://www.youtube.com/@xavieraymericfrey/featured",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M23.498 6.186a2.915 2.915 0 0 0-2.051-2.051C19.646 3.667 12 3.667 12 3.667s-7.646 0-9.447.468A2.915 2.915 0 0 0 .502 6.186C0 7.988 0 12 0 12s0 4.012.502 5.814a2.915 2.915 0 0 0 2.051 2.051C4.354 20.333 12 20.333 12 20.333s7.646 0 9.447-.468a2.915 2.915 0 0 0 2.051-2.051C24 16.012 24 12 24 12s0-4.012-.502-5.814zM9.5 15.5v-7l6.5 3.5-6.5 3.5z" />
				</svg>
			),
		},
		{
			name: "TikTok",
			href: "https://www.tiktok.com/@xavieraymericfrey",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12.5 0A12.5 12.5 0 0 0 0 12.5 12.5 12.5 0 0 0 12.5 25 12.5 12.5 0 0 0 25 12.5 12.5 12.5 0 0 0 12.5 0zm5.5 9.5c-1.6 0-3-1.2-3.4-2.8V15c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5h1v2.8H9.6c-1.3 0-2.2.9-2.2 2.2s.9 2.2 2.2 2.2 2.2-.9 2.2-2.2V0h2.8c.4 2.5 2.4 4.5 4.9 4.9v4.6z" />
				</svg>
			),
		},
	];

	return (
		<header className="bg-gradient-to-r from-deep-night to-mountain-blue text-white shadow-lg fixed top-0 w-full z-[60]">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo/Nom */}
					<button
						onClick={() => navigateWithTransition("/")}
						className="text-lg sm:text-xl font-serif text-snow-white hover:text-red-600 transition-colors duration-200 cursor-pointer truncate">
						Xavier Aymeric Frey
					</button>

					{/* Navigation desktop */}
					<nav className="hidden md:flex items-center space-x-8">
						{navigationItems.map((item) => (
							<button
								key={item.name}
								onClick={() => navigateWithTransition(item.href)}
								className="text-morning-mist hover:text-red-600 transition-colors duration-200 cursor-pointer font-medium">
								{item.name}
							</button>
						))}

						{/* Séparateur */}
						<div className="w-px h-6 bg-morning-mist/30"></div>

						{/* Réseaux sociaux */}
						<div className="flex items-center space-x-4">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-morning-mist hover:text-red-600 transition-all duration-200 hover:scale-110 cursor-pointer group"
									title={social.name}>
									<div className="group-hover:scale-110 transition-transform duration-200">
										{social.icon}
									</div>
								</a>
							))}
						</div>
					</nav>

					{/* Menu burger mobile */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer p-1"
						aria-label="Menu de navigation">
						<span
							className={`bg-snow-white block h-0.5 w-6 rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
						<span
							className={`bg-snow-white block h-0.5 w-6 rounded my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
						<span
							className={`bg-snow-white block h-0.5 w-6 rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
					</button>
				</div>

				{/* Menu mobile */}
				{isMenuOpen && (
					<div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-deep-night to-mountain-blue border-t border-red-600/30 shadow-xl z-[70]">
						<nav className="px-4 py-6 space-y-4">
							{navigationItems.map((item) => (
								<button
									key={item.name}
									onClick={() => {
										navigateWithTransition(item.href);
										setIsMenuOpen(false);
									}}
									className="block w-full text-left text-morning-mist hover:text-red-600 transition-colors duration-200 cursor-pointer font-medium py-2 px-2 rounded hover:bg-white/5">
									{item.name}
								</button>
							))}

							{/* Réseaux sociaux mobile */}
							<div className="flex items-center justify-center space-x-6 pt-4 border-t border-red-600/30">
								<span className="text-sm text-morning-mist">Suivez-moi :</span>
								{socialLinks.map((social) => (
									<a
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-morning-mist hover:text-red-600 transition-colors duration-200 cursor-pointer p-2"
										title={social.name}>
										{social.icon}
									</a>
								))}
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
