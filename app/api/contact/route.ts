import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
	try {
		// Vérification de la clé API
		if (!process.env.RESEND_API_KEY) {
			console.error(
				"RESEND_API_KEY manquante dans les variables d'environnement"
			);
			return NextResponse.json(
				{ error: "Configuration email manquante. Contactez l'administrateur." },
				{ status: 500 }
			);
		}

		const resend = new Resend(process.env.RESEND_API_KEY);

		const { name, email, message } = await request.json();

		// Validation des données
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Tous les champs sont requis" },
				{ status: 400 }
			);
		}

		// Validation email basique
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json({ error: "Email invalide" }, { status: 400 });
		}

		console.log("Tentative d'envoi d'email avec Resend...");
		console.log("From:", "onboarding@resend.dev");
		console.log("To:", "contact@jmighty.fr");
		console.log("Subject:", `Nouveau message de contact - ${name}`);

		// Envoi d'email avec Resend
		const result = await resend.emails.send({
			from: "onboarding@resend.dev", // Domaine sandbox pour les tests
			to: "jeanmichel.sonn@gmail.com", // Temporaire : seule adresse autorisée en mode gratuit
			subject: `Nouveau message de contact - ${name}`,
			html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
			replyTo: email,
		});

		console.log("Résultat Resend:", result);

		return NextResponse.json(
			{ message: "Message envoyé avec succès" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Erreur lors de l'envoi du message:", error);

		// Affichage détaillé de l'erreur
		if (error instanceof Error) {
			console.error("Message d'erreur:", error.message);
			console.error("Stack:", error.stack);
		}

		return NextResponse.json(
			{ error: "Erreur lors de l'envoi du message" },
			{ status: 500 }
		);
	}
}
