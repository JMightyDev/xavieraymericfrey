import { Metadata } from "next";

export const metadata: Metadata = {
	title: "L'auteur - Xavier Aymeric Frey",
	description:
		'Découvrez Xavier Aymeric Frey, auteur de "Ombres sur le lac". Son parcours, ses inspirations et sa passion pour l\'écriture.',
};

export default function AuteurLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
