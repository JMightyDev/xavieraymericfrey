import { NextRequest, NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

export async function POST(request: NextRequest) {
	try {
		// Vérification de la clé API Brevo
		if (!process.env.BREVO_API_KEY) {
			console.error(
				"BREVO_API_KEY manquante dans les variables d'environnement"
			);
			return NextResponse.json(
				{ error: "Configuration email manquante. Contactez l'administrateur." },
				{ status: 500 }
			);
		}

		// Configuration de l'API Brevo
		const apiInstance = new brevo.TransactionalEmailsApi();
		apiInstance.setApiKey(
			brevo.TransactionalEmailsApiApiKeys.apiKey,
			process.env.BREVO_API_KEY
		);

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

		console.log("Tentative d'envoi d'email avec Brevo...");
		console.log("From:", "xavieraymericfrey@gmail.com");
		console.log("To:", "xavieraymericfrey@gmail.com");
		console.log("Subject:", `Nouveau message de contact - ${name}`);

		// Préparation de l'email
		const sendSmtpEmail = new brevo.SendSmtpEmail();
		sendSmtpEmail.sender = {
			email: "xavieraymericfrey@gmail.com",
			name: "Contact Xavier Aymeric Frey",
		};
		sendSmtpEmail.to = [
			{
				email: "xavieraymericfrey@gmail.com",
				name: "Xavier Aymeric Frey",
			},
		];
		sendSmtpEmail.replyTo = {
			email: email,
			name: name,
		};
		sendSmtpEmail.subject = `Nouveau message de contact - ${name}`;
		sendSmtpEmail.htmlContent = `
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
				<h2 style="color: #1a4554;">Nouveau message de contact</h2>
				<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
					<p><strong>Nom :</strong> ${name}</p>
					<p><strong>Email :</strong> ${email}</p>
				</div>
				<div style="background-color: #ffffff; padding: 15px; border: 1px solid #e5e5e5; border-radius: 5px;">
					<p><strong>Message :</strong></p>
					<p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
				</div>
				<hr style="margin: 30px 0; border: 1px solid #e5e5e5;">
				<p style="font-size: 12px; color: #666; text-align: center;">
					Message reçu via le site xavieraymericfrey.fr
				</p>
			</div>
		`;

		// Envoi d'email avec Brevo
		const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

		console.log("Résultat Brevo:", result);

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
