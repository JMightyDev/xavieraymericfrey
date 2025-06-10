"use client";

import React, { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setStatus({ type: null, message: "" });

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (response.ok) {
				setStatus({
					type: "success",
					message: "Message envoyé avec succès ! Nous vous répondrons bientôt.",
				});
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus({
					type: "error",
					message: result.error || "Une erreur est survenue",
				});
			}
		} catch (error) {
			setStatus({
				type: "error",
				message: "Erreur de connexion. Veuillez réessayer.",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="max-w-2xl mx-auto">
			{status.type && (
				<div
					className={`mb-6 p-4 rounded-md ${
						status.type === "success"
							? "bg-green-50 text-green-700 border border-green-200"
							: "bg-red-50 text-red-700 border border-red-200"
					}`}>
					{status.message}
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700 mb-1">
						Nom *
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brick focus:border-brick"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700 mb-1">
						Email *
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brick focus:border-brick"
					/>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700 mb-1">
						Message *
					</label>
					<textarea
						id="message"
						name="message"
						rows={6}
						value={formData.message}
						onChange={handleChange}
						required
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brick focus:border-brick"></textarea>
				</div>

				<div>
					<button
						type="submit"
						disabled={isLoading}
						className="w-full bg-brick hover:bg-brick/90 disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer text-white px-6 py-3 rounded-md transition">
						{isLoading ? "Envoi en cours..." : "Envoyer"}
					</button>
				</div>
			</form>

			<div className="mt-8 text-center text-sm text-gray-600">
				<p>* Champs obligatoires</p>
			</div>
		</div>
	);
}
