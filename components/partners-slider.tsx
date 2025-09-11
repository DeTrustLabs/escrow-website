"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function PartnersSlider() {
	const t = useTranslations("partners");

	const partners = [
		{ name: t("partner1"), logo: "/placeholder.svg?height=60&width=120" },
		{ name: t("partner2"), logo: "/placeholder.svg?height=60&width=120" },
		{ name: t("partner3"), logo: "/placeholder.svg?height=60&width=120" },
		{ name: t("partner4"), logo: "/placeholder.svg?height=60&width=120" },
		{ name: t("partner5"), logo: "/placeholder.svg?height=60&width=120" },
		{ name: t("partner6"), logo: "/placeholder.svg?height=60&width=120" },
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex + 1) % Math.ceil(partners.length / 3)
			);
		}, 3000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="overflow-hidden">
			<div
				className="flex transition-transform duration-500 ease-in-out"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{Array.from({ length: Math.ceil(partners.length / 3) }).map(
					(_, slideIndex) => (
						<div key={slideIndex} className="w-full flex-shrink-0">
							<div className="grid grid-cols-3 gap-8 px-4">
								{partners
									.slice(slideIndex * 3, slideIndex * 3 + 3)
									.map((partner, index) => (
										<div
											key={index}
											className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm"
										>
											<Image
												src={partner.logo || "/placeholder.svg"}
												alt={partner.name}
												width={120}
												height={60}
												className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
											/>
										</div>
									))}
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}
