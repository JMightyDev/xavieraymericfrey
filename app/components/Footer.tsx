import React from "react";
import Link from "next/link";

export default function Footer() {
	const socialLinks = [
		{
			name: "Instagram",
			href: "https://www.instagram.com/xavieraymeric_frey/",
		},
		{ name: "YouTube", href: "https://youtube.com/@xavieraymericfrey" },
		{ name: "TikTok", href: "https://www.tiktok.com/@xavieraymericfrey" },
	];

	return (
		<footer className="bg-anthracite text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-serif mb-4">Navigation</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/" className="hover:text-brick transition">
									Accueil
								</Link>
							</li>
							<li>
								<Link href="/boutique" className="hover:text-brick transition">
									Boutique
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:text-brick transition">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-serif mb-4">Réseaux sociaux</h3>
						<ul className="space-y-2">
							{socialLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-brick transition">
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-serif mb-4">Newsletter</h3>
						<p className="mb-4">Restez informé des dernières actualités</p>
						<form className="flex gap-2">
							<input
								type="email"
								placeholder="Votre email"
								className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 flex-1"
							/>
							<button
								type="submit"
								className="bg-brick hover:bg-brick/90 px-4 py-2 rounded-md transition">
								S'inscrire
							</button>
						</form>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
					<p>
						© {new Date().getFullYear()} Xavier Aymeric Frey. Tous droits
						réservés.
					</p>
				</div>
			</div>
		</footer>
	);
}
