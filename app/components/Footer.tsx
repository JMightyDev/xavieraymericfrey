"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePageTransition } from "../hooks/usePageTransition";

export default function Footer() {
	const { navigateWithTransition } = usePageTransition();

	return (
		<footer className="relative bg-gradient-to-b from-mountain-blue via-deep-night to-slate-900 text-white py-20 overflow-hidden">
			{/* Effet décoratif de fond */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-lake-turquoise to-sunset-orange blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-sunset-orange to-lake-turquoise blur-3xl"></div>
			</div>

			<div className="container mx-auto px-4 relative">
				{/* Section principale */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
					{/* Navigation */}
					<div>
						<div className="flex items-center mb-6">
							<div className="w-1 h-8 bg-gradient-to-b from-sunset-orange to-lake-turquoise rounded-full mr-3"></div>
							<h3 className="text-2xl font-serif text-snow-white">
								Navigation
							</h3>
						</div>
						<div className="space-y-4">
							<button
								onClick={() => navigateWithTransition("/")}
								className="group flex items-center text-morning-mist hover:text-lake-turquoise transition-all duration-300 cursor-pointer">
								<span className="w-2 h-2 bg-current rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity"></span>
								Accueil
							</button>
							<button
								onClick={() => navigateWithTransition("/boutique")}
								className="group flex items-center text-morning-mist hover:text-lake-turquoise transition-all duration-300 cursor-pointer">
								<span className="w-2 h-2 bg-current rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity"></span>
								Boutique
							</button>
							<button
								onClick={() => navigateWithTransition("/auteur")}
								className="group flex items-center text-morning-mist hover:text-lake-turquoise transition-all duration-300 cursor-pointer">
								<span className="w-2 h-2 bg-current rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity"></span>
								L'auteur
							</button>
							<button
								onClick={() => navigateWithTransition("/contact")}
								className="group flex items-center text-morning-mist hover:text-lake-turquoise transition-all duration-300 cursor-pointer">
								<span className="w-2 h-2 bg-current rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity"></span>
								Contact
							</button>
							<button
								onClick={() => navigateWithTransition("/newsletter")}
								className="group flex items-center text-morning-mist hover:text-lake-turquoise transition-all duration-300 cursor-pointer">
								<span className="w-2 h-2 bg-current rounded-full mr-3 opacity-50 group-hover:opacity-100 transition-opacity"></span>
								Newsletter
							</button>
						</div>
					</div>

					{/* Informations livre */}
					<div>
						<div className="flex items-center mb-6">
							<div className="w-1 h-8 bg-gradient-to-b from-sunset-orange to-lake-turquoise rounded-full mr-3"></div>
							<h3 className="text-2xl font-serif text-snow-white">Le livre</h3>
						</div>
						<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
							<h4 className="text-xl font-serif text-lake-turquoise mb-3">
								"Ombres sur le lac"
							</h4>
							<div className="flex items-center mb-4">
								<div className="w-3 h-3 bg-gradient-to-r from-sunset-orange to-lake-turquoise rounded-full mr-2"></div>
								<p className="text-morning-mist text-sm">
									Sortie prévue : été 2025
								</p>
							</div>
							<p className="text-morning-mist text-sm leading-relaxed">
								Un thriller policier captivant où Bruno disparaît
								mystérieusement lors de la fête du lac d'Annecy. Entre secrets
								et révélations, une enquête haletante vous attend.
							</p>
						</div>
					</div>

					{/* Réseaux sociaux */}
					<div>
						<div className="flex items-center mb-6">
							<div className="w-1 h-8 bg-gradient-to-b from-sunset-orange to-lake-turquoise rounded-full mr-3"></div>
							<h3 className="text-2xl font-serif text-snow-white">
								Suivez-moi
							</h3>
						</div>
						<div className="space-y-4">
							<a
								href="https://instagram.com/xavieraymeric_frey"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center text-morning-mist hover:text-lake-turquoise transition-all duration-300">
								<div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
									<svg
										className="w-5 h-5 text-white"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
									</svg>
								</div>
								Instagram
							</a>
							<a
								href="https://youtube.com/@xavieraymeric_frey"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center text-morning-mist hover:text-lake-turquoise transition-all duration-300">
								<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
									<svg
										className="w-5 h-5 text-white"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
									</svg>
								</div>
								YouTube
							</a>
							<a
								href="https://tiktok.com/@xavieraymeric_frey"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center text-morning-mist hover:text-lake-turquoise transition-all duration-300">
								<div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
									<svg
										className="w-5 h-5 text-white"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
									</svg>
								</div>
								TikTok
							</a>
						</div>
					</div>
				</div>

				{/* Copyright avec style amélioré */}
				<div className="border-t border-gradient-to-r from-transparent via-lake-blue/30 to-transparent pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-morning-mist text-sm">
							© 2025 Xavier Aymeric Frey • Site créé par{" "}
							<a
								href="https://www.jmighty.fr"
								target="_blank"
								rel="noopener noreferrer"
								className="text-lake-turquoise hover:text-sunset-orange transition-colors duration-300">
								JMighty
							</a>
						</p>
						<div className="flex items-center space-x-6 text-sm text-morning-mist">
							<span className="flex items-center">
								<div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
								Livre en cours d'écriture
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
